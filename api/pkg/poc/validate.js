const { Validator } = require('node-input-validator');

const Portable = {
    brand: 'required|string',
    model: 'required|string',
    cpu_cores: 'required|integer', //1-16
    ram: 'required|integer',
    disk: 'required|string', //hdd,ssd
    price: 'required|integer',
    stores: 'required|array',
    num_ports: 'required|object', // usb,hdmi,audio,sdcard
    created: 'required|date'
};

const PortablePartial = {
    brand: 'string',
    model: 'string',
    cpu_cores: 'integer', //1-16
    ram: 'integer',
    disk: 'string', //hdd,ssd
    price: 'integer',
    stores: 'array',
    num_ports: 'object', // usb,hdmi,audio,sdcard
    created: 'date'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.chech();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    Portable,
    PortablePartial,
    validate
}