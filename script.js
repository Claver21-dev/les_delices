/* ═══════════════════════════════════════
     DONNÉES
  ═══════════════════════════════════════ */
  /*
  ╔═══════════════════════════════════════════════════════════════════╗
  ║  🖼️  AJOUTER VOS IMAGES — remplissez le champ  img: ""          ║
  ║                                                                   ║
  ║  • Fichier local  : img: "images/ma-crepe.jpg"                   ║
  ║  • URL en ligne   : img: "https://example.com/photo.jpg"         ║
  ║  • Laisser vide   : img: ""   → affiche l'emoji par défaut       ║
  ╚═══════════════════════════════════════════════════════════════════╝
  */

  /* ── 🌟 HERO – 4 visuels flottants ─────────────────────────────── */
  const heroItems = [
    { id:"h0", emoji:"🥞", label:"Crêpe",    img: "img/Crêpe.jpg" }, // ← votre image ici
    { id:"h1", emoji:"🍦", label:"Glace",    img: "img/glace.jpg" },
    { id:"h2", emoji:"🍓", label:"Fraise",   img: "img/fraise.jpg" },
    { id:"h3", emoji:"🍫", label:"Chocolat", img: "img/chocolat.jpg" },
  ];

  /* ── 🖼️ GALERIE AMBIANCE – 5 cases ─────────────────────────────── */
  const ambianceItems = [
    { id:"a0", emoji:"🥞", label:"Ambiance 1 (grande)", img: "galeries/crepe.jpg" },
    { id:"a1", emoji:"🍓", label:"Ambiance 2",          img: "galeries/fraise.jpg" },
    { id:"a2", emoji:"🍦", label:"Ambiance 3",          img: "galeries/glace.jpg" },
    { id:"a3", emoji:"🍫", label:"Ambiance 4",          img: "galeries/choco.jpg" },
    { id:"a4", emoji:"🎉", label:"Ambiance 5",          img: "galeries/ambiance.jpg" },
  ];

  /* ── 🥞 MENU CRÊPES ─────────────────────────────────────────────── */
  const crepes = [
    { id:"c0", nom:"Classique Beurre Sucre", emoji:"🥞", img: "C/111.jpg", desc:"La valeur sûre : pâte fine, beurre fondu, sucre en poudre.", prix:"500 FCFA",  cat:"classic",   couleur:"jaune",  badge:null },
    { id:"c1", nom:"Nutella Noisette",       emoji:"🍫", img: "C/222.jpg", desc:"Généreusement nappée de Nutella et noisettes grillées.",   prix:"800 FCFA",  cat:"gourmande", couleur:"orange", badge:"Best-seller" },
    { id:"c2", nom:"Fraise Chantilly",       emoji:"🍓", img: "C/333.jpg", desc:"Fraises fraîches, chantilly maison et coulis de fraise.", prix:"900 FCFA",  cat:"fruitee",   couleur:"rose",   badge:null },
    { id:"c3", nom:"Caramel Beurre Salé",    emoji:"🧈", img: "C/444.jpg", desc:"Sauce caramel maison au beurre salé, fondante.",          prix:"850 FCFA",  cat:"gourmande", couleur:"jaune",  badge:null },
    { id:"c4", nom:"Banane Chocolat",        emoji:"🍌", img: "C/555.jpg", desc:"Banane, chocolat noir fondu et éclats de pralin.",        prix:"950 FCFA",  cat:"fruitee",   couleur:"orange", badge:null },
    { id:"c5", nom:"Citron Sucre",           emoji:"🍋", img: "C/66.jpg", desc:"Jus de citron frais, sucre fin. La vraie recette.",       prix:"600 FCFA",  cat:"classic",   couleur:"vert",   badge:null },
    { id:"c6", nom:"Triple Choc",            emoji:"🍫", img: "C/777.jpg", desc:"Chocolat noir, blanc et au lait. Pour les accros.",       prix:"1100 FCFA", cat:"gourmande", couleur:"rose",   badge:"⭐ Spéciale" },
    { id:"c7", nom:"Mangue Passion",         emoji:"🥭", img: "C/888.jpg", desc:"Mangue fraîche, coulis passion. Voyage tropical.",        prix:"1000 FCFA", cat:"fruitee",   couleur:"orange", badge:"Saison" },
  ];

  /* ── 🍦 MENU GLACES ─────────────────────────────────────────────── */
  const glaces = [
    { id:"g0", nom:"Cornet Vanille",      emoji:"🍦", img: "G/111.jpg", desc:"Glace vanille crémeuse dans un cornet croustillant.",   prix:"400 FCFA",  cat:"cornet",  couleur:"jaune",  badge:null },
    { id:"g1", nom:"Coupe Tutti-Frutti", emoji:"🍧", img: "G/222.jpg", desc:"2 boules, fruits frais, chantilly et nappage.",          prix:"1200 FCFA", cat:"coupe",   couleur:"rose",   badge:"Best-seller" },
    { id:"g2", nom:"Glace Mangue",       emoji:"🥭", img: "G/333.jpg", desc:"Sorbet mangue artisanal, 100% mangue locale.",           prix:"500 FCFA",  cat:"cornet",  couleur:"orange", badge:null },
    { id:"g3", nom:"Coupe Chocolat",     emoji:"🍫", img: "G/444.jpg", desc:"Chocolat intense, sauce chaude, noisettes, chantilly.", prix:"1400 FCFA", cat:"coupe",   couleur:"violet", badge:"⭐ Spéciale" },
    { id:"g4", nom:"Banana Split",       emoji:"🍌", img: "G/555.jpg", desc:"Banane, 3 boules, chantilly, cerises et chocolat.",      prix:"1600 FCFA", cat:"special", couleur:"jaune",  badge:"Signature" },
    { id:"g5", nom:"Sorbet Fraise",      emoji:"🍓", img: "G/66.jpg", desc:"Sorbet fraise maison, léger et naturel.",                prix:"500 FCFA",  cat:"cornet",  couleur:"rose",   badge:null },
    { id:"g6", nom:"Coupe Arc-en-Ciel", emoji:"🌈", img: "G/777.jpg", desc:"5 parfums colorés, chantilly et vermicelles.",           prix:"1800 FCFA", cat:"special", couleur:"violet", badge:"⭐ Star" },
    { id:"g7", nom:"Affogato Maison",   emoji:"☕", img: "G/888.jpg", desc:"Boule de vanille dans un expresso chaud.",                prix:"1000 FCFA", cat:"special", couleur:"orange", badge:null },
  ];

  /* Stockage dynamique (panneau 🖼️ en bas à droite) */
  const images = {};

  /* ═══════════════════════════════════════
     RENDU DES CARTES
  ═══════════════════════════════════════ */
  function cardMedia(item) {
    /* Priorité : 1) panneau dynamique  2) img codé dans les données  3) emoji */
    const src = images[item.id] || item.img || "";
    if (src) {
      return `<div class="card-img-wrap">
        <img src="${src}" alt="${item.nom}" class="loaded"
             onerror="this.style.display='none';this.nextElementSibling.style.display='block'" />
        <span class="emoji-fallback" style="display:none">${item.emoji}</span>
      </div>`;
    }
    return `<div class="card-img-wrap" style="background:transparent;border:none;height:auto;margin-bottom:0;">
      <span class="card-emoji" style="position:static;font-size:2.8rem;">${item.emoji}</span>
    </div>`;
  }

  function renderCards(data, containerId) {
    const el = document.getElementById(containerId);
    el.innerHTML = data.map(item => `
      <div class="menu-card ${item.couleur}">
        ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
        ${cardMedia(item)}
        <div class="card-nom">${item.nom}</div>
        <p class="card-desc">${item.desc}</p>
        <span class="card-prix">${item.prix}</span>
      </div>
    `).join('');
    attachScrollReveal();
  }

  /* ═══════════════════════════════════════
     RENDU HERO (emojis/images flottants)
  ═══════════════════════════════════════ */
  function renderHero() {
    const wrap = document.querySelector('.hero-emojis');
    wrap.innerHTML = heroItems.map((h, i) => {
      const src = images[h.id] || h.img || "";
      if (src) {
        return `<span style="animation-delay:${i*0.5}s">
          <img class="img-float" src="${src}" alt="${h.label}"
               onerror="this.outerHTML='${h.emoji}'" />
        </span>`;
      }
      return `<span style="animation-delay:${i*0.5}s">${h.emoji}</span>`;
    }).join('');
  }

  function renderAmbiance() {
    const cells = document.querySelectorAll('.ambiance-cell');
    ambianceItems.forEach((a, i) => {
      if (!cells[i]) return;
      const src = images[a.id] || a.img || "";
      if (src) {
        cells[i].innerHTML = `<img src="${src}" alt="${a.label}"
          onerror="this.outerHTML='${a.emoji}'" />`;
      } else {
        cells[i].innerHTML = a.emoji;
      }
    });
  }

  /* ═══════════════════════════════════════
     FILTRES
  ═══════════════════════════════════════ */
  function filterCrepes(cat) {
    const filtered = cat === 'toutes' ? crepes : crepes.filter(c => c.cat === cat);
    renderCards(filtered, 'crepes-grid');
    document.querySelectorAll('#menu-crepes .tab-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
  }

  function filterGlaces(cat) {
    const filtered = cat === 'toutes' ? glaces : glaces.filter(g => g.cat === cat);
    renderCards(filtered, 'glaces-grid');
    document.querySelectorAll('#menu-glaces .tab-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
  }

  /* ═══════════════════════════════════════
     PANNEAU ADMIN
  ═══════════════════════════════════════ */
  function toggleAdmin() {
    document.getElementById('admin-panel').classList.toggle('open');
  }

  let pendingImageSrc = null; // image glissée en attente

  function buildAdminList(items, containerId) {
    const el = document.getElementById(containerId);
    el.innerHTML = items.map(item => `
      <div class="admin-item" onclick="applyPendingOrPickFile('${item.id}', this)">
        <div class="admin-thumb" id="thumb-${item.id}">
          ${images[item.id] ? `<img src="${images[item.id]}" />` : item.emoji}
        </div>
        <span class="admin-nom">${item.label || item.nom}</span>
        <button class="upload-btn" onclick="event.stopPropagation();pickFile('${item.id}')">📁</button>
        ${images[item.id] ? `<button class="remove-btn" onclick="event.stopPropagation();removeImage('${item.id}')">✕</button>` : ''}
      </div>
    `).join('');
  }

  function refreshAdmin() {
    buildAdminList(heroItems,    'admin-hero-list');
    buildAdminList(ambianceItems,'admin-ambiance-list');
    buildAdminList(crepes,       'admin-crepes-list');
    buildAdminList(glaces,       'admin-glaces-list');
  }

  /* Choisir fichier via input caché */
  function pickFile(id) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      readAndApply(file, id);
    };
    input.click();
  }

  function readAndApply(file, id) {
    const reader = new FileReader();
    reader.onload = ev => {
      images[id] = ev.target.result;
      refreshAll();
    };
    reader.readAsDataURL(file);
  }

  function removeImage(id) {
    delete images[id];
    refreshAll();
  }

  function refreshAll() {
    renderHero();
    renderAmbiance();
    renderCards(crepes, 'crepes-grid');
    renderCards(glaces, 'glaces-grid');
    refreshAdmin();
    cancelDrop();
  }

  /* ── DROP ZONE ── */
  function applyPendingOrPickFile(id, el) {
    if (pendingImageSrc) {
      images[id] = pendingImageSrc;
      refreshAll();
    } else {
      pickFile(id);
    }
  }

  function cancelDrop() {
    pendingImageSrc = null;
    document.getElementById('drop-preview').style.display = 'none';
    document.getElementById('drop-zone').style.display = 'block';
    document.getElementById('drop-img-preview').src = '';
  }

  const dropZone = document.getElementById('drop-zone');

  dropZone.addEventListener('dragover', e => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
  });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = ev => {
      pendingImageSrc = ev.target.result;
      document.getElementById('drop-img-preview').src = pendingImageSrc;
      document.getElementById('drop-preview').style.display = 'block';
      document.getElementById('drop-zone').style.display = 'none';
    };
    reader.readAsDataURL(file);
  });

  /* Clic sur drop zone pour sélection fichier rapide */
  dropZone.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        pendingImageSrc = ev.target.result;
        document.getElementById('drop-img-preview').src = pendingImageSrc;
        document.getElementById('drop-preview').style.display = 'block';
        document.getElementById('drop-zone').style.display = 'none';
      };
      reader.readAsDataURL(file);
    };
    input.click();
  });

  /* ═══════════════════════════════════════
     SCROLL REVEAL
  ═══════════════════════════════════════ */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  function attachScrollReveal() {
    document.querySelectorAll('.menu-card, .avis-card, .stat-box, .ambiance-cell').forEach(el => {
      if (el.dataset.observed) return;
      el.dataset.observed = '1';
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      observer.observe(el);
    });
  }

  /* ═══════════════════════════════════════
     INITIALISATION
  ═══════════════════════════════════════ */
  renderHero();
  renderAmbiance();
  renderCards(crepes, 'crepes-grid');
  renderCards(glaces, 'glaces-grid');
  refreshAdmin();
  attachScrollReveal();
/* ═══════════════════════════════════════
   MENU HAMBURGER MOBILE
═══════════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  /* Fermer le menu au clic sur un lien */
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}