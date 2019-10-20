const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FormSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    formNumber: {
        type: String,
        required: true
    },
    udpatedAt: {
        type: Date,
        required: true
    }
});
mongoose.model('forms', FormSchema);