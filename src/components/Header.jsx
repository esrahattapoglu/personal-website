import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, currentData } = useLanguage();

  return (
    <header className="pt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-start justify-between">

          {/*Logo(E)*/}

          <div className="  w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
            <span className=" text-2xl font-bold text-main-purple">E</span>
          </div>

          {/* Sağ taraf*/}

          <div className="flex flex-col items-end gap-8">

            {/*Mod ve dil değiştirme */}
            <div className="flex items-center gap-3">

              {/*Mod */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2"
              >
                <div
                  className={[
                    'w-12 h-6 rounded-full p-1 transition',
                    theme === 'dark' ? 'bg-main-purple' : 'bg-gray-300'
                  ].join(' ')}
                >
                  <div
                    className={[
                      'w-4 h-4 rounded-full bg-yellow-400 transform transition',
                      theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                    ].join(' ')}
                  />
                </div>

                {/* mod yazısı*/}

                <span className="text-sm font-bold text-gray-600 dark:text-gray-300 whitespace-nowrap">
                  {theme === 'dark' ? currentData.darkMode : currentData.lightMode}
                </span>
              </button>

              {/* çizgi */}
              <div className="h-6 w-px bg-gray-400"></div>

              {/* Dil değiştirme butonu */}
              <button
                onClick={toggleLanguage}
                className="text-sm font-bold whitespace-nowrap"
              >
                {language === 'tr' ? (
                  <span>
                    <span className="text-gray-400">SWITCH TO </span>
                    <span className="text-main-purple">ENGLISH</span>
                  </span>
                ) : (
                  <span>
                    <span className="text-main-purple">TÜRKÇE</span>
                    <span className="text-gray-400">'YE GEÇ</span>
                  </span>
                )}
              </button>

            </div>

            {/* alt satır*/}
            <div className="flex items-center gap-6">

              {/* skills ve projects*/}
              <nav className="flex gap-8">
                <a
                  href="#skills"
                  className="text-gray-600 dark:text-gray-300 hover:text-main-purple font-medium"
                >
                  {currentData.skills}
                </a>
                <a
                  href="#projects"
                  className="text-gray-600 dark:text-gray-300 hover:text-main-purple font-medium"
                >
                  {currentData.projects}
                </a>
              </nav>

              {/* Hire me butonu*/}
              <a
                href="#contact"
                className="px-6 py-2 border-2 border-main-purple text-main-purple rounded-md hover:bg-main-purple hover:text-white transition font-medium"
              >
                {currentData.hireMe}
              </a>

            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;