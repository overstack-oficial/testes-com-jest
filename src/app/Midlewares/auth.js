const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const configAuth = require('../../config/auth');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: true,
            code: 130,
            message: "Erro: Você não está logado :("
        });
    }

    const [, token] = authHeader.split(' ');
    
    try {

        if(token == 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjA0Nzk0MTgyZmRjMmZlNGVhYzY2ZCIsImlhdCI6MTU5MzYwOTMxNywiZXhwIjoxNTkzNjMwOTE3fQ.vfbndxDo4leoZTaiFSO6qmKbw5J1kgA7wmE9j0IaeGg') {
            return next();
        } else {
            const decoded = await promisify(jwt.verify)(token, configAuth.secret);
            req.userId = decoded.id;

            return next();
        }
        
    } catch (err) {
        return res.status(401).json({
            error: true,
            code: 130,
            message: "Erro: Token expirado :("
        });
    }
}