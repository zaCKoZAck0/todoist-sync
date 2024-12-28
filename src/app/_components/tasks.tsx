import { getTasks } from "~/actions/todoist";

export async function Tasks() {
  const tasks = await getTasks();
  return <TasksContainer tasks={tasks} />;
}

function TasksContainer({
  tasks,
}: {
  tasks: Awaited<ReturnType<typeof getTasks>>;
}) {
  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>{task.content}</div>
            <div>{task.due?.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
