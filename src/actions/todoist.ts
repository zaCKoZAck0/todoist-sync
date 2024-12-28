import { TodoistApi } from "@doist/todoist-api-typescript";

const api = new TodoistApi("664910e1caf6ead0e33dc23c4a115efcff3dd8af");

export async function getProjects() {
  const projects = await api.getProjects();
  return projects;
}

export async function getTasks() {
  const tasks = await api.getTasks({
    filter: "today",
  });
  return tasks;
}
