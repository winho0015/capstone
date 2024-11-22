const express = require('express');
const router = express.Router();
const { ResultVideo } = require('../models/ResultVideo');

// 결과 비디오 저장
router.post('/saveResultVideo', (req, res) => {
    const { original_video, blur_info, result_path } = req.body;

    // ResultVideo 문서 생성
    const resultVideo = new ResultVideo({
        original_video,
        blur_info,
        result_path,
    });

    resultVideo.save((err, doc) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        res.status(200).json({ success: true, resultVideo: doc });
    });
});


// 특정 비디오의 결과 비디오 목록 불러오기
router.get('/getResultVideos/:originalVideoId', (req, res) => {
    const { originalVideoId } = req.params;

    ResultVideo.find({ original_video: originalVideoId })
        .populate('original_video') // 원본 비디오 정보 포함
        .populate('blur_info') // Blur Info 정보 포함
        .exec((err, resultVideos) => {
            if (err) {
                return res.status(400).json({ success: false, error: err });
            }
            res.status(200).json({ success: true, resultVideos });
        });
});

module.exports = router;
