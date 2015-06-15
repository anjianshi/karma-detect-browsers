module.exports = {
    name: 'Chrome',
    DEFAULT_CMD: {
        // Try chromium-browser before chromium to avoid conflict with the legacy
        // chromium-bsu package previously known as 'chromium' in Debian and Ubuntu.
        // 'chromium-browser', 'chromium', 'google-chrome', 'google-chrome-stable'
        linux: ['google-chrome'],
        darwin: ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'],
        win32: [
            process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe',
            process.env.ProgramW6432 + '\\Google\\Chrome\\Application\\chrome.exe',
            process.env.ProgramFiles + '\\Google\\Chrome\\Application\\chrome.exe',
            process.env['ProgramFiles(x86)'] + '\\Google\\Chrome\\Application\\chrome.exe'
        ]
    },
    ENV_CMD: 'CHROME_BIN'
};
