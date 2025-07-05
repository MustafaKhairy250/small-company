const express = require('express');
const app = express();
const checkRole = require('./middleware/role-middleware')
const PORT = process.env.PORT || 3500;


//Static Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes //! users/admins routes
app.use('/api/login' , require('./routes/api/loginRoute')); //login route
app.use('/users/me' , require('./routes/userAuth/meRoute')) //Showing user data route
app.use('/users/me' , require('./routes/userAuth/update-me-route')) //Updating user data route
//! admins only routes
app.use('/api/register' , require('./routes/api/registerRoute')); //register route
app.use('/users/' , require('./routes/adminAuth/all-data-Route')) //Showing all data route

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));