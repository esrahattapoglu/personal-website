import { useLanguage } from '../context/LanguageContext';

function Profile() {
  const { currentData } = useLanguage();

  return (
    <section className="pt-10  bg-white dark:bg-dark-bg
    border-b border-gray-200 dark:border-gray-700
">
      <div className="container mx-auto px-4">
        
        {/* Ana başlık*/}

        <h2 className=" text-5xl font-bold mb-16 dark:text-white">
          {currentData.profileTitle}
        </h2>

        {/* İki bölüm */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/*Sol kısım */}

          <div>
            <h3 className="text-3xl font-semibold text-main-purple mb-8">
              {currentData.profileLabel}
            </h3>
            
            <div className="space-y-4">
             

              <div className="flex">
                <span className="font-semibold text-gray-900 dark:text-white w-48">
                  {currentData.profileInfo.birthDateLabel}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {currentData.profileInfo.birthDate}
                </span>

              </div>

            

              <div className="flex">
                <span className="font-semibold text-gray-900 dark:text-white w-48">
                  {currentData.profileInfo.cityLabel}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {currentData.profileInfo.city}
                </span>

              </div>

       

              <div className="flex">
                <span className="font-semibold text-gray-900 dark:text-white w-48">
                  {currentData.profileInfo.educationLabel}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {currentData.profileInfo.education}
                </span>

              </div>

              

              <div className="flex">
                <span className="font-semibold text-gray-900 dark:text-white w-48">
                  {currentData.profileInfo.roleLabel}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {currentData.profileInfo.role}
                </span>
              </div>
            </div>
          </div>

          {/*Sağ kısım */}
          
          <div className='mb-16'>
            <h3 className="text-3xl font-semibold text-main-purple mb-8">
              {currentData.aboutMeLabel}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {currentData.aboutMeText}
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed ">
              {currentData.aboutMeText2}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Profile;