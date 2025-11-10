async function load(){
  const res = await fetch('apps.json');
  const apps = await res.json();
  const grid = document.getElementById('grid');
  const q = document.getElementById('q');

  function render(list){
    grid.innerHTML = list.map(a => `
      <div class="card">
        <img src="${a.icon}" alt="${a.title}" />
        <h3>${a.title}</h3>
        <p>${a.short}</p>
        <a href="${a.link}" target="_blank" class="btn">Download / Visit</a>
      </div>
    `).join('');
  }

  render(apps);
  q.addEventListener('input', ()=> {
    const v = q.value.toLowerCase();
    render(apps.filter(a=> (a.title+a.short+a.desc+a.category).toLowerCase().includes(v)));
  });
}
load();
