# 🎉 Club Events Organizer

A web application for college club organizers to log in, manage, and display upcoming events. Built with React, Tailwind CSS, and Firebase, this tool helps streamline event scheduling and coordination across campus clubs.

🔗 Live Demo  
(You can add your deployed site URL here: e.g., https://yourusername.github.io/club-events-organizer)

---

## 🚀 Features

- 🔐 Organizer Login (Firebase Authentication)
- 📝 Add Upcoming Events (Title, Description, Date)
- 📅 View All Events in Real-Time
- 💻 Responsive & Clean UI (Tailwind CSS)
- 🔥 Firebase Integration (Auth + Firestore)

---

## 🛠️ Tech Stack

- React (via Create React App)
- Tailwind CSS
- React Router DOM
- Firebase Authentication
- Firebase Firestore (NoSQL)

---

## 📁 Folder Structure

club-events/
├── public/                     # Public assets
├── src/
│   ├── pages/                  # Page components
│   │   ├── Login.js            # Login form page
│   │   ├── Dashboard.js        # Event listing page
│   │   └── AddEvent.js         # Add new event form
│   ├── firebase.js             # Firebase configuration
│   ├── App.js                  # Main app component with routes
│   ├── index.js                # React DOM entry point
│   └── index.css               # Tailwind CSS import
├── .env                        # Environment variables (Firebase keys)
├── .gitignore                  # Files to ignore by git
├── tailwind.config.js          # Tailwind config
├── postcss.config.js           # PostCSS config
├── package.json                # Project metadata & dependencies
└── README.md                   # This documentation file


---

## ⚙️ Getting Started Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/club-events-organizer.git
cd club-events-organizer

2.Install dependencies:
npm install
'''
 Set up Firebase:

Go to https://console.firebase.google.com

Create a new Firebase project

In the project, do the following:

Enable Email/Password Authentication in Authentication → Sign-in method

Create a Firestore database (start in test mode)

Copy your Firebase config and create a .env file in your project root:
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_bucket
REACT_APP_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_APP_ID=your_app_id
npm start

