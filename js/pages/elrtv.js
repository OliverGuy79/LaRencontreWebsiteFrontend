// Page ELR TV - Lecteur média
export function elrtv() {
    // Ajouter les event listeners après le rendu
    setTimeout(() => {
        document.querySelectorAll('.media-card[data-type]').forEach(card => {
            card.addEventListener('click', () => {
                const type = card.dataset.type;
                const url = card.dataset.url;
                playMedia(type, url);
            });
        });
    }, 0);

    return `
        <section class="page-header">
            <h1>ELR TV</h1>
            <p>Retrouvez nos prédications et contenus audio/vidéo</p>
        </section>
        
        <section class="media-controls">
            <p class="hint">💡 Le lecteur reste actif même en changeant de page !</p>
        </section>
        
        <section class="media-grid">
            <article class="media-card" data-type="video" data-url="https://www.w3schools.com/html/mov_bbb.mp4">
                <div class="thumbnail">▶️</div>
                <h3>Prédication du dimanche</h3>
                <span class="duration">45:00</span>
            </article>
            
            <article class="media-card" data-type="audio" data-url="https://www.w3schools.com/html/horse.mp3">
                <div class="thumbnail">🎧</div>
                <h3>Podcast hebdomadaire</h3>
                <span class="duration">30:00</span>
            </article>
        </section>
    `;
}

// Fonction pour lire les médias
function playMedia(type, url) {
    const audioPlayer = document.getElementById('audio-player');
    const videoPlayer = document.getElementById('video-player');
    const playerContainer = document.getElementById('player-container');

    // Afficher le conteneur du player
    playerContainer.classList.add('active');

    if (type === 'audio') {
        videoPlayer.pause();
        videoPlayer.style.display = 'none';
        audioPlayer.style.display = 'block';
        audioPlayer.src = url;
        audioPlayer.controls = true;
        audioPlayer.play();
    } else {
        audioPlayer.pause();
        audioPlayer.style.display = 'none';
        videoPlayer.style.display = 'block';
        videoPlayer.src = url;
        videoPlayer.controls = true;
        videoPlayer.play();
    }
}
