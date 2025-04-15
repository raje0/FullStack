const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));  // Serve files from your project directory

const courses = [
    { id: "101", name: "JavaScript Basics" },
    { id: "102", name: "Node.js Essentials" }
];

app.get("/courses", (req, res) => {
    res.json(courses);
});

app.post("/enroll", (req, res) => {
    const { courseId } = req.body;
    console.log(`User enrolled in course: ${courseId}`);
    res.send("Enrollment successful");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
