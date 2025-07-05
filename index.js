const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;


//Static Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/register' , require('./routes/api/registerRoute'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));