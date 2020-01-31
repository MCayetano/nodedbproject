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
    getCars: (req, res) => {
        res.status(200).send(inventory)
    },

    soldCars: (req, res) => {
        let { id } = req.params;

        let index = inventory.findIndex(elem => {
            return +elem.id === +id
        })

        inventory.splice(index, 1)
        res.status(200).send(inventory)
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