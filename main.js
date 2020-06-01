const { app, BrowserWindow, nativeTheme } = require('electron');

let win;

nativeTheme.on('updated', () => {
	console.log('System theme changed');

	win.loadFile(`index-${getTheme()}.html`);
});

function createWindow () {
	console.log(`Dark colours: ${nativeTheme.shouldUseDarkColors}`);

	win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});

	win.loadFile(`index-${getTheme()}.html`);
}

function getTheme() {
	return (nativeTheme.shouldUseDarkColors) ? 'dark' : 'light';
}

app.whenReady().then(createWindow);
