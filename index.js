import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const apiKey = "673057e62a92633afd228a705a16c271";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/forecast", async (req, res) => {
    const place = req.body.place;
    const limit = 1;
    try {
        const geo = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=${limit}&appid=${apiKey}`);
        
        const lat = geo.data[0].lat;
        const lon = geo.data[0].lon;

        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);

        const sunriseUnix = weather.data.sys.sunrise;
        const sunsetUnix = weather.data.sys.sunset;

        const timezoneOffset = weather.data.timezone;

        const sunriseLocalUnix = sunriseUnix + timezoneOffset;
        const sunsetLocalUnix = sunsetUnix + timezoneOffset;

        const sunriseDateTime = new Date(sunriseLocalUnix * 1000);
        const sunsetDateTime = new Date(sunsetLocalUnix * 1000);

        const sunriseHours = sunriseDateTime.getUTCHours();
        const sunriseMinutes = sunriseDateTime.getUTCMinutes();
        const sunsetHours = sunsetDateTime.getUTCHours();
        const sunsetMinutes = sunsetDateTime.getUTCMinutes();

        const formattedSunrise = `${String(sunriseHours).padStart(2, '0')}:${String(sunriseMinutes).padStart(2, '0')}`;
        const formattedSunset = `${String(sunsetHours).padStart(2, '0')}:${String(sunsetMinutes).padStart(2, '0')}`;


        const weatherDescription = weather.data.weather[0].description;
        const capitalizedDescription = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

        
        const visibilityKm = weather.data.visibility / 1000;


        const currentUTC0TimeMs = Date.now();
        const locationUTC0OffsetMs = weather.data.timezone * 1000;
        const locationTimezoneMs = currentUTC0TimeMs + locationUTC0OffsetMs;
        
        const locationTime = new Date(locationTimezoneMs);
        
        const locationHours = locationTime.getUTCHours();
        const locationMinutes = locationTime.getUTCMinutes();

        const formattedLocationTime = `${String(locationHours).padStart(2, '0')}:${String(locationMinutes).padStart(2, '0')}`;


        const forecastData = {
            name: place,
            temp: weather.data.main.temp,
            humidity: weather.data.main.humidity,
            sunrise: formattedSunrise,
            status: weather.data.weather[0].main,
            wind: weather.data.wind.speed,
            sunset: formattedSunset,
            
            description: capitalizedDescription,
            pressure: weather.data.main.pressure,
            visibility: visibilityKm,
            cloudiness: weather.data.clouds.all,
            time: formattedLocationTime
        }

        res.render("index.ejs", { forecastData });

    } catch (error) {
        res.status(500).send("An error occurred. Please try again");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
