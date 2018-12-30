const net = require('net');
const port = process.env.PORT? (process.env.PORT - 100) : 3000;

process.env.ELECTRON_START_URL = 'http://localhost:'+port;

const client = new net.Socket;

let isStartedElectron = false;

function connecting(){
  client.connect({port}, ()=>{
    client.end();
    if(!isStartedElectron){
      isStartedElectron = true;
      require('child_process').exec('yarn run electron');
    }
  });
}

connecting();

client.on('error', (err)=>{
  setTimeout(connecting, 1000);
})