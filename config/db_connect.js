const mongoose = require("mongoose")

const DbConnection = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser : true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        // useUnifiedTopology : true,
    })
}

module.exports = DbConnection;