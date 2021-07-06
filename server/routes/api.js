const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const mail= require('../mail/mail.js');
const inquiry = require('../models/inquiry.js');


router.get('/',async (req, res) => {
    try {
        const inquiries = await inquiry.find();                
        res.status(200).json(inquiries);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/save', async (req, res) => {
    const data = req.body;
    const newInquiry = new inquiry(data);
    try{
        await newInquiry.save();
        res.status(201).json(2);

    }catch(error){
        console.log(error);
        res.json(1);
    }
    await mail('sg60@iitbbs.ac.in','sg60@iitbbs.ac.in',"Inquiry for JPRJ",data.message);
});

router.delete('/:id', async (req,res)=>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await inquiry.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
});

router.post('/send', async (req, res) => {
    const data = req.body;
    res.json(1);
    await mail(data.email,'sg60@iitbbs.ac.in','Response To Your Inquiry',data.message);
});

module.exports = router;