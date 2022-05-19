const express =  require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/dist/teste-pratico'))

app.get('/*', (req, res) => {
        res.sendFile(__dirname + 'dist/teste-pratico/index.html');
});

app.listen(PORT, () => {
        console.log("Servidor iniciado na porta: " + PORT);
});