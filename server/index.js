const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();


// middleware 
app.use(express.json());
app.use(cors());

// route 
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Ha bhai chal rha hu!"
    })
})
app.use("/api/v1/contact", require("./routes/contactRoute"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port no ${PORT}`);
});
