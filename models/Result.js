const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Result Video Schema
const resultVideoSchema = new mongoose.Schema({
  original_video: {
    type: Schema.Types.ObjectId,
    ref: 'Video', // 원본 비디오 참조
    required: true,
  },
  blur_info: {
    type: Schema.Types.ObjectId,
    ref: 'Blur_info', // 원본 비디오 참조
    required: true,
  },
  result_path: {
    type: String, // 처리된 비디오 파일 경로
    required: true,
  },
  created_at: {
    type: Date, // 처리된 날짜 및 시간
    default: Date.now,
  },
});

// 모델 생성
const ResultVideo = mongoose.model('ResultVideo', resultVideoSchema);

module.exports = ResultVideo;
