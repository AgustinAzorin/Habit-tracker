   // client/src/components/HabitList.js
   import React, { useEffect, useState } from 'react';
   import axios from 'axios';

   const HabitList = () => {
       const [habits, setHabits] = useState([]);
       const [habitName, setHabitName] = useState('');

       useEffect(() => {
           const fetchHabits = async () => {
               const response = await axios.get('http://localhost:5000/habits');
               setHabits(response.data);
           };
           fetchHabits();
       }, []);

       const addHabit = async (e) => {
           e.preventDefault();
           if (!habitName) return;

           const response = await axios.post('http://localhost:5000/habits', { name: habitName });
           setHabits([...habits, response.data]);
           setHabitName('');
       };

       return (
           <div>
               <h1>Mis Hábitos</h1>
               <form onSubmit={addHabit}>
                   <input
                       type="text"
                       value={habitName}
                       onChange={(e) => setHabitName(e.target.value)}
                       placeholder="Agregar un nuevo hábito"
                   />
                   <button type="submit">Agregar</button>
               </form>
               <ul>
                   {habits.map(habit => (
                       <li key={habit._id}>{habit.name}</li>
                   ))}
               </ul>
           </div>
       );
   };

   export default HabitList;