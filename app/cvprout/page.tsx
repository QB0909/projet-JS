import Navbar from "../components/Navbar";
import CvEntry from "../components/CvEntry";
import Link from "next/link";
import Image from "next/image";

export default function CVPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/image/photoplage.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white/80 dark:bg-black/60 p-6 rounded-lg">
          <main>
        <header className="mb-8">
          <h1 className="text-4xl font-bold">CV — Quentin zedong</h1>
          <p className="text-slate-600">Résumé, expériences et formation</p>
        </header>


        <section>
          <h2 className="text-2xl font-semibold mb-4">Expériences</h2>

          <CvEntry
            title="Professeur de stage"
            date="2023 — Présent"
            description="Moniteur de stage de tennis pendant les vacances scolaires."
          />

          <CvEntry
            title="Stagiaire observateur"
            date="2025"
            description="Stage chez e-peas — expérience d'observation et apprentissage en entreprise."
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 mt-8">Éducation</h2>

          <CvEntry
            title="Licence Informatique"
            date="2019 — 2022"
            description={"Université libre de Bruxelles — spécialité informatique\net Ecam — spécialité électro"}
          />
        </section>

          </main>

          <div className="mt-8">
            <Link href="/">← Retour à l'accueil</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
