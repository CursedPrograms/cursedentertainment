const footerElement = document.getElementById('dynamicFooter');

const linkElement = document.createElement('a');
linkElement.href = 'https://cursed-entertainment.itch.io/';
linkElement.textContent = '呪われた エンターテイメント';

linkElement.style.fontStyle = 'italic';

const lineBreakElement = document.createElement('br');

const copyrightNotice = document.createTextNode('© Cursed Entertainment 2023');

copyrightNotice.parentElement.style.fontStyle = 'italic';
copyrightNotice.parentElement.style.fontSize = 'small';

footerElement.appendChild(linkElement);
footerElement.appendChild(lineBreakElement);
footerElement.appendChild(copyrightNotice);
