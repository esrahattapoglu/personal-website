
export const siteData = {
  tr: {
    // Hero 
    name: "Esra Hattapoglu",
    title: "Yaratıcı düşünen Minimalizmi seven",
    description: "Merhaba, Ben Esra. Ben bir full-stack developer'ım. Eğer sağlam ve ölçeklenebilir frontend ürünleri hazırlayacak bir geliştirici arıyorsanız, sizinle çalışmak isterim.",


    hireMe: "İşe Al",
    github: "Github",
    linkedin: "Linkedin",

    skills: "Yetenekler",
    projects: "Projeler",


    darkMode: "KOYU MOD",
    lightMode: "AÇIK MOD",

    // Skills 
    skillsTitle: "Yetenekler",
    skillsList: [
      {
        name: "Frontend Temelleri",
        description: "HTML, CSS ve JavaScript kullanarak sade ve responsive kullanıcı arayüzleri geliştiriyorum. Yerleşim, erişilebilirlik ve okunabilir kod yazmaya önem veriyorum."
      },

      {
        name: "React ve State Yönetimi",
        description: "React ile component tabanlı uygulamalar geliştiriyorum. Context API, Redux ve TanStack Query kullanarak global ve server state yönetimi yapıyorum."
      },

      {
        name: "Test ve Stil Araçları",
        description: "Tailwind CSS ile arayüzleri stillendiriyor, Cypress kullanarak kullanıcı akışlarını test ediyorum. Tutarlı bir arayüz ve güvenilir kullanıcı deneyimi hedefliyorum."
      }

    ],

    // Profil


    profileTitle: "Profil",
    profileLabel: "Profil",
    aboutMeLabel: "Hakkımda",
    profileInfo: {
      birthDateLabel: "Doğum tarihi",
      birthDate: "07.01.2001",
      cityLabel: "İkamet Şehri",
      city: "Bursa",
      educationLabel: "Eğitim Durumu",
      education: "BTÜ Kimya Lisans, 2023",
      roleLabel: "Tercih Ettiği Rol",
      role: "Frontend, UI"
    },
    aboutMe: "Hakkımda",
    aboutMeText: "Aktif olarak Full Stack projeler geliştiren bir Software Developer'ım. Şu anda Workintech bünyesinde, yoğun ve uygulama odaklı bir program kapsamında her gün proje geliştiriyor ve her ay kapsamlı bir yazılım projesi ortaya koyuyorum.",
    aboutMeText2: "Yeni teknolojiler öğrenerek kendimi sürekli geliştiriyor, öğrendiklerimi gerçek projelere dönüştürüyorum. Yazılım geliştirme konusunda tutkulu, üretmeyi ve problem çözmeyi seven bir geliştiriciyim.",


    // Projects 

    projectsTitle: "Projeler",
    projectsList: [
      {
        name: "Pizza Sipariş Formu",
        description: "Figma tasarımı baz alınarak geliştirilen statik bir pizza sipariş formu. HTML ve CSS ile responsive tasarım uygulanmış, semantik etiketler kullanılarak erişilebilir bir kullanıcı arayüzü oluşturulmuştur.",
        technologies: ["html", "css", "responsive"],
        image: "/images/1.proje.jpg",
        github: "https://github.com/esrahattapoglu/fsweb-s4-bonus-challenge-html-pizza",
        viewSite: "https://fsweb-s4-bonus-challenge-html-pizza-gamma.vercel.app"
      },
      {
        name: "Pizza Sipariş Uygulaması",
        description: "React ile geliştirilmiş tek sayfa pizza sipariş uygulaması. Form doğrulama, Axios ile API entegrasyonu ve prop-lifting ile state yönetimi uygulanmış. Cypress ile end-to-end testler yazılmıştır.",
        technologies: ["react", "axios", "cypress"],
        image: "/images/2.proje.jpg",
        github: "https://github.com/esrahattapoglu/fsweb-s8-challenge-pizza",
        viewSite: "https://fsweb-s8-challenge-pizza-tawny.vercel.app"
      },
      {
        name: "Kişisel Web Sitesi",
        description: "Frontend eğitimi sürecinde öğrenilen konuların bir araya getirildiği kişisel portfolio sitesi. React component yapısı, Context API ile global state yönetimi, dark mode ve Türkçe-İngilizce dil desteği içermektedir.",
        technologies: ["react", "tailwind", "context api"],
        image: "/images/3.proje.jpg",
        github: "https://github.com/esrahattapoglu",
        viewSite: "https://personal-website-pearl-sigma-11.vercel.app"
      }
    ],
    githubLabel: "Github",
    viewSiteLabel: "Siteyi Gör",


    // Footer
    personalBlog: "Kişisel Blog",
    footerGithub: "Github",
    footerLinkedin: "Linkedin",

    //axios
    hireSuccess: "İşe alım talebi gönderildi!",
    hireError: "Bir hata oluştu. Lütfen tekrar deneyin."


  },

  en: {
    // Hero 
    name: "Esra Hattapoglu",
    title: "Creative thinker Minimalism lover",
    description: "Hi, I'm Esra. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.",


    hireMe: "Hire me",
    github: "Github",
    linkedin: "Linkedin",

    skills: "Skills",
    projects: "Projects",

    darkMode: "DARK MODE",
    lightMode: "LIGHT MODE",


    skillsTitle: "Skills",
    skillsList: [
      {
        name: "Frontend Fundamentals",
        description: "I build clean and responsive user interfaces using HTML, CSS and JavaScript. I focus on layout, accessibility and writing readable code."
      },

      {
        name: "React & State Management",
        description: "I develop component-based applications with React. I manage global and server state using Context API, Redux and TanStack Query."
      },

      {
        name: "Testing & Styling Tools",
        description: "I style applications with Tailwind CSS and test user flows using Cypress. I aim for consistent UI and reliable user experiences."
      }

    ],

    // Profile 

    profileTitle: "Profile",
    profileLabel: "Profile",
    aboutMeLabel: "About Me",
    profileInfo: {
      birthDateLabel: "Date of Birth",
      birthDate: "07.01.2001",
      cityLabel: "City of Residence",
      city: "Bursa",
      educationLabel: "Education",
      education: "BTU Chemistry Bachelor's, 2023",
      roleLabel: "Preferred Role",
      role: "Frontend, UI"
    },
    aboutMe: "About Me",
    aboutMeText: "I am a Software Developer actively developing Full Stack projects. Currently, I am developing projects every day and delivering a comprehensive software project every month within Workintech's intensive and application-focused program.",
    aboutMeText2: "I constantly improve myself by learning new technologies and turn what I learn into real projects. I am a passionate developer who loves producing and problem-solving in software development.",


    // Projects 

    projectsTitle: "Projects",
    projectsList: [
      {
        name: "Pizza Order Form",
        description: "A static pizza order form built from a Figma design. Developed with semantic HTML and CSS, featuring responsive layout and accessible user interface without JavaScript.",
        technologies: ["html", "css", "responsive"],
        image: "/images/1.proje.jpg",
        github: "https://github.com/esrahattapoglu/fsweb-s4-bonus-challenge-html-pizza",
        viewSite: "https://fsweb-s4-bonus-challenge-html-pizza-gamma.vercel.app"
      },
      {
        name: "Pizza Ordering Application",
        description: "A Single Page Application pizza ordering system built with React. Features form validation, Axios API integration, and prop-lifting for state management. Includes end-to-end tests with Cypress.",
        technologies: ["react", "axios", "cypress"],
        image: "/images/2.proje.jpg",
        github: "https://github.com/esrahattapoglu/fsweb-s8-challenge-pizza",
        viewSite: "https://fsweb-s8-challenge-pizza-tawny.vercel.app"
      },
      {
        name: "Personal Website",
        description: "A personal portfolio website showcasing frontend development skills. Built with React components, Context API for global state management, featuring dark mode and Turkish-English language support.",
        technologies: ["react", "tailwind", "context api"],
        image: "/images/3.proje.jpg",
        github: "https://github.com/esrahattapoglu",
        viewSite: "https://personal-website-pearl-sigma-11.vercel.app"

      }
    ],
    githubLabel: "Github",
    viewSiteLabel: "View Site",

    // Footer
    personalBlog: "Personal Blog",
    footerGithub: "Github",
    footerLinkedin: "Linkedin",

    //axios

    hireSuccess: "Hiring request has been sent!",
    hireError: "Something went wrong. Please try again.",



  }
};