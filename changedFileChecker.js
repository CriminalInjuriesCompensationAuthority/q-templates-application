const fs = require('fs');
if (fs.readFileSync('temp.txt', {encoding: 'utf8'}).includes('src')) {
    console.log('Template files changed, beginning build tests');
    process.exit(1);
} else {
    console.log('Template files unchanged, skipping build tests');
}
