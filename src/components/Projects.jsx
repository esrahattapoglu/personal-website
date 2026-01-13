import { useLanguage } from '../context/LanguageContext';

function Projects() {
  const { currentData } = useLanguage();

  return (
    <section id="projects" className="pt-20 pb-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        
        {/*Başlık*/}
        <h2 className="text-5xl font-bold mb-16 dark:text-white">
          {currentData.projectsTitle}
        </h2>

      {/*proje yapısı*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {currentData.projectsList.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
              
              {/* Proje görselleri*/}
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-contain "
                />
              </div>

              {/* Proje içeriği*/}
              <div className="p-6">
                
                {/*Proje başlığı */}
                <h3 className="text-2xl font-bold text-main-purple mb-4">
                  {project.name}
                </h3>

                {/*Proje açıklaması*/}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* kullanılan diller */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-1 bg-white dark:bg-gray-700 text-main-purple dark:text-white border border-main-purple dark:border-gray-600 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/*Linkler */}
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github}
                    
                    className="text-main-purple dark:text-purple-400 font-semibold hover:underline"
                  >
                    {currentData.githubLabel}
                  </a>
                  <a 
                    href={project.viewSite}
                    className="text-main-purple dark:text-purple-400 font-semibold hover:underline"
                  >
                    {currentData.viewSiteLabel}
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;