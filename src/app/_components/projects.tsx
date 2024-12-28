import { getProjects } from "~/actions/todoist";

export async function Projects() {
  const projects = await getProjects();
  return <ProjectsContainer projects={projects} />;
}

function ProjectsContainer({
  projects,
}: {
  projects: Awaited<ReturnType<typeof getProjects>>;
}) {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}
