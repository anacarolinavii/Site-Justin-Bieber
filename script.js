const siteData = {
  destaques: [
    {
      id: 1,
      titulo: "Justice World Tour",
      imagem: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
      descricao: "A maior digressão mundial de Justin Bieber focada na era do álbum Justice."
    },
    {
      id: 2,
      titulo: "Álbum Justice",
      imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
      descricao: "Aclamado pela crítica, incluindo hits globais como Peaches e Ghost."
    },
    {
      id: 3,
      titulo: "Performance e Palco",
      imagem: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1000&q=80",
      descricao: "Parcerias de sucesso e apresentações marcantes no topo das tabelas de todo o mundo."
    }
  ],
  albuns: [
    {
      id: 101,
      titulo: "Justice",
      ano: "2021",
      imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
      descricao: "O sexto álbum de estúdio inclui temas de amor, cura e justiça social, apresentando parcerias com Daniel Caesar, Giveon e Khalid."
    },
    {
      id: 102,
      titulo: "Changes",
      ano: "2020",
      imagem: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=500&q=80",
      descricao: "Com uma sonoridade voltada para o R&B, este álbum marca o regresso do artista após um hiato na música."
    },
    {
      id: 103,
      titulo: "Purpose",
      ano: "2015",
      imagem: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
      descricao: "Um marco na carreira pop com êxitos retumbantes como 'What Do You Mean?', 'Sorry' e 'Love Yourself'."
    }
  ],
  musicas: [
    {
      id: 201,
      titulo: "Peaches",
      detalhe: "ft. Daniel Caesar & Giveon",
      imagem: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
      descricao: "Uma canção vibrante que atingiu o 1.º lugar da Billboard Hot 100, misturando elementos de Pop e R&B."
    },
    {
      id: 202,
      titulo: "Stay",
      detalhe: "com The Kid LAROI",
      imagem: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
      descricao: "Um dos maiores sucessos globais de streaming, permanecendo no topo dos tops por meses consecutivos."
    },
    {
      id: 203,
      titulo: "Ghost",
      detalhe: "Álbum: Justice",
      imagem: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
      descricao: "Com uma letra emocional sobre perda e memória, tornou-se uma das músicas mais tocadas do álbum."
    }
  ]
}
  musicas: [
    {
      id: 201,
      titulo: "Peaches",
      detalhe: "ft. Daniel Caesar & Giveon",
      imagem: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80",
      descricao: "Uma canção vibrante que atingiu o 1.º lugar da Billboard Hot 100, misturando elementos de Pop e R&B."
    },
    {
      id: 202,
      titulo: "Stay",
      detalhe: "com The Kid LAROI",
      imagem: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80",
      descricao: "Um dos maiores sucessos globais de streaming, permanecendo no topo dos tops por meses consecutivos."
    },
    {
      id: 203,
      titulo: "Ghost",
      detalhe: "Álbum: Justice",
      imagem: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
      descricao: "Com uma letra emocional sobre perda e memória, tornou-se uma das músicas mais tocadas do álbum."
    }
  ]


document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderSlider();
  renderAlbuns();
  renderMusicas();
  initModal();
  initNewsletter();
});

// p telefone, celular etc
function initNavigation() {
  const toggleBtn = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

let currentSlide = 0;

function renderSlider() {
  const container = document.getElementById("sliderContainer");
  const dotsContainer = document.getElementById("sliderDots");

  siteData.destaques.forEach((item, idx) => {
    const slide = document.createElement("div");
    slide.className = `slide ${idx === 0 ? 'active' : ''}`;
    slide.innerHTML = `<img src="${item.imagem}" alt="${item.titulo}">`;
    container.appendChild(slide);

    const dot = document.createElement("div");
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  document.getElementById("prevBtn").addEventListener("click", prevSlide);
  document.getElementById("nextBtn").addEventListener("click", nextSlide);

  setInterval(nextSlide, 4000);
}

function updateSlider() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === currentSlide);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % siteData.destaques.length;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + siteData.destaques.length) % siteData.destaques.length;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

function renderAlbuns() {
  const grid = document.getElementById("gridAlbuns");
  grid.innerHTML = ""; // Limpa antes de renderizar
  
  siteData.albuns.forEach(album => {
    const cardCol = document.createElement("div");
    cardCol.className = "col-md-4 col-12"; // 3 colunas no desktop, 1 no mobile
    
    cardCol.innerHTML = `
      <div class="card bg-black text-white border border-secondary h-100 p-2" style="cursor: pointer; transition: transform 0.3s, border-color 0.3s;">
        <div class="card-img-wrapper ratio ratio-1x1 bg-dark mb-3 border border-secondary overflow-hidden">
          <img src="${album.imagem}" alt="${album.titulo}" class="card-img w-100 h-100 object-fit-cover" style="filter: grayscale(100%);">
        </div>
        <h3 class="card-title fs-5 fw-bold mb-1">${album.titulo}</h3>
        <p class="card-sub text-secondary mb-0">${album.ano}</p>
      </div>
    `;

    cardCol.querySelector(".card").addEventListener("click", () => {
      openModal(album.titulo, album.imagem, `Ano: ${album.ano}`, album.descricao);
    });

    grid.appendChild(cardCol);
  });
}

function renderMusicas() {
  const grid = document.getElementById("gridMusicas");
  grid.innerHTML = ""; 

  siteData.musicas.forEach(musica => {
    const cardCol = document.createElement("div");
    cardCol.className = "col-md-4 col-12"; 
    cardCol.innerHTML = `
      <div class="card bg-black text-white border border-secondary h-100 p-2" style="cursor: pointer; transition: transform 0.3s, border-color 0.3s;">
        <div class="card-img-wrapper ratio ratio-1x1 bg-dark mb-3 border border-secondary overflow-hidden">
          <img src="${musica.imagem}" alt="${musica.titulo}" class="card-img w-100 h-100 object-fit-cover" style="filter: grayscale(100%);">
        </div>
        <h3 class="card-title fs-5 fw-bold mb-1">${musica.titulo}</h3>
        <p class="card-sub text-secondary mb-0">${musica.detalhe}</p>
      </div>
    `;

    cardCol.querySelector(".card").addEventListener("click", () => {
      openModal(musica.titulo, musica.imagem, musica.detalhe, musica.descricao);
    });

    grid.appendChild(cardCol);
  });
}

function initModal() {
  const modal = document.getElementById("detailModal");
  const closeBtn = document.getElementById("modalClose");

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

function openModal(titulo, imagem, sub, descricao) {
  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <img src="${imagem}" alt="${titulo}" class="modal-detail-img">
    <h2 class="section-title" style="margin-bottom: 5px;">${titulo}</h2>
    <p style="color: #888; font-weight: bold; margin-bottom: 15px;">${sub}</p>
    <p style="color: #ccc; font-size: 0.95rem;">${descricao}</p>
  `;
  document.getElementById("detailModal").classList.add("active");
}

function closeModal() {
  document.getElementById("detailModal").classList.remove("active");
}

function initNewsletter() {
  const form = document.getElementById("newsletterForm");
  const feedback = document.getElementById("newsletterFeedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nomeInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();

    if (nome && email) {
      feedback.style.color = "#ffffff";
      feedback.textContent = `[ SUCESSO: ${nome.toUpperCase()}, O TEU E-MAIL FOI REGISTADO! ]`;
      form.reset();
    } else {
      feedback.style.color = "#ff4444";
      feedback.textContent = "[ ERRO: POR FAVOR, PREENCHA TODOS OS CAMPOS ]";
    }
  });
}