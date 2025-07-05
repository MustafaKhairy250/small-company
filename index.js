const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;


//Static Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes //! users/admins routes
app.use('/api/login' , require('./routes/api/loginRoute')); //login route
app.use('/users/me' , require('./routes/userRoutes/meRoute')) //Showing user data route
app.use('/users/me' , require('./routes/userRoutes/update-me-route')) //Updating user data route
//! admins only routes
app.use('/api/register' , require('./routes/api/registerRoute')); //register route
app.use('/users/' , require('./routes/adminRoutes/all-data-Route')) //Showing all data route
app.use('/users/' , require('./routes/adminRoutes/update-user-route')) //Updating user data by ID route
app.use('/users/' , require('./routes/adminRoutes/delete-user-route')) //Deleting user data by ID route

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));