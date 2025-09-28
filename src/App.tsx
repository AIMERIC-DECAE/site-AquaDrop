function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 text-slate-800">
      <header className="relative overflow-hidden bg-sky-900">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.4), transparent 45%), radial-gradient(circle at 80% 30%, rgba(129, 140, 248, 0.35), transparent 45%), radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.4), transparent 55%)",
          }}
          aria-hidden="true"
        ></div>
        <div className="relative px-6 py-24 md:py-32 max-w-4xl mx-auto text-center text-white">
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm mb-3">
            AquaDrop - Ligue des Jeunes Entrepreneurs
          </p>
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Ensemble, visons la victoire à la LJE
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/90">
            Nous sommes une équipe passionnée par l'innovation durable. Notre mission
            : transformer l'accès à l'eau grâce à des solutions responsables et
            accessibles à toutes les communautés.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-[2fr,1fr]">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-sky-900">
            Pourquoi voulons-nous gagner la LJE ?
          </h2>
          <p className="mt-6 leading-relaxed text-base md:text-lg text-slate-700">
            Gagner la Ligue des Jeunes Entrepreneurs est bien plus qu'un objectif pour
            AquaDrop : c'est l'opportunité de prouver qu'une startup peut allier
            ambition et impact positif. Nous voulons inspirer d'autres jeunes
            entrepreneurs, valoriser notre vision et montrer que chaque goutte
            d'engagement peut changer le monde.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <article className="p-6 rounded-2xl bg-white shadow-lg shadow-sky-100 border border-slate-100">
              <h3 className="text-xl font-semibold text-sky-800">Innovation utile</h3>
              <p className="mt-4 text-slate-600">
                Notre système de collecte et de purification de l'eau répond à des
                besoins concrets, avec des technologies faciles à déployer et à
                maintenir.
              </p>
            </article>
            <article className="p-6 rounded-2xl bg-white shadow-lg shadow-sky-100 border border-slate-100">
              <h3 className="text-xl font-semibold text-sky-800">Impact social</h3>
              <p className="mt-4 text-slate-600">
                En soutenant des communautés vulnérables, nous créons un cercle vertueux
                entre développement local et préservation des ressources naturelles.
              </p>
            </article>
            <article className="p-6 rounded-2xl bg-white shadow-lg shadow-sky-100 border border-slate-100">
              <h3 className="text-xl font-semibold text-sky-800">Esprit d'équipe</h3>
              <p className="mt-4 text-slate-600">
                Notre force réside dans la diversité de nos talents. Ensemble, nous
                relevons les défis avec créativité et persévérance.
              </p>
            </article>
            <article className="p-6 rounded-2xl bg-white shadow-lg shadow-sky-100 border border-slate-100">
              <h3 className="text-xl font-semibold text-sky-800">Vision durable</h3>
              <p className="mt-4 text-slate-600">
                Nous plaçons la durabilité au cœur de chaque décision afin de préserver
                les ressources pour les générations futures.
              </p>
            </article>
          </div>
        </section>

        <aside className="p-8 bg-white rounded-3xl shadow-xl shadow-sky-100 border border-slate-100 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-sky-900">Notre promesse</h2>
          <p className="text-slate-600 leading-relaxed">
            "Nous allons gagner la LJE." Ce n'est pas seulement un slogan : c'est un
            engagement envers notre équipe, nos partenaires et toutes les personnes
            qui croient en AquaDrop.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-800 font-semibold">
                01
              </span>
              <p className="text-sm text-slate-600">
                Accélérer le développement de nos solutions d'accès à l'eau.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-800 font-semibold">
                02
              </span>
              <p className="text-sm text-slate-600">
                Créer un réseau d'alliés pour déployer AquaDrop à grande échelle.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-800 font-semibold">
                03
              </span>
              <p className="text-sm text-slate-600">
                Inspirer la prochaine génération à entreprendre avec conscience.
              </p>
            </div>
          </div>
          <button className="mt-auto inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
            Rejoignez l'aventure
          </button>
        </aside>
      </main>

      <footer className="border-t border-slate-200 bg-white/70 backdrop-blur py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} AquaDrop. Tous droits réservés.</p>
          <p>Avec détermination, nous irons chercher la victoire à la LJE.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
