// Get the footer element by its ID
const footerElement = document.getElementById('dynamicFooter');

// Create a link element
const linkElement = document.createElement('a');
linkElement.href = 'https://cursed-entertainment.itch.io/';
linkElement.textContent = '呪われた エンターテイメント';

// Apply italic style to the link text
linkElement.style.fontStyle = 'italic';

// Create a line break element
const lineBreakElement = document.createElement('br');

// Create a copyright notice
const copyrightNotice = document.createElement('span');
copyrightNotice.textContent = '© Cursed Entertainment 2023';

// Apply italic style to the copyright notice
copyrightNotice.style.fontStyle = 'italic';
// Apply small size to the copyright notice
copyrightNotice.style.fontSize = 'small';

// Append the elements to the footer
footerElement.appendChild(linkElement);
footerElement.appendChild(lineBreakElement);
footerElement.appendChild(copyrightNotice);
