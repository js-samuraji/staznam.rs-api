const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
    title: String,
    schortText: String,
    // img: img,
    fullText: String,
    //galeryImg:img
    sorce: {
        author: String,
        photoAuthor: String
    }

});

const Archive = mongoose.model('ArchiveText', textSchema);

module.exports = ArchiveText;