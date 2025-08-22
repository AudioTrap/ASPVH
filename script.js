// ==============================
// Scroll suave para links do menu
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==============================
// Toggle do menu mobile
// ==============================
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        const navMenu = document.querySelector('nav ul');
        navMenu.classList.toggle('show');
    });
}

// ==============================
// Exemplo de função para carregar feed do Instagram
// ==============================
// OBS: É necessário usar API do Instagram ou widget de terceiros.
// Essa função é apenas placeholder para indicar onde inserir o feed.

function carregarFeedInstagram() {
    const feedContainer = document.getElementById('instagram-feed');
    if (!feedContainer) return;

    // Exemplo de post fake
    const post = document.createElement('div');
    post.className = 'instagram-post';
    post.innerHTML = `
        <p><strong>@aspvh</strong> Novo evento para a comunidade surda!</p>
        <video controls width="300">
            <source src="videos/noticia1-libras.mp4" type="video/mp4">
            Seu navegador não suporta vídeo.
        </video>
    `;
    feedContainer.appendChild(post);
}

// Chamando a função para teste
carregarFeedInstagram();

// ==============================
// Interações futuras podem ser adicionadas aqui
// ==============================
// Por exemplo: abrir modal de vídeo, animações de cards, alertas, etc.
