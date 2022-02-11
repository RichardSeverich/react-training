const express = require("express");
const path = require("path");

const app = express();

// import all to public
app.use(express.static(__dirname + '/src'));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "index.html"))
});

app.listen(process.env.PORT || 5001, () => console.log("Server Running"));
