const footerElement = document.getElementById('dynamicFooter');
const currentYear = new Date().getFullYear();
footerElement.innerHTML = `呪われた エンターテイメント <br> © Cursed Entertainment ${currentYear}`;
