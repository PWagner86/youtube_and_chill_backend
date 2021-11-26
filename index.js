const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.post('/post', (req, res) => {
    console.log('Connected to React');
    // res.redirect('/');
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});