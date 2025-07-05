const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;


//Static Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use('/api/register' , require('./routes/api/registerRoute')); //register route
app.use('/api/login' , require('./routes/api/loginRoute')); //login route
app.use('/users/me' , require('./routes/auth/meRoute')) //Showing user data route

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));