const mongoose = require('mongoose');

function Database() {
    mongoose.connect('mongodb://localhost/teste1', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Conexão realizada com sucesso");
    }).catch((error) => {
        console.log(`Error: ${error}`);
    })

}

module.exports = new Database();