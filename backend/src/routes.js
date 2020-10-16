import { Router } from 'express';
import Users from './models/Users';
import apiMail from './apiMail';

const routes = Router();

routes.get('/', async(request, response) => {
  const users = await Users.find();
  return response.json(users);
})

routes.post('/', async(request, response) => {
  const { name, email, amigo } = request.body;

  let users = await Users.findOne({ email });

  if(!users) {
    users = await Users.create({
      name,
      email,
      amigo,
    })
  }

  return response.json(users);
})

routes.get('/', async(request,response) => {
  const mail = await apiMail.findOne({ email })
  return response.json(mail)
})

routes.put('/', async(request, response) => {
  const { name, email } = request.body;
  const users = await Users.updateOne({ name, email })
  return response.json(users)
})

routes.delete('/', async(request, response) => {
  const { name } = request.body;
  const users = await Users.deleteOne({ name })
  return response.json(users)
})

export default routes;