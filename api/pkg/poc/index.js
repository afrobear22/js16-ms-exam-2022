const mongoose = require('mongoose');

const Portable = mongoose.model(
    'portable-pc',
    {
        brand: String,
        model: String,
        cpu_cores: Number, //1-16
        ram: Number,
        disk: String, //hdd,ssd
        price: Number,
        stores: Array,
        num_ports: Object, // usb,hdmi,audio,sdcard
        created: Date
    },
    'portable-pc'
);

const getAllPcs = async () => {
    return await Portable.find({});
};

const addPc = async (pc) => {
    let p = new Portable(pc)
    return await p.save();
};

const getOnePc = async (id) => {
    return await Portable.findOne({ _id: id });
};

const updatePc = async (id, pc) => {
    return await Portable.updateOne({ _id: id }, pc);
};

const removePc = async (id) => {
    return await Portable.deleteOne({ _id: id });
};


module.exports = {
    getAllPcs,
    addPc,
    getOnePc,
    updatePc,
    removePc
};