const poc = require('../pkg/poc');
const validator = require('../pkg/poc/validate');

const getAll = async (req, res) => {
    try {
        return res.status(200).send('OK')
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error');
    }
}
const create = async (req, res) => {
    try {
        return res.status(201).send('OK')
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error');
    }
}
const getOne = async (req, res) => {
    try {
        return res.status(200).send('OK')
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error');
    }
}
const update = async (req, res) => {
    try {
        return res.status(204).send('OK')
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error');
    }
}
const updatePartial = async (req, res) => {
    try {
        return res.status(204).send('OK')
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error');
    }
}
const remove = async (req, res) => {
    try {
        return res.status(204).send('OK')
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove
};