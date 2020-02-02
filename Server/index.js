const express = require("express");

const app = express();

app.use(express.json());

const port = 4000;

const { getCars, soldCars, createVehicle, updatePrice} = require('./Controller/Controller');

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/api/inventory', getCars);
app.delete('/api/sold/:id', soldCars);
app.post('/api/createVehicle', createVehicle);
app.put('/api/updatePrice/:id', updatePrice);




