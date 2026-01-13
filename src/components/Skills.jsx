import { useLanguage } from '../context/LanguageContext';

function Skills() {

  const { currentData } = useLanguage();

  return (
    <section id="skills" className="pt-31 pb-20 bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        
        
        {/* Başlık */}
        <h2 className="text-5xl font-bold mb-16 dark:text-white">
          {currentData.skillsTitle}
        </h2>

        {/* yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {currentData.skillsList.map((skill, index) => (
            <div key={index}>
              {/* alt başlık */}
              <h3 className="text-3xl font-semibold text-main-purple mb-6">
                {skill.name}
              </h3>
              
              {/* açıklama */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;