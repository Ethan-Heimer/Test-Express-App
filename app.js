const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set('views', './view');
app.set('view engine', 'ejs');

app.use(express.static('./public/images'))
app.use(express.static('./public/css'))

app.get('/', (req, res) => {
    res.render("home", {text: "yooo"});
});
app.get('/about', (req, res) => {
    res.render("about", {text: "yooo"});
});
app.get('/contact', (req, res) => {
    res.render("contact", {text: "yooo"});
});
app.get('/portfolio', (req, res) => {
    res.render("portfolio", {text: "yooo"});
});

app.listen(port, () => {
    console.log("How much detitited wam do i need for my micwaft server?");
});