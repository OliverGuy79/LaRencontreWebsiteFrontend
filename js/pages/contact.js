// Page Contact
export function contact() {
    return `
        <section class="page-header">
            <h1>Contact</h1>
            <p>Nous sommes là pour vous</p>
        </section>
        
        <section class="contact-content">
            <div class="contact-info">
                <h2>Nos coordonnées</h2>
                <p>📍 Adresse : 123 Rue de l'Église, Ville</p>
                <p>📞 Téléphone : 01 23 45 67 89</p>
                <p>✉️ Email : contact@eglise-larencontre.fr</p>
            </div>
            
            <form class="contact-form">
                <h2>Envoyez-nous un message</h2>
                <input type="text" placeholder="Votre nom" required>
                <input type="email" placeholder="Votre email" required>
                <textarea placeholder="Votre message" rows="5" required></textarea>
                <button type="submit" class="btn-submit">Envoyer</button>
            </form>
        </section>
    `;
}
