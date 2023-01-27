const ShelterController = require('../controllers/shelter.controller');
module.exports = function(app){
    app.post('/api/shelter', ShelterController.createShelter);
    app.get('/api/shelter', ShelterController.getAllShelters);
    app.get('/api/shelter/:id', ShelterController.getShelter);
    app.put('/api/shelter/:id', ShelterController.updateShelter);
    app.delete('/api/shelter/:id', ShelterController.deleteShelter);
} 