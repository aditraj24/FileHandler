# File Management System

A modern, beautiful web application for creating, viewing, editing, and managing text files with stunning animations and intuitive interface.

## ✨ Features

- 📝 Create, view, edit, and delete files
- 🎨 Modern glassmorphism design with gradients
- ⚡ Smooth animations and hover effects
- 📱 Fully responsive design
- 🎯 Real-time character counting
- 📋 Copy to clipboard functionality

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start the application
npm start

# Visit http://localhost:3000
```

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, Tailwind CSS
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Poppins)

## 📁 Project Structure

```
file-management-system/
├── index.js                 # Main server file
├── package.json            # Dependencies
├── views/                  # EJS templates
│   ├── index.ejs          # Dashboard
│   ├── file.ejs           # File viewer
│   └── edit.ejs           # File editor
└── public/                # Static assets
    ├── images/
    ├── javascripts/
    └── stylesheets/
```

## 🎯 Routes

- `GET /` - Dashboard with file list
- `POST /create` - Create new file
- `GET /file/:filename` - View file
- `GET /edit/:filename` - Edit file
- `POST /update` - Update file
- `POST /delete/:filename` - Delete file

## 💫 Features

- Floating background animations
- Gradient text effects
- Real-time file operations
- Responsive grid layout
- Beautiful file cards with hover effects

---

**Made with ❤️ - Simplifying file management with beautiful design**
