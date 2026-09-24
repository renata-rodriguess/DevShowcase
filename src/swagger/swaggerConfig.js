const swaggerUi =
    require('swagger-ui-express');
const documento = {
    openapi: '3.0.0',
    info: {
        title: 'API Portfólio',
        description: 'API Projetos',
        version: '1.0.0'
    },
    servers: [
        { url: 'http://localhost:3000' }
    ],
    paths: {
        '/api/profiles': {
            get: { summary: 'Listar perfis' },
            post: { summary: 'Criar perfil' }
        },
        '/api/projects': {
            get: { summary: 'Listar Projetos' },
            post: { summary: 'Criar projeto' }
        },
        '/api/projects/{id}/upvote': {
            put: { summary: 'Curtir projeto' }
        },
        '/api/projects/{id}/feedbacks': {
            post: { summary: 'Avaliar projeto' }
        }
    }
}
const swaggerConfig = (app) => {
    app.use(
        '/api-docs',
        swaggerUi.serve,
        swaggerUi.setup(documento)
    );
};
module.exports = swaggerConfig;