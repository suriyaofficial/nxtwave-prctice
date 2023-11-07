const express = require("express");
const path = require("path");
const { add } = require('date-fns');
const format = require('date-fns/format');
const app = express();
app.listen(33000, () => {
    console.log("Server Running... at http://localhost:3000/");
});

app.get("/", (req, res) => {
    res.send("Express JS");
});
// Define a route that sends the 'gadgets.html' file as a response
app.get("/gadgets", (req, res) => {
    const htmlFilePath = path.join(__dirname, "gadget.html");
    res.sendFile(htmlFilePath);
});
app.get("/date", (req, res) => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const yyyy = today.getFullYear();

    const formattedDate = `${dd}-${mm}-${yyyy}`;
    res.send(formattedDate);
});
app.get("/dates", (req, res) => {
    const today = new Date();
    const dateAfter100Days = add(today, { days: 100 });
    const formattedDate = format(dateAfter100Days, 'dd/MM/yyyy');
    res.send(formattedDate);
});
// Export the Express app using the default export syntax
module.exports = app;
