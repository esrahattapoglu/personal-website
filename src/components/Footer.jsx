import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const { currentData, language } = useLanguage();

  return (
    <footer id="contact" className="py-16 bg-light-bg dark:bg-gray-900">
      <div className="container mx-auto px-4">
        
        {/*Başlık*/}
        <h2 className="text-4xl font-bold dark:text-white mb-10 leading-tight">
          {language === 'tr' ? (
            <>
              Bir sonraki ürününüzde
              <br />
              birlikte çalışalım.
            </>
          ) : (
            <>
              Let's work together on
              <br />
              your next product.
            </>
          )}
        </h2>

        {/*Email ve link*/}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-0">
          
          {/*Email*/}
          <a
          href="mailto:esraahattapoglu@gmail.com"
          className="text-base text-red-600 dark:text-red-400 font-medium hover:underline cursor-pointer"
          >
          👉 esraahattapoglu@gmail.com
        </a>


          {/**Link */}
          <div className="flex items-center gap-4">
            <a 
              href="#"
              className="text-sm text-gray-900 dark:text-gray-300 hover:text-gray-700 font-medium"
            >
              {currentData.personalBlog}
            </a>
            <a 
              href="https://github.com/esrahattapoglu" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 font-medium"
            >
              {currentData.footerGithub}
            </a>
            <a 
              href="https://www.linkedin.com/in/esra-hattapo%C4%9Flu-39a041238/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium"
            >
              {currentData.footerLinkedin}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
