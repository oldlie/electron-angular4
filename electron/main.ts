/// <reference path="../node_modules/electron/electron.d.ts" />
/// <reference path="./lib/api/index.d.ts" />

const {app, BrowserWindow} = require("electron");
const path = require('path');
const url = require('url');

let win:any;

function createWindow() {
    win = new BrowserWindow({ width: 1200, height: 600 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../dist/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.webContents.openDevTools();

    win.on("closed", () => {
        win = null;
    });
};

app.on("ready", createWindow);

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});

const api = require("./lib/api") as Api;
api.sayHello();
