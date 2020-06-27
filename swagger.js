
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Dockerized User Management Micro-Service",
            description: "A Dockerized Microservice for User Management",
            contact: {
                name: 'User APIs'
            },
            server: ["http:localhost:5000"]
        }
    },
    apis: ['./src/routes/*.js']
}

export default swaggerOptions;

