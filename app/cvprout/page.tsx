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
{/* container rend adaptif la taille et mx auto elle centre  */}
      
      <Navbar />   
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white/80 dark:bg-black/60 p-6 rounded-lg">
          <main>
            <header className="mb-8">
              <h1 className="text-4xl font-bold">À Propos de Moi</h1>
              <p className="text-slate-600">Bienvenue sur ma page personnelle.</p>
            </header>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Mon Histoire</h2>
              <p className="text-slate-700 whitespace-pre-line">
                Je suis un développeur passionné par la création d'expériences web interactives et performantes.
                Mon parcours m'a amené à explorer diverses technologies, allant du développement frontend avec React
                aux bases de données et aux architectures backend.
                J'aime résoudre des problèmes complexes et apprendre de nouvelles choses chaque jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-slate-700">
                Vous pouvez me contacter via email à <a href="mailto:votre.email@example.com" className="text-blue-600 hover:underline">votre.email@example.com</a>
                ou me trouver sur LinkedIn.
              </p>
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
