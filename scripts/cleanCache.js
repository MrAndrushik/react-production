const path = require('path');
const { rm } = require('fs');

const cacheDir = path.resolve(__dirname, '..', 'node_modules', '.cache');
rm(cacheDir, { recursive: true });
