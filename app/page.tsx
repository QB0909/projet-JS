import Navbar from "./components/Navbar";
import CvEntry from "./components/CvEntry";
import Image from "next/image";
import imageWeb from "./image/imageweb.jpg";
import { createTask, getTasks,deleteTask } from './lib/tasks' //on importe de lib task

export default async function Home() {
  const tasks = await getTasks()
  return ( // form fais un formulaire  
    <>
      <form action={createTask}>  
        <label>
          New task: <input name="title" />
        </label>
        <button>Submit</button>
      </form>
      <ul>
        {tasks.map((task, id) => (  //tasks est un tableau d’objets. VOIR EXPLICATION LABO 2
        <li key={id}>
          {task.title}
          
          <form action={deleteTask.bind(null, id)}> 
            <button type="submit">Delete task</button>
          </form>
        </li>
        ))}
      </ul>
    



    <div className="min-h-screen bg-zinc-50 dark:bg-black"> 
      <Navbar /> 

      <div className="flex justify-evenly space-x-4 mt-2">
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
          <div className="h-16 w-16 rounded-full bg-orange-500"></div>
          <div className="h-16 w-16 rounded-full bg-green-500"></div>
      </div>
      <main className="container mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Quentin BUI</h1>
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
    </>
  );
}
