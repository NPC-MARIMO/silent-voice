# 🖐️ SilentVoice – AI-Powered Sign ↔ English Translation & Learning Platform

SilentVoice is an accessibility-focused AI system that enables real-time **Sign Language → English** translation, **English → Sign** generation, and a complete **interactive learning platform** for sign language.  
Built for Deaf & Mute communities, educators, hospitals, families, and public services — SilentVoice blends computer vision, gesture recognition, and modern UI to create a powerful communication bridge.

---

## 🎬 Quick Links

🔗 Live Demo (Prototype)  
📹 Video Explanation

---

## 📋 Table of Contents

- Project Overview
- Project Structure
- Tech Stack
- Features
- Installation & Setup
- Backend Services
- Frontend Application
- AI Models
- API Endpoints
- Usage Guide
- Deployment
- Contributing
- License

---

## 🎯 Project Overview

SilentVoice is designed to remove communication barriers by translating sign language into English text/speech and translating English into sign animations. It also provides a complete learning environment for mastering sign language.

### Core Objectives

- Real-time sign gesture recognition
- Text → Sign video/animation generation
- Structured lessons with progress tracking
- Accessible UI for Deaf & Mute individuals
- Offline vocabulary support
- Deployable across schools, hospitals, and public offices

SilentVoice aims to give every person a voice through technology.

---

## 📁 Project Structure

SilentVoice/
├── AI_Model/
│ ├── Handpose/ # MediaPipe keypoint extraction
│ ├── Sign_Classifier/ # LSTM/Transformer training code
│ ├── Dataset/ # Sign gesture datasets (ASL/ISL)
│ └── Notebooks/ # Training Jupyter notebooks
│
├── Backend/
│ ├── SignToText/ # Real-time sign → English API
│ │ ├── main.py
│ │ ├── requirements.txt
│ │ └── models/ # .tflite / ONNX models
│ │
│ ├── TextToSign/ # English → Sign conversion API
│ │ ├── main.py
│ │ ├── requirements.txt
│ │ └── sign_assets/ # Sign animations / gesture videos
│ │
│ └── Learning/ # Lessons API & user progress
│ ├── main.py
│ └── database/
│
└── Frontend/
└── silentvoice-app/
├── components/
├── pages/
├── utils/
├── public/
├── package.json
└── tailwind.config.js

---

## 🛠️ Tech Stack

### **Frontend**

- React / Next.js or React Native / Flutter
- Tailwind CSS
- Axios

### **Backend**

- FastAPI (Python)
- Node.js (Optional)
- PostgreSQL / Firebase

### **AI / ML**

- MediaPipe (Hand + Pose keypoints)
- TensorFlow Lite / ONNX
- LSTM / Transformer models
- OpenCV
- Python (Numpy, Pandas, Scikit-Learn)

### **Cloud**

- Google Cloud / AWS for model training & hosting

---

## ✨ Features

### 🖐️ **Real-Time Sign → English**

- Live camera feed gesture detection
- MediaPipe keypoint extraction
- LSTM/Transformer model classification
- Outputs English text or Text-to-Speech

### 📝 **English → Sign Conversion**

- Convert typed text into sign animations
- Supports video playback or 3D avatar
- Useful for teaching families & beginners

### 📚 **Interactive Learning Platform**

- Structured lessons from beginner to advanced
- Quiz mode and camera-based practice
- Streaks, achievements, and progress tracking

### 📦 **Offline Support**

- Core vocabulary available without internet

### ♿ **Accessibility-Driven UI**

- High-contrast mode
- Large buttons & simple navigation
- Works seamlessly on mobile and low-end devices

---

## 🚀 Installation & Setup

### **Prerequisites**

- Python 3.9+
- Node.js 18+
- npm or yarn
- Git

---

### **Backend Setup (FastAPI)**

cd Backend/SignToText
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000

cd Backend/TextToSign
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8001

cd Backend/Learning
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8002

---

### **Frontend Setup**

cd Frontend/silentvoice-app
npm install
npm run dev

Visit:  
http://localhost:3000

---

## 🔧 Backend Services

### **1. Sign to Text API**

Purpose: Converts real-time sign gestures into English.

Features:

- Accepts camera keypoints
- Sends prediction using LSTM/Transformer
- Returns English text

Endpoint:
POST /predict_sign

---

### **2. Text to Sign API**

Purpose: Converts English text → Sign animation/video

Endpoint:
POST /text_to_sign

---

### **3. Learning API**

Purpose: Lessons, quizzes, and user progress storage.

Endpoints:
GET /lessons
POST /progress

---

## 🧠 AI Models

### **Handpose Keypoint Model**

- Extracts 21 hand keypoints using MediaPipe
- Converts videos into numeric sequences

### **Sign Classification Model**

- LSTM / Transformer model
- Trained on ASL/ISL datasets
- Exports TFLite model for mobile use

### **Sign Animation Generator**

- Maps English to sign assets
- Uses local video dataset

---

## 🔌 API Endpoints

### Sign → Text

POST /predict_sign
Body: { "keypoints": [...] }
Response: { "prediction": "Hello" }

### Text → Sign

POST /text_to_sign
Body: { "text": "Thank you" }
Response: { "video_url": ".../signs/thankyou.mp4" }

### Learning

GET /lessons
POST /progress

---

## 💻 Usage Guide

### **Translate Sign → English**

1. Open "Sign to Text"
2. Start camera
3. Perform a sign
4. See translation on right panel

### **Translate English → Sign**

1. Type any text
2. Click "Play Demonstration"
3. Watch the sign animation

### **Learn Sign Language**

- Choose beginner/intermediate/advanced
- Practice with your camera
- Track progress & achievements

---

## 🚀 Deployment

### **Frontend**

- Vercel / Netlify recommended

### **Backend**

- Render / Railway / AWS / GCP
- Docker support available

---

## 🤝 Contributing

Contributions are welcome!

```bash
git checkout -b feature/your-feature
git commit -m "Add new feature"
git push origin feature/your-feature

Open a pull request.

📄 License

This project is part of the Street Crew 2.0 Hackathon Initiative.
Refer to LICENSE file for more details.

❤️ Built with Purpose

SilentVoice is made with love and responsibility — to create technology that gives everyone a voice.

Last Updated: November 2025
```
