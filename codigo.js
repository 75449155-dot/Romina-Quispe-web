function mostrarMesaje(mensaje) {
    alert(mensaje);
}
const contentData = {
    inicio: {
        title: "Bienvenidos",
        text: "Esta es una página educativa para aprender sobre diversos temas. Selecciona una sección en el menú para explorar contenido educativo."
    },
    noticias: {
        title: "Noticias Educativas",
        text: "Mantente al día con las últimas novedades en educación, como nuevos métodos de enseñanza, avances en tecnología educativa y más."
    },
    galeria: {
        title: "Galería de Recursos",
        text: "Explora imágenes, diagramas y recursos visuales para apoyar tu aprendizaje. ¡Pronto añadiremos más contenido!"
    },
    contactos: {
        title: "Contáctanos"
    }
};

// Cambiar contenido dinámicamente
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        const contentArea = document.getElementById('content-area');
        
        // Actualizar contenido
        if (contentData[sectionId]) {
            contentArea.innerHTML = `
                <h1>${contentData[sectionId].title}</h1>
                <p>${contentData[sectionId].text}</p>
            `;
        }
    });
});

// Modo oscuro/claro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Cargar preferencia de tema
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}