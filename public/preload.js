const { contextBridge } = require('electron');
const ytpl = require('ytpl');

contextBridge.exposeInMainWorld('ytpl', ytpl);
