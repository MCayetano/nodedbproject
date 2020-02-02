let id = 2;

let inventory = [
    {
        id: 0,
        price: '$119,995',
        make: 'Bentley',
        model: 'Continental',
        year: 2015,
        description: 'Test',

    },

    {
        id: 1,
        price: '$499,000',
        make: 'Lamborghini',
        model: 'Aventador SRoadster',
        year: 2019,
        description: 'Test',
    }

]

module.exports = {
    getCars: (req, response) => {
        response.status(200).send(inventory)
    },

    soldCars: (req, res) => {
        const {id} = req.params;
        console.log('paramies', req.params);
        let newInventory = inventory.filter(car => {
            console.log('car.id', car.id);
            console.log('id', id);
            if(car.id !== +id) {
                return car;
            }
        })
        
        res.status(200).send(newInventory);
    },

    createVehicle: (req, res) => {
        const {make, model, year, description, price} = req.body
        let newCar = {
            id: id++,
            price,
            make,
            model,
            year,
            description
        }
        inventory.push(newCar)
        res.status(200).send(inventory)
    },

    updatePrice: (req, res) => {
        let { id } = req.params;

        let index = inventory.findIndex(elem => {
            return +elem.id === +id
        })

        let curCar = inventory[index];

        let newCar = {
            id: curCar.id,
            price: req.body.price,
            make: curCar.make,
            model: curCar.model,
            year: curCar.year,
            description: curCar.description
        }
        inventory.splice(index, 1, newCar)
        res.status(200).send(inventory)
    }




}