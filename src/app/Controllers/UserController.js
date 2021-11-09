const Yup = require('yup');
const User = require('../Models/User');
const axios = require('axios');
const config = require('../../config/config');

class UserController {

    async get(request, response) {
        response.end("Hello World")
    }

    async store(request, response) {

        console.log({ request, response })
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email().required(),
            phone: Yup.string().min(10),
            font: Yup.string()
        });

        if (!(await schema.isValid(response.body))) {
            return response.status(400).json({
                error: true,
                code: 103,
                message: "Error: Dados inválidos!"
            });
        };

        var dados = response.body;

        return response.status(200).json({
            error: false,
            code: 205,
            message: "Sucesso: Usuário cadastrado com sucesso!"
        });


    };
}

module.exports = UserController;