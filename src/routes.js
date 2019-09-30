import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ mensagem: 'ola gui' }))

export default routes;
