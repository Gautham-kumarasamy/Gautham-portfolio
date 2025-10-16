import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../store/slices/projectsSlice';
import Footer from './Footer';
import PropTypes from 'prop-types';
import projectService from '../domain/projectService';
import vpn from '../assets/Travel-log.png';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <img className="w-full rounded-t-lg h-auto object-cover " src={image} alt={title} />
            </div>
            <div className="p-4 sm:p-6">
                <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies && technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    git: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string)
};

const Projects = () => {
    const dispatch = useDispatch();
    const { items: projects, isLoading, error } = useSelector(state => state.projects);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    // Use domain layer for mapping
    const mappedProjects = projectService.mapProjectData(projects, vpn);

    if (isLoading) {
        return <div className="text-white text-center py-10">Loading projects...</div>;
    }
    if (error) {
        return <div className="text-red-500 text-center py-10">{error}</div>;
    }

    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {mappedProjects.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default Projects;