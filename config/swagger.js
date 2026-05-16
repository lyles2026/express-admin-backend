import swaggerJSDoc from "swagger-jsdoc";

const options = {
    defintion: {
        openapi: '3.0.0',
        info: {
            title: '后台管理api',
            version: '1.0.0',
            description: 'js + Express + Swagger'
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: '本地开发环境'
            }
        ]
    },
    apis:['./src/routes/*.js']
}

const specs = swaggerJSDoc(options)
export default specs