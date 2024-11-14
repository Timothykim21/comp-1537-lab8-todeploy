const express = require("express");
const app = express();

const cors = require("cors")

app.use(cors())

app.get("/home", (req, res) => {
    res.send('Hey!')
})

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const axios = require("axios");
app.get("/weather", async (req, res) => {
    const city = req.query.name;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=445047cc72d8bdf96624498c6483a256&units=metric`)
    res.json(response.data);
});




