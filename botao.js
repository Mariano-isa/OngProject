// === Carrossel ===

const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
let slideAtual = 0;

const indicadoresContainer = document.getElementById("indicadores");

// Criar os indicadores (bolinhas)
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => irParaSlide(i));
  indicadoresContainer.appendChild(dot);
}

// Atualiza a posição do carrossel e o estilo dos indicadores
function atualizarCarrossel() {
  slides.style.transform = `translateX(-${slideAtual * 100}%)`;

  const dots = indicadoresContainer.children;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("ativo");
  }
  dots[slideAtual].classList.add("ativo");
}

// Muda o slide com base na direção
function mudarSlide(direcao) {
  slideAtual = (slideAtual + direcao + totalSlides) % totalSlides;
  atualizarCarrossel();
}

// Vai para um slide específico
function irParaSlide(index) {
  slideAtual = index;
  atualizarCarrossel();
}

// Troca automática a cada 5 segundos
function autoSlide() {
  mudarSlide(1);
}

// Iniciar
atualizarCarrossel();
setInterval(autoSlide, 5000);


// === Feed de Postagens ===

const feed = document.getElementById("feed");
const posts = JSON.parse(localStorage.getItem("posts") || "[]");

posts.reverse().forEach(post => {
  const postDiv = document.createElement("div");
  postDiv.className = "post";

  const postHTML = `
    <p>${post.text}</p>
    ${post.image ? `<img src="${post.image}" alt="Imagem do post">` : ""}
  `;
  postDiv.innerHTML = postHTML;

  feed.appendChild(postDiv);
});
