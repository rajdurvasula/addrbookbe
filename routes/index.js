const contactsController = require('../controllers/contacts');

module.exports = (app) => {
    // GET all Contacts
    app.get('/api/contacts', contactsController.findAll);
    // GET a Contact
    app.get('/api/contacts/:id', contactsController.findOne);
    // POST a Contact
    app.post('/api/contacts', contactsController.create);
    // PUT a Contact
    app.put('/api/contacts/:id', contactsController.modify);
    // DELETE a Contact
    app.delete('/api/contacts/:id', contactsController.remove);
};