import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    insig,
    devg,
    tictac,
  } from "../assets";
  
  export const navLinks = [

    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Backend Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Java Developer",
      company_name: "Oasis Infobyte | Intern",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developed a Full Stack Patient-Doctor Appointment Website using  HTML5, CSS3, Java Servlet, JSP, JDBC,MySQL 8.0 .",
        "Implemented a user-friendly interface and optimized database connectivity for efficient appointment management..",
        "Enhanced user experience with dynamic content generation and real-time appointment updates.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Developer",
      company_name: "MV Designer | Intern",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Nov 2022",
      points: [
        "Led the frontend development efforts using React.js, leveraging its component-based architecture to create a modular and scalable user interface.",
        "Utilized Git for version control, facilitating seamless collaboration with the development team.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "Fiverr | Freelance",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2021 - Aug 2023",
      points: [
        "Produced visually stunning user interfaces, paying meticulous attention to color schemes, typography.",
        "Utilized industry-standard tools to create detailed wireframes and interactive prototypes, providing clients with a tangible preview of the final product.",
        "Specialized in creating responsive and mobile-friendly designs to provide a seamless user experience across a range of devices.",
        
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "EdTech ",
      description:
        "The platform serves as a comprehensive learning hub, offering a seamless online experience for selling and accessing coding courses.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        // {
        //   name: "",
        //   color: "green-text-gradient",
        // },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://brilliant-llama-6d9dfd.netlify.app/",
    },
    {
      name: "Qwerty.i/o",
      description:
        "Developed an information hub website covering club details, technical workshops, team, events, and registration using HTML, CSS, and JavaScript for frontend.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.sdmcetqwertyio.com/",
    },
    {
      name: "Password Gen",
      description:
        "This is a simple and secure password generator web application that allows users to create strong and unique passwords based on their preferences.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://idyllic-croissant-1303c9.netlify.app/",
    },
    {
      name: "Insignia'23",
      description:
        "Designed and developed a dynamic website for the national-level techno-cultural fest, Insignia’23, at SDM College of Engineering and Technology.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: insig,
      source_code_link: "https://www.sdmcetinsigniafest.com/",
    },
    {
      name: "DevDetective",
      description:
        "DevDetective is a web application that allows users to enter a GitHub username and view detailed information about the corresponding GitHub account.",
      tags: [
        {
          name: "Githubapi",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: devg,
      source_code_link: "https://reliable-crostata-3dde22.netlify.app/",
    },

    {
      name: "Tic Tac Toe",
      description:
        "Simple implementation of the Tic Tac Toe game using HTML, CSS, and JavaScript.it is a two-player game where the players take turns marking spaces in a 3x3 grid.",
      tags: [
        {
          name: "Githubapi",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tictac,
      source_code_link: "https://chipper-bienenstitch-542ee5.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };