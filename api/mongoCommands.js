// add objectIds to entries in nested documents

db.hotels.update(
    {},
    {
        $set : {
            "reviews.0._id" :ObjectId()
        }
    },
    {
        multi: true
    }
)

db.hotels.update(
    {"name": "Grand Hotel Palatino"},
    {
        $set : {
            "reviews.1._id" :ObjectId()
        }
    }
)