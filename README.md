# 🌦️ Forecast — A Weather Forecast Web App

A sleek and responsive web application that fetches real-time weather data from the **OpenWeatherMap API** and presents it in a clean, animated interface.
Built with **Node.js**, **Express**, and **EJS**, this project demonstrates API integration, server-side rendering, and front-end interactivity.

---

## ✨ Features

* **🌍 Real-Time Forecasts:** Retrieve live weather data for any city worldwide.
* **📍 Smart Input:** Instantly capitalizes and processes user-entered city names.
* **📱 Responsive Design:** Fully mobile-friendly layout that adapts across devices.
* **☀️ Rich Weather Details:** Displays temperature, humidity, sunrise/sunset times, sky conditions, wind speed, visibility, and more.
* **🎞️ Smooth Animations:** Subtle text typing and scroll animations for an engaging user experience.

---

## 🧩 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Templating Engine:** EJS
- **API:** Weather data API (OpenWeatherMap)
- **Other Tools:** Axios, jQuery, Body Parser

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/MamoruHikari/forecast_website-backend-API_based
cd forecast_website-backend-API_based
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add your OpenWeatherMap API key

Replace the value of `apiKey`:

```js
const apiKey = "YOUR_API_KEY_HERE";
```

### 4️⃣ Run the server

```bash
npm start
```

The app will start on [http://localhost:3000](http://localhost:3000)

---

## 🌐 Live Demo

👉 [View Live on Render](https://forecast-website-backend-api-based.onrender.com)

> **Note:** The free Render instance may take up to **60 seconds** to wake up.

---

## 🧠 How It Works

1. **User inputs** a city name and presses Enter.
2. The app uses the **OpenWeatherMap Geocoding API** to get the city’s latitude and longitude.
3. It then queries the **Current Weather Data API** using those coordinates.
4. The backend formats sunrise/sunset times, visibility, and timezone-specific local times.
5. The data is passed to an **EJS template**, which dynamically renders the forecast results.
