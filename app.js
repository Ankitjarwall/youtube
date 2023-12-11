const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index', { videois: 'getfromuser' });
});

app.post('/youtube-player', (req, res) => {
    const userInput = req.body.userInput;
    const youtubeUrl = "https://www.youtube.com/embed/"+userInput;
    res.render('result', { userInput, youtubeUrl});
});

app.listen(port, function () {
    console.log(`Server is running at http://localhost:${port}`);
});
