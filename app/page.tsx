import Navbar from "./components/Navbar";
import CvEntry from "./components/CvEntry";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Navbar />

      <main className="container mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Jean Dupont</h1>
          <p className="text-slate-600">Etudiant à l'Ecam— Bruxelles</p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Expériences</h2>

          <CvEntry
            title="professeur de stage"
            date="2023 — Présent"
            description="moniteur de stage de tennis pendant les vacances scolaires mais bois durant les heures libres."
          />

          <CvEntry
            title="Stagiaire observateur"
            date="2025"
            description="à trouvé un stage chez e-peas j'ai eu de la chance je me suis fais pistonné"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 mt-8">Éducation</h2>

          <CvEntry
            title="Licence Informatique"
            date="2019 — 2022"
            description={"Université libre de Bruxelles— spécialité grève \net Ecam spécialité electro"}
          />
        </section>
      </main>
    </div>
  );
}
