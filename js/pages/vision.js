export function vision() {
  return `
    <div class="bg-paper text-ink font-sans">
    
      <!-- Simple Header -->
      <section class="pt-20 pb-12 px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-black mb-6 font-serif tracking-tight">Nos Valeurs</h1>
          <p class="text-xl text-black/60 max-w-2xl mx-auto italic font-serif">
              « J’ai mis devant toi une porte ouverte que nul ne peut fermer » — Apocalypse 3:8
          </p>
          <div class="mx-auto mt-8 h-1 w-24 bg-punch"></div>
      </section>
    
      <!-- VALUES BLOCKS (alternance ink + image) -->
      <main class="mx-auto max-w-6xl px-4 pb-14">
    
        <!-- Row 1: ink left / image right -->
        <section class="grid md:grid-cols-2 gap-0 border border-rule overflow-hidden rounded-t-3xl">
          <div class="bg-ink text-paper p-8 md:p-10 flex">
            <div class="my-auto">
              <h2 class="text-2xl md:text-3xl font-black leading-tight font-serif">
                L’autorité de la Parole de Dieu
              </h2>
              <p class="mt-4 text-paper/90 leading-relaxed">
                Elle est digne d’être écoutée et d’être crue. La Bible est la base de la foi et de la vie du disciple.
                Croire, c’est la mettre en pratique.
              </p>
              <p class="mt-4 text-sm italic text-paper/70 font-serif">
                « Le ciel et la terre passeront mais mes paroles ne passeront point » — Marc 13:31
              </p>
            </div>
          </div>
    
          <div class="bg-black">
            <img class="h-[260px] md:h-full w-full object-cover"
                 src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=2000&q=80"
                 alt="Bible" />
          </div>
        </section>
    
        <!-- Row 2: image left / ink right -->
        <section class="grid md:grid-cols-2 gap-0 border-x border-b border-rule overflow-hidden">
          <div class="bg-black">
            <img class="h-[260px] md:h-full w-full object-cover"
                 src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80"
                 alt="Famille" />
          </div>
    
          <div class="bg-ink text-paper p-8 md:p-10 flex">
            <div class="my-auto">
              <h2 class="text-2xl md:text-3xl font-black leading-tight font-serif">
                L’Église, une famille
              </h2>
              <p class="mt-4 text-paper/90 leading-relaxed">
                L’amour fraternel est vécu dans une vie familiale profonde et sincère.
                Chaque génération y a sa place et transmet ce qu’elle a reçu.
              </p>
              <p class="mt-4 text-sm italic text-paper/70 font-serif">
                « …aimez-vous ardemment les uns les autres, de tout votre cœur » — 1 Pierre 1:22
              </p>
            </div>
          </div>
        </section>
    
        <!-- Row 3: ink left / image right -->
        <section class="grid md:grid-cols-2 gap-0 border-x border-b border-rule overflow-hidden">
          <div class="bg-ink text-paper p-8 md:p-10 flex">
            <div class="my-auto">
              <h2 class="text-2xl md:text-3xl font-black leading-tight font-serif">
                La louange
              </h2>
              <p class="mt-4 text-paper/90 leading-relaxed">
                Elle est pour nous un mode de vie en toutes circonstances et conduit à l’adoration
                en esprit et en vérité.
              </p>
              <p class="mt-4 text-sm italic text-paper/70 font-serif">
                « Je bénirai l’Éternel en tout temps… » — Psaumes 34:2
              </p>
            </div>
          </div>
    
          <div class="bg-black">
            <img class="h-[260px] md:h-full w-full object-cover"
                 src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=2000&q=80"
                 alt="Louange" />
          </div>
        </section>
    
        <!-- Row 4: image left / ink right -->
        <section class="grid md:grid-cols-2 gap-0 border-x border-b border-rule overflow-hidden">
          <div class="bg-black">
            <img class="h-[260px] md:h-full w-full object-cover"
                 src="https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=2000&q=80"
                 alt="Prière" />
          </div>
    
          <div class="bg-ink text-paper p-8 md:p-10 flex">
            <div class="my-auto">
              <h2 class="text-2xl md:text-3xl font-black leading-tight font-serif">
                La prière
              </h2>
              <p class="mt-4 text-paper/90 leading-relaxed">
                Suivre l’exemple du Seigneur ne peut se faire sans une Église attachée à la prière.
              </p>
              <p class="mt-4 text-sm italic text-paper/70 font-serif">
                « Priez sans cesse » — 1 Thessaloniciens 5:17
              </p>
            </div>
          </div>
        </section>
    
        <!-- Row 5: ink left / image right -->
        <section class="grid md:grid-cols-2 gap-0 border-x border-b border-rule overflow-hidden">
          <div class="bg-ink text-paper p-8 md:p-10 flex">
            <div class="my-auto">
              <h2 class="text-2xl md:text-3xl font-black leading-tight font-serif">
                La vie de l’Esprit
              </h2>
              <p class="mt-4 text-paper/90 leading-relaxed">
                Elle se manifeste au travers du fruit, des signes et des dons de l’Esprit.
              </p>
              <p class="mt-4 text-sm italic text-paper/70 font-serif">
                « Voici les miracles qui accompagneront ceux qui auront cru… » — Marc 16:17–18
              </p>
            </div>
          </div>
    
          <div class="bg-black">
            <img class="h-[260px] md:h-full w-full object-cover"
                 src="https://images.unsplash.com/photo-1520975869010-9a8d1e4f7f1d?auto=format&fit=crop&w=2000&q=80"
                 alt="Esprit" />
          </div>
        </section>
    
        <!-- Row 6: image left / ink right -->
        <section class="grid md:grid-cols-2 gap-0 border-x border-b border-rule overflow-hidden">
          <div class="bg-black">
            <img class="h-[260px] md:h-full w-full object-cover"
                 src="https://images.unsplash.com/photo-1457694587812-e8bf29a43845?auto=format&fit=crop&w=2000&q=80"
                 alt="Discipolat" />
          </div>
    
          <div class="bg-ink text-paper p-8 md:p-10 flex">
            <div class="my-auto">
              <h2 class="text-2xl md:text-3xl font-black leading-tight font-serif">
                Le discipolat
              </h2>
              <p class="mt-4 text-paper/90 leading-relaxed">
                Aider les croyants à grandir par l’enseignement et l’accompagnement jusqu’à la maturité en Christ.
              </p>
              <p class="mt-4 text-sm italic text-paper/70 font-serif">
                « Allez, faites de toutes les nations des disciples… » — Matthieu 28:20
              </p>
            </div>
          </div>
        </section>
    
        <!-- Row 7: ink left / image right -->
        <section class="grid md:grid-cols-2 gap-0 border-x border-b border-rule overflow-hidden">
          <div class="bg-ink text-paper p-8 md:p-10 flex">
            <div class="my-auto">
              <h2 class="text-2xl md:text-3xl font-black leading-tight font-serif">
                L’enseignement des enfants
              </h2>
              <p class="mt-4 text-paper/90 leading-relaxed">
                Communiquer l’Évangile de manière adaptée à chacun, en formant la prochaine génération.
              </p>
              <p class="mt-4 text-sm italic text-paper/70 font-serif">
                « Instruis l’enfant selon la voie qu’il doit suivre… » — Proverbes 22:6
              </p>
            </div>
          </div>
    
          <div class="bg-black">
            <img class="h-[260px] md:h-full w-full object-cover"
                 src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=2000&q=80"
                 alt="Enfants" />
          </div>
        </section>
    
        <!-- Row 8: image left / ink right -->
        <section class="grid md:grid-cols-2 gap-0 border-x border-b border-rule overflow-hidden rounded-b-3xl">
          <div class="bg-black">
            <img class="h-[260px] md:h-full w-full object-cover"
                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
                 alt="Évangélisation" />
          </div>
    
          <div class="bg-ink text-paper p-8 md:p-10 flex">
            <div class="my-auto">
              <h2 class="text-2xl md:text-3xl font-black leading-tight font-serif">
                L’évangélisation
              </h2>
              <p class="mt-4 text-paper/90 leading-relaxed">
                Annoncer la Bonne Nouvelle et accompagner ceux qui cherchent Jésus, avec amour et clarté.
              </p>
              <p class="mt-4 text-sm italic text-paper/70 font-serif">
                « Allez par tout le monde, et prêchez la bonne nouvelle… » — Marc 16:15
              </p>
            </div>
          </div>
        </section>
        
        <!-- Bottom CTAs (2 cards) -->
        <section class="mt-12 grid gap-6 md:grid-cols-2">
            <a href="#/equipe" class="group rounded-3xl overflow-hidden border border-rule shadow-soft bg-haze">
                <div class="p-6 font-black text-lg text-ink">L’équipe pastorale</div>
                <div class="px-6 pb-6">
                    <div class="rounded-2xl overflow-hidden">
                        <img class="h-56 w-full object-cover group-hover:scale-[1.02] transition"
                             src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                             alt="Equipe" />
                    </div>
                </div>
            </a>
    
            <a href="#/elrtv" class="group rounded-3xl overflow-hidden border border-rule shadow-soft bg-ink text-paper">
                <div class="p-6 font-black text-lg">ELR TV</div>
                <div class="px-6 pb-6">
                    <div class="rounded-2xl overflow-hidden">
                        <img class="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition"
                             src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80"
                             alt="TV" />
                    </div>
                </div>
            </a>
        </section>
    
      </main>
    </div>
    `;
}
