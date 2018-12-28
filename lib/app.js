require('./init.js');
const {app, BrowserWindow} = require('electron');

let mainWindow;

function createWindow(){
  const filePath = global.OUT_DIR + '/index.html';
  mainWindow = new BrowserWindow();
  mainWindow.loadFile(filePath);
}

exports.start = function(){
  app.on('ready', ()=>createWindow());
  app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){ app.quit(); }
  });

  app.on('activate', ()=>{
    if(mainWindow === null){ createWindow(); }
  });
}