const {
  Reviews,
  Photos,
  Characteristics,
  CharacteristicRev
} = require('../index');
const _ = require('lodash');

// async/await to control flow of code
const getMeta = async function (prodId) {
  // console.log('This is the product_id: ', prodId)
  let data = {
    product_id: prodId,
    ratings: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
    recommended: {
      0: 0,
      1: 0,
    },
    characteristics: {

    }
  };
  try {
    // result is arr of objects (one per review), each representing rating and recommend val
    result = await Review.aggregate([
      {
        $match: {
          product_id: prodId
        }
      },
      {
        $project: {
          recommend: 1,
          rating: 1,
          _id: 0
        }
      }
    ]);
    // loop through array to update the data for current products metadata
    _.forEach(result, (obj) => {
      data.ratings[obj.rating] += 1;
      data.recommend[obj.recommend] += 1;
    })
    // arr of obj - each obj contains the characteristic_id and name of characteristic. Each product has 1-5 chars
    let characteristicArr = await Charcteristic.find({ product_id: prodId }).select({ id: 1, name: 1, id: 0 })
    _.forEach((characteristicArr), (obj) => {
      data.characteristics[obj.name] = {
        id: obj.id,
        value: 0,
      }
    })
    // console.log('data after adding characteristics: ', data)
    // loop through all characteristics in data and get id for each one, then get avg value for it
    for (var key in data.characteristics) {
      let [avg] = await CharacteristicRev.aggregate([
        {
          $match: {
            characteristic_id: data.characteristics[key].id
          }
        },
        {
          $group: {
            _id: null,
            averageScore: {
              $avg: `${value}` //'$value'
            }
          }
        }
      ])
      // console.log('This is the average: ', average)
      data.characteristics[key].value = average.averageScore.toFixed(4);
    }
    // console.log('This is the data after avgs added: ', data);
    return data;
  } catch (event) {
    console.log(event);
  }
};

module.exports = getMeta;