// Seleciona a barra de navegação
let navbar = document.querySelector('.navbar');

// Adiciona um evento de clique ao botão de menu
document.querySelector('#menu-bar').onclick = () => {
    // Alterna a classe 'active' na barra de navegação
    navbar.classList.toggle('active');
}

// Adiciona um evento de clique ao botão de fechar
document.querySelector('#close').onclick = () => {
    // Remove a classe 'active' da barra de navegação
    navbar.classList.remove('active');
}

// Adiciona um evento de rolagem à janela
window.onscroll = () => {
    // Remove a classe 'active' da barra de navegação
    navbar.classList.remove('active');

    // Verifica se a posição de rolagem é maior que 100 pixels
    if (window.scrollY > 100) {
        // Adiciona a classe 'active' ao cabeçalho
        document.querySelector('header').classList.add('active');
    } else {
        // Remove a classe 'active' do cabeçalho
        document.querySelector('header').classList.remove('active');
    }
}

// Seleciona o botão de alternar tema
let themeToggler = document.querySelector('#theme-toggler');

// Adiciona um evento de clique ao botão de alternar tema
themeToggler.onclick = () => {
    // Alterna a classe 'fa-sun' no botão de alternar tema
    themeToggler.classList.toggle('fa-sun');
    // Verifica se a classe 'fa-sun' está presente no botão de alternar tema
    if (themeToggler.classList.contains('fa-sun')) {
        // Adiciona a classe 'active' ao corpo do documento
        document.querySelector('body').classList.add('active');
    } else {
        // Remove a classe 'active' do corpo do documento
        document.querySelector('body').classList.remove('active');
    }
}

// Seleciona todas as imagens pequenas 1 e adiciona eventos de clique a elas
document.querySelectorAll('.small-image-1').forEach(images => {
    images.onclick = () => {
        // Atualiza a imagem grande 1 com o src da imagem pequena clicada
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
});

// O código a seguir para as imagens pequenas 2 e 3 é semelhante ao acima

// Define a data final para a contagem regressiva
let countDate = new Date('aug 1, 2021 00:00:00').getTime();

// Função para atualizar a contagem regressiva
function countDown() {
    // Obtém o tempo atual
    let now = new Date().getTime();
    // Calcula a diferença entre a data final e o tempo atual
    gap = countDate - now;

    // Calcula dias, horas, minutos e segundos restantes
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
    let h = Math.floor((gap % (days)) / (hours));
    let m = Math.floor((gap % (hours)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));

    // Atualiza os elementos HTML com os valores calculados
    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

// Atualiza a contagem regressiva a cada segundo
setInterval(function () {
    countDown()
}, 1000);

// Inicializa o slider do produto
var swiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

// Inicializa o slider de revisão
var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});
