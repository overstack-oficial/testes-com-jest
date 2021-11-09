const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const User = new mongoose.Schema({
    name: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    course: { type: String, required: false },
    font: { type: String, required: false },
    vid: { type: String, required: false },
    ocupation: { type: String, required: false },
    company: { type: String, required: false },
},
{
    timestamps: true,
});

User.plugin(mongoosePaginate);

module.exports = mongoose.model('user', User);

