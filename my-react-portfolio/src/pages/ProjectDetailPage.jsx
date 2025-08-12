import { useParams, Link } from 'react-router-dom';
import projects from '../assets/data/projects';

const ProjectDetailPage = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return <div className="text-white p-8">Proyek tidak ditemukan.</div>;
    }

    return (
        <section id="project-detail" className="p-8 glass-container">
            <Link to="/#work" className="text-purple-400 hover:underline mb-4 inline-block">&larr; Kembali ke Proyek</Link>
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{project.title}</a>
            </h2>
            <img src={project.image} alt={project.title} className="w-full mb-6 rounded-lg" />
            <p className="text-gray-400 leading-relaxed mb-4">{project.details}</p>
            <h3 className="text-xl font-semibold text-white mb-2">Fitur Utama</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
                {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectDetailPage;