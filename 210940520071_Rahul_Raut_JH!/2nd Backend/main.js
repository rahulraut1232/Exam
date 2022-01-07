const express = require("express");
const res = require("express/lib/response");

const app = express();

app.use(express.json());

const { addmsg, getmsg } = require("./user.js");

const cors = require("cors");
app.use(cors());
const { add } = require("nodemon/lib/rules");

app.post("/us", async (req, res) => {

    const user = req.body;
    await addmsg(user);
    res.json({ message: "messages added successfully" });


});


app.get("/users", async (req, res) => {

    const list = await getmsg();
    res.json(list);
});

app.listen(4000, () => console.log("server started"));