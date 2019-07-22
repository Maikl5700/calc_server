const express = require('express')
const cors = require('cors')
const WebSocket = require('ws')
const http = require('http')
const calculateResult = require('./calculateResult')
const path = require('path')

const app = express()
app.use(cors()) // CORS
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// ALL USERS COMPUTES
const computes = []

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {

    console.log('user connected')

    ws.on('message', (message) => {
        const reqData = JSON.parse(message)

        switch (reqData.type) {
            case 'form_data': {
                // UPDATE COMPUTES
                const result = calculateResult(reqData.data, computes)

                setTimeout(() => {
                    wss.clients.forEach((client) => {
                        if (client.readyState == 1) {
                            client.send(JSON.stringify({
                                type: 'result',
                                data: { result: ws == client ? result : undefined, computes }
                            }));
                        }
                    });
                }, 1000);
            } break;

            default:
                break;
        }

        console.log(reqData)
    });

    if (computes.length > 0) {
        console.log(computes)
        ws.send(JSON.stringify({
            type: 'result',
            data: { result: null, computes }
        }))
    }
});


server.listen(process.env.PORT || 80, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});

