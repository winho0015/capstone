const express = require('express');
const router = express.Router();
const { BlurInfo } = require('../models/BlurInfo');

// 블러링 정보 저장
router.post('/saveBlurInfo', (req, res) => {
    const blurInfo = new BlurInfo(req.body);

    blurInfo.save((err, doc) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true, blurInfo: doc });
    });
});

module.exports = router;
