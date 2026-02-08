export function boutique() {
    return `
    <div class="bg-paper text-ink font-sans min-h-screen">
        
        <!-- Page Header / Sub-nav -->
        <header class="sticky top-16 z-40 bg-paper/95 backdrop-blur border-b border-black/5 py-4">
            <div class="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="font-black text-2xl tracking-tight">BOUTIQUE</div>
                <nav>
                    <ul class="flex gap-6 text-sm font-bold uppercase tracking-wide text-black/60">
                        <li><a href="#vetements" class="hover:text-punch transition-colors">Vêtements</a></li>
                        <li><a href="#livres" class="hover:text-punch transition-colors">Livres</a></li>
                        <li><a href="#contact-shop" class="hover:text-punch transition-colors">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main class="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-20">
            
            <!-- Vêtements Section -->
            <section id="vetements" class="scroll-mt-32">
                <div class="flex items-end justify-between mb-8">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-black">Nos Vêtements</h2>
                        <p class="mt-2 text-black/60">Portez le message.</p>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Product Card -->
                    <article class="group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-soft hover:shadow-lg transition-all duration-300">
                        <div class="aspect-square bg-haze relative overflow-hidden">
                            <!-- Placeholder gradient instead of image -->
                            <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,58,237,.1),rgba(0,0,0,.05))]"></div>
                            <div class="absolute inset-0 flex items-center justify-center text-black/10 font-black text-6xl rotate-12 group-hover:scale-110 transition-transform duration-500">
                                PULL
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="text-xs font-bold text-punch uppercase tracking-widest mb-2">Collection 2026</div>
                            <h3 class="text-xl font-black mb-2">Pull à capuche "Espoir"</h3>
                            <p class="text-black/60 text-sm mb-6">Disponible en S, M, L, XL. Coton bio, coupe oversize confortable.</p>
                            
                            <a href="mailto:contact@eglise.com?subject=Reservation: Pull Espoir" 
                               class="block w-full text-center bg-ink text-paper font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">
                                Réserver cet article
                            </a>
                        </div>
                    </article>

                     <!-- Another Product Card (Example) -->
                     <article class="group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-soft hover:shadow-lg transition-all duration-300">
                        <div class="aspect-square bg-haze relative overflow-hidden">
                            <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(163,255,18,.15),rgba(0,0,0,.05))]"></div>
                            <div class="absolute inset-0 flex items-center justify-center text-black/10 font-black text-6xl -rotate-6 group-hover:scale-110 transition-transform duration-500">
                                T-SHIRT
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="text-xs font-bold text-punch uppercase tracking-widest mb-2">Nouveauté</div>
                            <h3 class="text-xl font-black mb-2">T-Shirt "Lumière"</h3>
                            <p class="text-black/60 text-sm mb-6">Coupe droite, 100% coton. Design minimaliste au dos.</p>
                            
                            <a href="mailto:contact@eglise.com?subject=Reservation: T-Shirt Lumiere" 
                               class="block w-full text-center bg-ink text-paper font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">
                                Réserver cet article
                            </a>
                        </div>
                    </article>
                </div>
            </section>

            <!-- Livres Section -->
            <section id="livres" class="scroll-mt-32 border-t border-black/5 pt-16">
                 <div class="flex items-end justify-between mb-8">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-black">Nos Livres</h2>
                        <p class="mt-2 text-black/60">Ressources pour grandir.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article class="group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-soft hover:shadow-lg transition-all duration-300">
                        <div class="aspect-[3/4] bg-haze relative overflow-hidden">
                             <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.02),rgba(0,0,0,.08))]"></div>
                             <!-- Book visual placeholder -->
                             <div class="absolute inset-12 bg-white shadow-xl rounded-r-lg border-l-4 border-black/10 flex items-center justify-center text-center p-4">
                                <div>
                                    <div class="font-serif font-bold text-xl text-ink">Guide<br>de la<br>Foi</div>
                                    <div class="mt-2 w-8 h-1 bg-punch mx-auto"></div>
                                </div>
                             </div>
                        </div>
                        <div class="p-6">
                            <div class="text-xs font-bold text-punch uppercase tracking-widest mb-2">Étude Biblique</div>
                            <h3 class="text-xl font-black mb-2">Guide de la Foi</h3>
                            <p class="text-black/60 text-sm mb-6">Format broché - 120 pages. Un parcours essentiel pour les nouveaux croyants.</p>
                            
                            <a href="https://wa.me/33612345678?text=Bonjour, je souhaite réserver le Guide de la Foi" target="_blank"
                               class="block w-full text-center border-2 border-ink text-ink font-bold py-3 rounded-xl hover:bg-ink hover:text-paper transition-all">
                                Réserver via WhatsApp
                            </a>
                        </div>
                    </article>
                </div>
            </section>

            <!-- Contact Section -->
            <section id="contact-shop" class="scroll-mt-32 mt-20 bg-haze rounded-3xl p-8 md:p-12 border border-black/5 text-center">
                <h2 class="text-2xl font-black mb-4">Une question sur un article ?</h2>
                <p class="text-black/60 max-w-xl mx-auto mb-8">
                    Notre équipe est là pour vous aider à choisir la bonne taille ou vous conseiller sur nos ressources.
                </p>
                <a href="#/contact" class="inline-flex rounded-full px-8 py-4 font-black bg-punch text-paper hover:bg-punch/90 transition-colors shadow-lg shadow-punch/30">
                    Contacter la boutique
                </a>
            </section>

        </main>
    </div>
    `;
}
