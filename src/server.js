import express from 'express';
import bodyParser from 'body-parser';

import path from 'path';

const app = express();
const PORT = 4000;


const listaLeilao = [{'id':'0', 'dia':'1', 'mes':'1', 'localiza':'lala', 'time':'000' },
                     {'id':'1', 'dia':'2', 'mes':'2', 'localiza':'seila', 'time':'111' },
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
