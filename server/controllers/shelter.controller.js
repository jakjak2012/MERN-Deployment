const { Shelter } = require('../models/shelter.model');
module.exports.createShelter = (request, response) => {
    const { name, type, description, skill1, skill2, skill3 } = request.body;
    Shelter.create({
        name,
        type,
        description,
        skill1,
        skill2,
        skill3
    }) 
        .then(shelter => response.json(shelter))
        .catch(err => response.status(400).json(err))
}
module.exports.getAllShelters = (request, response) => {
    Shelter.find({})
        .then(shelters => response.json(shelters))
        .catch(err => response.json(err))
}
module.exports.getShelter = (request, response) => {
    Shelter.findOne({_id:request.params.id})
        .then(shelter => response.json(shelter))
        .catch(err => response.json(err))
}
module.exports.updateShelter = (request, response) => {
    Shelter.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedShelter => response.json(updatedShelter))
        .catch(err => response.status(400).json(err))
}
module.exports.deleteShelter = (request, response) => {
    Shelter.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
