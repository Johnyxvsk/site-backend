import express from 'express';
import bodyParser from 'body-parser';

import path from 'path';

const app = express();
const PORT = 4000;


const listaLeilao = [{'id':'0', 'dia':'11', 'mes':'11', 'localiza':'lala', 'time':'16hrs' },
                     {'id':'1', 'dia':'12', 'mes':'02', 'localiza':'seila', 'time':'17hrs' },
                        ];

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Helloo'));

app.get('/api/agenda/', (req, res) => {
    res.status(200).send({listaLeilao})
})

app.post('/api/agenda/addLeilao', (req, res) => {
    listaLeilao.push(req.body);
    res.status(200).send(listaLeilao);
    console.log(listaLeilao)
})

app.post('/api/agenda/delLeilao', (req, res) => {
    listaLeilao.shift();
    res.status(200).send(listaLeilao);
    console.log(listaLeilao)
})

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
