//labo2 
//ce code a ete ajute à page.tsx car que page.tsx qui est affiché sur web


import { createTask, getTasks } from './lib/tasks' //on importe de lib task

export default async function TodoApp() {
  const tasks = await getTasks()
  return (
    <>
      <form action={createTask}>  //fais un formulaire 
        <label>
          New task: <input name="title" />
        </label>
        <button>Submit</button>
      </form>
      <ul>
        {tasks.map((task, id) => (
          <li>{task.title}</li>
        ))}
      </ul>
    </>
  )
}





type BlogPostPageProps = {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const id = Number((await props.params).id)
  return(
    <p>
      Votre id:{id}
    </p>
  )
}