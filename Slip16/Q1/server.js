const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

let recipes = ["Pasta", "Pizza", "Salad"];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/recipes", (req, res) => {
    res.json(recipes);
});

app.post("/add-recipe", (req, res) => {
    const { name } = req.body;
    if (name) recipes.push(name);
    res.send("Recipe added");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
