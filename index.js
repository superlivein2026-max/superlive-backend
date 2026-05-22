const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('SuperLive Backend Running 🚀');
});

// ========== EDUCATION MODULE START ==========

// Dummy data - baad me database se connect karenge
let courses = [
  { id: 1, title: "Class 10 Maths", videos: 20, notes: 15 },
  { id: 2, title: "Class 12 Physics", videos: 35, notes: 22 }
];

// 1. Saare courses dikhao
app.get('/api/education/courses', (req, res) => {
  res.json({ success: true, courses: courses });
});

// 2. Naya course add karo
app.post('/api/education/courses', (req, res) => {
  const { title, videos, notes } = req.body;
  const newCourse = { 
    id: courses.length + 1, 
    title: title, 
    videos: videos, 
    notes: notes 
  };
  courses.push(newCourse);
  res.json({ success: true, message: "Course added", course: newCourse });
});

// 3. Course delete karo
app.delete('/api/education/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  courses = courses.filter(course => course.id !== id);
  res.json({ success: true, message: "Course deleted" });
});

// ========== EDUCATION MODULE END ==========

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});