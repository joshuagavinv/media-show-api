require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.NODE_PORT || 8080;
const CORS = require("cors");

app.use(CORS());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        if(err.type == 'entity.parse.failed') {
            return res.status(400).send({
                error: "Could not decode request: JSON parsing failed"
            });
        }
        return res.status(400).send({
            error: err.message
        });
    }

    next();
});

app.get('/', function(req, res) {
    res.json({response: ''});
});

require("./routes/index.js")(app);

app.listen(PORT, function() {
    console.log("Node Server running on PORT:" + PORT);
});