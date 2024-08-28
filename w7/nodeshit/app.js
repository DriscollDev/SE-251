const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/junk.html`);
});

app.get("/data", (req, res) => {
});


app.post("/data", (req, res) => {
    console.log(req.body);
    var data = JSON.stringify(req.body);
    fs.writeFile(`${__dirname}/peeps.json`, data, err=>err)
});

app.get("/:animals/:animal", (req, res) => {
    res.send(req.params.animal);

});

app.listen(3000, (e) => {
    console.log('Server is running on localhost:3000');
});