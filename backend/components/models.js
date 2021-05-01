const mongoose = require('mongoose');
mongoose.connect(['mongodb://', mongo_host, ':', mongo_port, '/', mongo_dbname].join(''), {useNewUrlParser: true, useUnifiedTopology: true});

const Movie = mongoose.model('Movie', {
    title: String,
    year: Number,
    rated: String,
    type: String,
    plot: String,
    language: String
});