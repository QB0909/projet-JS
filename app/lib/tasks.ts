'use server' //C’est une directive spéciale de Next.js 13 App Router.Elle indique que ce fichier ou ce module contient du code côté serveur, donc il sera réinitialisé à chaque redémarrage du serveur.

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const tasks: { 
  title: string; done: boolean; }[] = [] //Ici, tu crées un tableau vide pour stocker les tâches.

export async function getTasks() {
  return tasks
}

export async function createTask(form: FormData) {
  tasks.push({
    title: String(form.get('title')),
    done: false,
  })
  redirect((await headers()).get('referer') ?? '/')
}

export async function deleteTask(id: number) {
  tasks.splice(id, 1)
  redirect((await headers()).get('referer') ?? '/')
}