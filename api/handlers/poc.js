const poc = require('../pkg/poc');
const {
    Portable,
    PortablePartial,
    validate
} = require('../pkg/poc/validate');

const getAll = async (req, res) => {
    try {
        let pc = await poc.getAllPcs();
        return res.status(200).send(pc)
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error');
    }
}
const create = async (req, res) => {
    try {
        let p = await poc.addPc(req.body);
        return res.status(201).send(p)
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error');
    }
}
const getOne = async (req, res) => {
    try {
        let pc = await poc.getOnePc(req.params.id);
        return res.status(200).send(pc)
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error');
    }
}
const update = async (req, res) => {
    try {
        await validate(req.body, Portable);
        await poc.updatePc(req.params.id, req.body);
        return res.status(204).send('')
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error');
    }
}
const updatePartial = async (req, res) => {
    try {
        await validate(req.body, PortablePartial);
        await poc.updatePc(req.params.id, req.body);
        return res.status(204).send('')
    } catch (error) {
        console.log(error)
        return res.status(500).send('Internal Server Error');
    }
}
const remove = async (req, res) => {
    try {
        await validate(req.body, PortablePartial);
        await poc.removePc(req.params.id);
        return res.status(204).send('')
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