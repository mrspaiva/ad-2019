import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';
import './apiMail';

const app = express();
mongoose.connect('mongodb+srv://natalia:Universedb1!@cluster0.28nlb.mongodb.net/test-adireto?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
