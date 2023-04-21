const fs = require('fs');

// via https://stackoverflow.com/a/6274381
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const themes = String(fs.readFileSync('eggjam-themes.txt'))
      .split(/\n/)
      .filter(t => t[0] !== '#');
shuffle(themes);
for(let i = 0; i < 5; i++) {
  console.log(themes[i]);
}
