# Airbnb Clone 🏠

A full-stack Airbnb clone built using Node.js, Express, MongoDB, and EJS.

## 🚀 Features
- User authentication (login & signup)
- Create, edit, delete listings
- Add & delete reviews
- Authorization (only owners can delete)
- Image upload using Cloudinary
- Flash messages
- Responsive UI with Bootstrap

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- EJS
- Passport.js
- Cloudinary
- Bootstrap

## 📂 Project Structure




AIRBNB/
├── controllers
├── init
├── models
├── public
├── routes
├── utils
├── views
├── app.js
├── cloudConfig.js
├── middleware.js
└── package.json



## ⚙️ Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/rutujathaokar/airbnb-clone.git

#Install dependencies
npm install

#Create a .env file
MONGO_URL=your_mongo_url
SESSION_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret