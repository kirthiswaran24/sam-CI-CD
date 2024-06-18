// src/handlers/firstemployee.lambdaHandler.js

exports.lambdaHandler = async (event) => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Hello from fourthemployeeFunction!'
            })
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Internal Server Error'
            })
        };
    }
};
