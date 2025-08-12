import ProjectCard from './ProjectCard';
import projects from '../assets/data/projects';

const Projects = () => {
  return (
    <section id="work" className="p-8 glass-container">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        Proyek
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;