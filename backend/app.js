const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require("./routes/tasks");
const cors = require('cors');

const app = express();
//comment line before merging
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URL || "mongodb+srv://diengnogs:passer@cluster0.yircjsf.mongodb.net/";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//another comment to justify merge to dev
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//last comment to test