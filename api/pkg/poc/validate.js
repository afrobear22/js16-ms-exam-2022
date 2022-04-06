const { Validator } = require('node-input-validator');

const Portable = {
    brand: 'required|string',
    model: 'required|string',
    cpu_cores: 'required|integer',
    ram: 'required|integer',
    disk: 'required|string',
    price: 'required|integer',
    stores: 'required|array',
    num_ports: 'required|object',
    "num_ports.usb": 'require|integer',
    "num_ports.hdmi": 'require|integer',
    "num_ports.headphone": 'require|integer',
    "num_ports.sdcard": 'require|integer',
    created: 'required|date'
};

const PortablePartial = {
    brand: 'string',
    model: 'string',
    cpu_cores: 'integer',
    ram: 'integer',
    disk: 'string',
    price: 'integer',
    stores: 'array',
    num_ports: 'object',
    created: 'date'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    Portable,
    PortablePartial,
    validate
}