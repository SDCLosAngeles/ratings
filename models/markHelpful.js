const {
  Reviews,
  Photos,
  Characteristics,
  CharacteristicRev
} = require('../index');

const markHelpful = function (review_id) {
  return Reviews.findOneAndUpdate(
    { id: review_id },
    // $inc - mongoose increment operator
    { $inc: { helpfulness: 1 } }
  )
    .exec()
    .then((result) => {
      console.log('markHelpful result:', result);
      return result;
    });
};

module.exports = markHelpful;