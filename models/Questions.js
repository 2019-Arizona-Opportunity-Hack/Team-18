const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FormSchema = new Schema({
    pageOnForm: {
        type: Number,
        required: true
    },
    questionText: {
        type: String,
        required: true
    },
    questionNumber: {
        type: String,
        required: true
    },
    udpatedAt: {
        type: Date,
        required: true
    }
});
mongoose.model('forms', FormSchema);