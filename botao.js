// Carregar os slides e o total de slides
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
let slideAtual = 0;

const indicadoresContainer = document.getElementById("indicadores");

// Lista de imagens para as bolinhas (indicadores)
const imagensIndicadores = [
  "path/to/image1.jpg", // Substitua com o caminho para a imagem
  "path/to/image2.jpg", // Substitua com o caminho para a imagem
  "path/to/image3.jpg", // Substitua com o caminho para a imagem
  // Adicione mais imagens conforme necessário
];

// Criar os indicadores (bolinhas com imagem)
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  
  // Criar uma imagem para cada indicador
  const img = document.createElement("img");
  img.src = imagensIndicadores[i] || "default-image.jpg"; // Use uma imagem padrão se não houver imagem específica
  img.alt = `Imagem do indicador ${i + 1}`;
  dot.appendChild(img);

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


