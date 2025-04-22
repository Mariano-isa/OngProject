  const slides = document.getElementById("slides");
  const totalSlides = slides.children.length;
  let slideAtual = 0;

  const indicadoresContainer = document.getElementById("indicadores");

    for (let i = 0; i < totalSlides; i++){
    let dot = document.createElement("span");
    dot.addEventListener("click", () => irParaSlide(i));
    indicadoresContainer.appendChild(dot)
     };

         function atualizarCarrossel(){
         slides.style.transform = `translateX(-${slideAtual * 100}%)`;
         let dots = indicadoresContainer.children;
    
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("ativo");
    }
      dots[slideAtual].classList.add("ativo");}

  function mudarSlide(direcao) {
    slideAtual = (slideAtual + direcao + totalSlides) % totalSlides;
    atualizarCarrossel();
  }

  function irParaSlide(index) {
    slideAtual = index;
    atualizarCarrossel();
  }

  function autoSlide(){
    mudarSlide(1);
  }

  atualizarCarrossel();
  setInterval(autoSlide, 5000); // Troca a cada 5 segundos



