   // server/index.js
   const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   require('dotenv').config();

   const app = express();
   const PORT = process.env.PORT || 5000;

   app.use(cors());
   app.use(express.json());

   // Conectar a MongoDB
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => console.log('MongoDB conectado'))
       .catch(err => console.log('Error al conectar con MongoDB:', err));
    
    const habitRoutes = require('./routes/habits');

   
   app.use('/habits', habitRoutes);

   app.listen(PORT, () => {
       console.log(`Servidor corriendo en http://localhost:${PORT}`);
   });