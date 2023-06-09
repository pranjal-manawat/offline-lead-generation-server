const express = require("express");
const cors = require('cors');
const app = express();
const allowedOrigins = ['*']

app.use(cors({
  origin: (origin, callback) => {
    // Check if the origin is allowed or if it's a preflight request
    if (!origin || allowedOrigins.includes(origin) || origin.startsWith('http://localhost:')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json())

app.options('*', cors());

app.post("/userData", (req, res) => {
  console.log("req.body ", req.body);
  res.send({});
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
