function toggleExperiencia() {
    var experiencia = document.querySelector('.experiencia__container__conteudo');
    var competencia = document.querySelector('.experiencia__competencias');
    var experiencia_container = document.querySelector('.experiencia__container');
    var checkbox = document.getElementById('experiencias');
    
    if (checkbox.checked) {
        experiencia.style.display = 'block';
        competencia.style.display = 'block';
        experiencia_container.style.height = 'auto';
    } else {
        experiencia.style.display = 'none';
        competencia.style.display = 'none';
        experiencia.style.height = '';        
    }
}

function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', scrollToAnchor);
    }
});

function scrollToAnchor(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Adiciona a animação suave
        });
    }
}
