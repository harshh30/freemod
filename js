fetch('apps.json')
  .then(res => res.json())
  .then(apps => {
    const container = document.getElementById('app-container');
    const search = document.getElementById('search');

    function render(list) {
      container.innerHTML = "";
      list.forEach(app => {
        const card = document.createElement('div');
        card.className = 'app-card';
        card.innerHTML = `
          <img src="${app.icon}" alt="${app.title}">
          <h3>${app.title}</h3>
          <p>${app.short}</p>
          <small>${app.category}</small><br>
          <a href="${app.link}" target="_blank" style="color:#00e676;">Download</a>
        `;
        container.appendChild(card);
      });
    }

    render(apps);

    search.addEventListener('input', e => {
      const value = e.target.value.toLowerCase();
      const filtered = apps.filter(a => a.title.toLowerCase().includes(value));
      render(filtered);
    });
  });
