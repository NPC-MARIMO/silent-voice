# 🖐️ SilentVoice – AI-Powered Sign ↔ English Translation & Learning Platform

SilentVoice is an accessibility-focused AI system that enables real-time **Sign Language → English** translation, **English → Sign** generation, and a complete **interactive learning platform** for learning sign language.
The project is designed for Deaf & Mute individuals, inclusive educators, hospitals, emergency services, and families who want a simple, affordable way to communicate more effectively.

SilentVoice blends computer vision, gesture recognition, and a modern UI to create a powerful communication bridge.

## 🎬 Quick Links

🔗 Live Demo (Prototype) : https://silentvoice-nu.vercel.app/ 
📹 Video Presentation : https://youtu.be/WF0T4I5TQ8k?si=2otuxgmud0KB81m7

## 📋 Table of Contents

- [Project Overview](#-project-overview)  
- [Project Structure](#-project-structure)  
- [Tech Stack](#-tech-stack)  
- [Features](#-features)  
- [Installation & Setup](#-installation--setup)  
- [Backend Services](#-backend-services)  
- [Frontend Application](#-frontend-application)  
- [AI Models](#-ai-models)  
- [API Endpoints](#-api-endpoints)  
- [Usage Guide](#-usage-guide)  
- [Deployment](#-deployment)  
- [Contributing](#-contributing)  
- [License](#-license)

## 🎯 Project Overview

SilentVoice aims to eliminate communication barriers by providing:

- Real-time Sign → English translation  
- English → Sign video/animation generation  
- Structured learning modules  
- Accessible UI for Deaf & Mute users  
- Offline support for essential vocabulary  
- Scalable design for schools, hospitals, and public institutions

The mission is simple:  
**Use technology to give every person a voice.**

## 📁 Project Structure

```
SilentVoice/
├── AI_Model/
│   ├── Handpose/                  
│   ├── Sign_Classifier/           
│   ├── Dataset/                   
│   └── Notebooks/                 
│
├── Backend/
│   ├── SignToText/                
│   │   ├── main.py
│   │   ├── requirements.txt
│   │   └── models/                
│   │
│   ├── TextToSign/                
│   │   ├── main.py
│   │   ├── requirements.txt
│   │   └── sign_assets/           
│   │
│   └── Learning/                  
│       ├── main.py
│       └── database/
│
└── Frontend/
    └── silentvoice-app/
        ├── components/
        ├── pages/
        ├── utils/
        ├── public/
        ├── package.json
        └── tailwind.config.js
```

## 🛠️ Tech Stack

### Frontend
- Next.js / React  
- Tailwind CSS  
- Axios  

### Backend
- FastAPI (Python)  
- Node.js (optional)  
- Firebase / PostgreSQL  

### AI / ML
- MediaPipe Hands + Pose  
- TensorFlow Lite / ONNX  
- LSTM / Transformer models  
- OpenCV  
- Python (NumPy, Pandas, scikit-learn)

## ✨ Features

### Real-Time Sign → English
- Camera-based gesture tracking  
- MediaPipe keypoint extraction  
- AI model converts signs to English text/speech  

### English → Sign Conversion
- Converts words/sentences into sign animations  
- Supports video output  

### Interactive Learning
- Lessons, quizzes, camera-based practice  
- Streaks, badges, progress tracking  

### Accessibility UI
- High contrast, large buttons  
- Mobile-first responsive design  

## 🚀 Installation & Setup

### Backend Setup

```
cd Backend/SignToText
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Frontend Setup

```
cd Frontend/silentvoice-app
npm install
npm run dev
```

Visit: http://localhost:3000

## 🔧 Backend Services

### Sign to Text API
POST /predict_sign

### Text to Sign API
POST /text_to_sign

### Learning API
GET /lessons  
POST /progress

## 🧠 AI Models
- MediaPipe for hand/pose keypoints  
- Transformer/LSTM classifier  
- TFLite export for mobile  

## 🔌 API Endpoints

### Sign → Text
```
POST /predict_sign
```

### Text → Sign
```
POST /text_to_sign
```

### Learning
```
GET /lessons
POST /progress
```

## 💻 Usage Guide

- Open Sign → Text and start camera  
- Perform gesture to get translation  
- Or type text to see sign animation  
- Learn using lessons & progress tracker  

## 🚀 Deployment
- Frontend: Vercel / Netlify  
- Backend: Render / Railway / AWS  

## 🤝 Contributing
Fork → Create Branch → Commit → PR  

## 📄 License
Part of Street Crew 2.0 Hackathon Initiative.

_Last Updated: November 2025_
