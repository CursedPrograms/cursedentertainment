fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const languagesList = document.getElementById('languagesList');
        for (const language in data) {
            const listItem = document.createElement('li');
            listItem.textContent = `${language}: ${data[language]}`;
            languagesList.appendChild(listItem);
        }
    })
    .catch(error => console.error('Error fetching data:', error));
