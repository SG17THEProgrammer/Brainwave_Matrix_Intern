const Contact = require('../models/contactSchema');

const contact = async (req, res) => {
    try {
        const contactDet = req.body;
        await Contact.create(contactDet);
        return res.status(200).json({ message:[ "Message send successfully"] });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(200).json({ message: ["Do not send the same message"] });
        }
        return res.status(500).json({ message:[ "Error occurred while sending message"] });
    }
}

module.exports ={contact}