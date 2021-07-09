import express from 'express'

const _cors = require('cors');
const port = 8080; // default port to listen
const app = express();

app.use(_cors())

// define a route handler for the default home page
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.post("/", async (req, res) => {
    res.send("HELLO");
})
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

