const mongoose = require('mongoose');
const csv = require('fast-csv');
const user = require('./model/User');
const multer = require('multer');
const fs = require('fs');
const { globalAgent } = require('http');
const cors = require('cors');
const express = require('express');
const app = express();

global.__basedir = __dirname;


mongoose.connect('mongodb://127.0.0.1/csvUploader', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//Multer Setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __basedir + '/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.filename + "-" + Date.now() + "-" + file.originalname)
    }
})

// csv filter layer
const csvFilter = (req, file, cb) => {
    file.mimetype.includes('csv') ? cb(null, true) :
        cb('Please upload csv file', false);
}

const upload = multer({ storage: storage, fileFilter: csvFilter });

app.post('/csv_uploader', upload.single('csv'), async (req, res) => {
    try {
        if (req.file == undefined) return res.status(400).send({ message: "Please upload a csv file" });
        res.send('Hemlo')
    } catch (error) {

    }
})

app.listen(5000, () => {
    console.log('Started on port 5000')
})