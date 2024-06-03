# FaceUp - backend
Welcome to FaceUp, a mobile application designed to help you take photos and store them easily in an image gallery. This app uses Cloudinary for photo storage and is written in TypeScript on the Expo platform.

## Features
Photo Capture: Capture precious moments directly from the app.\
Image Gallery: Access all your stored photos in a sleek and easy-to-use gallery.\
Cloud Storage: Your photos are securely stored on Cloudinary, freeing up space on your device.

## Technologies Used
TypeScript: For robust and maintainable code.\
Expo: To facilitate the development and deployment of React Native applications.\
Cloudinary: For cloud image storage.

## Prerequisites
Before you begin, make sure you have the following installed:
Node.js 
Expo CLI 
A Cloudinary account

### Installation Steps
### 1. Clone repositories into  separated folders:

BACKEND:
```
https://github.com/PalomaAubeau/faceup-backend.git
```
FRONTEND:
```
https://github.com/PalomaAubeau/faceup-frontend.git
```
Open two terminals to retrieve the backend and frontend parts in parallel.
### 2. Install dependencies for both frontend and backend:

```
cd backend
npm (or yarn) install
```
```
cd ../frontend
npm (or yarn) install
```

### 3. Configure environment variables:
Create a .env file in the backend folder.
Add your required keys and configurations.
Example:
```
CLOUDINARY_URL=cloudinary://your_api_key
```
### 4. Start the application:
Backend (you can use npm or yarn):
```
cd backend
yarn start (or nodemon)
```
Frontend (you can use npm or yarn):
```
cd frontend
yarn start
```
Open the Expo Go app on your mobile device and scan the QR code displayed in the terminal or in the Expo Dev Tools in your browser.
The app will be bundled and loaded on your device for testing and development.
Tap the capture button to take a photo.
View your photos in the integrated gallery.
All photos are automatically uploaded and stored on Cloudinary.

## Preview
![faceUp](https://github.com/PalomaAubeau/faceup-backend/assets/154338327/89ae47ea-1dac-4997-90f0-b96463ab430b)








