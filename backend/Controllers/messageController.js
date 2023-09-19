const messageModel = require('../Models/messageModel');
const chatModel = require('../Models/chatModel');

const createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body;

    const message = new messageModel({ chatId, senderId, text });

    try {
        const response = await message.save();
        let ress = await chatModel.findByIdAndUpdate(chatId, { updatedAt: new Date() }, { new: true })
            .then((updatedDocument) => {
                if (updatedDocument) {
                    console.log('Updated Document:', updatedDocument);
                } else {
                    console.log('Document not found.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getMessages = async (req, res) => {
    const { chatId } = req.params;
    try {
        const messages = await messageModel.find({ chatId });
        res.status(200).json(messages);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = { createMessage, getMessages };