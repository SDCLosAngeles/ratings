const db = require('./database')

db.Photos.find({ review_id: 10 })
  .exec((err, data) => {
    console.log({ err });
    console.log({ data });
  })

// change id in reviews to review_id
db.reviewsMain.updateMany({}, { $rename: { "id": "review_id" } })

reviewsMain.aggregate([{
  $lookup: {
    from: 'reviewsPhotos',
    localField: 'review_id',
    foreignField: 'review_id',
    as: 'photos'
  }
}]);
  /*
{
  $unwind: '$photos'
},
{
  $addFields: {
    "id": "$photos.id",
    "url": "$photos.url"
  }
}
])
*/