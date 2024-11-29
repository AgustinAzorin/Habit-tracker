   // server/routes/habits.js
   const express = require('express');
   const router = express.Router();
   const Habit = require('../models/Habit');

   // Obtener todos los hábitos
   router.get('/', async (req, res) => {
       try {
           const habits = await Habit.find();
           res.json(habits);
       } catch (err) {
        console.error('Error al obtener hábitos:', err); // Agrega esta línea para ver el error en la consola
        res.status(500).json({ message: err.message });
       }
   });

   // Crear un nuevo hábito
   router.post('/', async (req, res) => {
       const habit = new Habit({
           name: req.body.name,
       });

       try {
           const newHabit = await habit.save();
           res.status(201).json(newHabit);
       } catch (err) {
        console.error('Error al crear hábito:', err); // Agrega esta línea para ver el error en la consola
        res.status(400).json({ message: err.message });
       }
   });

   module.exports = router;