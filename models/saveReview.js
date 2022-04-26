const {
  Reviews,
  Photos,
  Characteristics,
  CharacteristicRev
} = require('../index');

const saveReview = function (revObj) {
  var currentDate = new Date();
  var newRevId;
  // countDocuments() vs estimatedDocumentCount()
  // eDC() for large number of items
  return Reviews.find()estimatedDocumentCount().exec()
    .then((count) => {
      // console.log('The count is: ', count)
      newRevId = count + 1;
      return Reviews.create({
        id: newRevId,
        product_id: revObj.product_id,
        rating: revObj.rating,
        summary: revObj.summary,,
        recommend: revObj.recommend,,
        response: '',
        body: revObj.body,,
        date: currentDate.toDateString(),
        reviewer_name: revObj.name,
        reviewer_email: revObj.reviewer_email,
        helpfulness: 0,
        reported: 0,
      })
    })
    .then((result) => {
      // console.log(result);
      _.forEach(revObj.photos, (photo) => {
        Photos.find().estimatedDocumentCount().exec()
          .then((photoId) => {
            // console.log('This should be the photoId:', photoId);
            // console.log('This should be the reviewId: ', result.id);
            return Photos.create({
              id: photoId,
              review_id: result.id,
              url: photo
            })
          })
      })
    })
    .then(() => {
      return CharacteristicRev.find().estimatedDocumentCount().exec()
    })
    .then((characterRevId) => {
      // console.log('This is the charRev id: ', characterRevId
      _.forEach(revObj.characteristics, (key, value) => {
        CharacteristicRev.create({
          id: characterRevId + 1,
          characteristic_id: key,
          reviewId: newRevId,
          value: value
        })
        characterRevId++;
      })
    })
}

module.exports = saveReview;