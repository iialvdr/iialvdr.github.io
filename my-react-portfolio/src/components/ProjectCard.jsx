import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <Link to={`/project/${project.id}`} className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-transparent hover:border-purple-500 transition-all duration-300 ease-in-out hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{project.description}</p>
            </div>
        </Link>
    );
};

export default ProjectCard;