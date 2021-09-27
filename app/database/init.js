const mongoose = require('mongoose'); 

//import { connexionString } from './conf/app-config'; 

export default async function initDB() { 
  //mongoose.connect(connexionString);
  mongoose.connect('mongodb+srv://admin:caxsyf-kazbu0-sEwnuf@cluster0.ywq7f.mongodb.net/vank');
  mongoose.connection.once('open', () => { 
    console.log('connected to database'); 
  }); 
  
  mongoose.connection.on('error', console.error); 
} 
