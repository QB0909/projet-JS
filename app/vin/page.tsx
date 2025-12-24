"use client";

import Navbar from '../components/Navbar';

// Main Page Component
export default function WinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">Ma Cave à Vins</h1>
          <p className="text-xl text-blue-300">Consultez vos notes de dégustation.</p>
        </header>

        <main>
          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Mes Dégustations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Wine 1  permet effet dynamique :  transform hover:scale-105 transition-transform duration-300"*/} 
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-300 mb-2">Château Margaux</h3>
                  <p className="text-md font-semibold text-gray-400 mb-4">Millésime : 2015</p>
                  <p className="text-gray-300 whitespace-pre-line">Un vin rouge élégant avec des arômes de fruits noirs, de cèdre et de violette. Très complexe et bien structuré.</p>
                </div>
              </div>
              {/* Wine 2 */}
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-300 mb-2">Domaine de la Romanée-Conti</h3>
                  <p className="text-md font-semibold text-gray-400 mb-4">Millésime : 2010</p>
                  <p className="text-gray-300 whitespace-pre-line">Un pinot noir légendaire. Notes de cerise rouge, de terre humide et d'épices. Finale incroyablement longue.</p>
                </div>
              </div>
              {/* Wine 3 */}
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-300 mb-2">Screaming Eagle</h3>
                  <p className="text-md font-semibold text-gray-400 mb-4">Millésime : 2018</p>
                  <p className="text-gray-300 whitespace-pre-line">Cabernet Sauvignon de la Napa Valley. Puissant et concentré, avec des saveurs de cassis, de moka et de graphite.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <section className="mt-16 bg-black text-white">
        <div className="container mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-300">Informations Complémentaires</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-center">
            <li>Découvrez les cépages rares de notre collection privée.</li>
            <li>Participez à nos ateliers de dégustation mensuels.</li>
            <li>Abonnez-vous à notre newsletter pour les offres exclusives.</li>
            <li>Contactez notre équipe pour toute question sur nos vins.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}