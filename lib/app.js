const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow(){
  mainWindow = new BrowserWindow({
    frame: false,
    width:800,
    height:600
  });

  let mainUrl;
  if(isDev()){
    mainUrl = process.env.ELECTRON_START_URL;
    mainWindow.webContents.openDevTools();
  }else{
    mainUrl = url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true
    });
  }

  mainWindow.loadURL(mainUrl);

  mainWindow.on('close', ()=>{
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('activate', ()=>{
  if(mainWindow === null){
    createWindow();
  }
})

function isDev(){
  const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
  return (isEnvSet)? (parseInt(process.env.ELECTRON_IS_DEV, 10) === 1) : !app.isPackaged;
}