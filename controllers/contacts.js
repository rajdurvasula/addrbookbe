const db = require('../models');
const Contact = db.contact;
const Op = db.Sequelize.Op;

// Create Contact
exports.create = (req, res) => {
    // validate input
    const fname = req.body.fname;
    const lname = req.body.lname;
    if (fname && lname) {
        Contact.create({
            fname: req.body.fname,
            lname: req.body.lname
        }).then(data => {
            res.status(201).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error creating Contact."
            });
        });
    }
};

// Retrieve all Contacts
exports.findAll = (req, res) => {
    Contact.findAll({
        where: {}
    }).then(data => {
       res.send(data); 
    }).catch(err => {
        res.status(500).send({
           message: err.message || "Error retrieving Contacts." 
        });
    });
};

// Retrieve a Contact
exports.findOne = (req, res) => {
    const id = req.params.id;
    Contact.findByPk(id)
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error finding Contact with Id: "+id
        })
    });
};

// Update a Contact
exports.modify = (req, res) => {
    const id = req.params.id;
    Contact.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: `Updated Contact with Id: ${id}`
            });
        } else {
            res.send({
                message: `Cannot update Contact with Id: ${id}`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error updating Contact with Id: "+id
        });
    });
};

// Delete a Contact
exports.remove = (req, res) => {
    const id = req.params.id;
    Contact.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: `Deleted Contact with Id: ${id}`
            });
        } else {
            res.send({
                message: `Cannot delete Contact with Id: ${id}`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error deleting Contact with Id: "+id
        });
    });
};