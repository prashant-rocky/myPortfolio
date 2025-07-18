
import imagePath from '../assets/imagePath'
import { faCamera, faCode, faHouse,} from '@fortawesome/free-solid-svg-icons';
import { faMarkdown, faPython, faReact, faWhatsapp, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
const Data = [

    {
        id: 1,
        workName: 'web development',
        workExprience: 80
    },
    {
        id: 2,
        workName: 'web design',
        workExprience: 90
    },
    {
        id: 3,
        workName: 'ui/ux design',
        workExprience: 60
    },
    {
        id: 4,
        workName: 'front-end development',
        workExprience: 95
    },
    {
        id: 5,
        workName: 'wordpress design',
        workExprience: 75
    },
    {
        id: 6,
        workName: 'python developer',
        workExprience: 70
    }
];

export const ServiceData = [
    {
        id:1,
        heading:"Web development",
        description:'I build responsive, scalable web applications using modern technologies to deliver fast, user-friendly digital experiences.',
        icon : faCode,
    },
    {
        id:2,
        // icon:"fa-regular fa-lightbulb",
        heading:"Web Design",
        description:'Web design is the process of creating visually appealing, user-friendly websites that function well across all device and fully responsive.',
        icon : faLightbulb,
    },
    {
        id:3,
        heading:"UI/UX design",
        description:'UI/UX design focuses on enhancing user experience and interface by making digital products intuitive, attractive, and easy to use.',
        icon : faCamera,
    },
    {
        id:4,
        heading:"Frontend developer",
        description:'Frontend development involves building the visual and interactive parts of websites using HTML, CSS, and JavaScript for user engagement.',
        icon : faReact,
    },
    {
        id:5,
        heading:"Wordpress design",
        description:'WordPress design involves creating and customizing websites using WordPress themes, plugins to build functional, responsive, and user-friendly sites.',
        icon : faWordpress
    },
    {
        id:6,
        heading:"python development",
        description:'Python development involves writing code using the Python language to build web applications, automate tasks, analyze data, and develop software.',
        icon : faPython
    },
]

export const ProjectImg = [
    {
        webLink :'https://kmrock.netlify.app/',
        name : 'COFEE SHOP',
        id: 1,
        ImgSrc : imagePath.coffee
    },
    {
        webLink :'https://kmrock.netlify.app/',
        name : 'KMROCK WEBSITE',
        id: 2,
        ImgSrc : imagePath.kmrock
    },
    {
        webLink :'https://kmindustries.nelify.app/',
        name : 'KMINDUSTRIES',
        id: 3,
        ImgSrc : imagePath.kmindustries
    },
    {
        webLink :'https://stopwatch1302.netlify.app/',
        name : 'STOPWATCH',
        id: 4,
        ImgSrc : imagePath.stopwatch
    },
    {
        webLink :'https://stopwatch1302.netlify.app/',
        name : 'PERSONAL PORTFOLIO',
        id: 5,
        ImgSrc : imagePath.personalP
    },
    {
        webLink :'https://stopwatch1302.netlify.app/',
        name : 'CLOTH STORE',
        id: 6,
        ImgSrc : imagePath.clothStore
    },
]

export  const eduacations = [
    {
        id : 1,
        date : '2021-2024',
        title : 'Graduation',
        body :'I completed my B.Sc. in 2024 from Jai Prakash University, Chapra, with a Science stream and Physics as my Honours subject, gaining strong knowledge and practical skills in core areas of physics and science.'
    },
    {
        id : 2,
        date : '2019-2021',
        title : '12th (Intermediate)',
        body :'I completed my 12th in 2021 from Lok Mahavidyalaya, Hafizpur, with a Science stream, where my subjects were Physics, Chemistry, and Mathematics (PCM), building a solid foundation in core scientific principles.'
    },
    {
        id : 3,
        date : '2018-2019',
        title : '10th (Matric)',
        body :'I completed my 10th in 2019 from Lok High School, Koluhuan, Saran, where I developed a strong academic foundation and essential skills in mathematics, science, preparing me for higher secondary education in the science stream.'
    },
]

export const experiences = [
    {
        id : 1,
        date : 'NOV 2024-Present',
        title : 'Front-end developer at Factonix',
        body :'I have been working as a Frontend Developer at Factonix Technologies since November 2024, where I design and develop responsive, user-friendly web interfaces using modern technologies like HTML, CSS, JavaScript, and React.'
    },
    {
        id : 2,
        date : 'june 2024-nov 2024',
        title : 'internship as a web designer',
        body : 'I completed an internship as a Web Designer at Shri SaiTech Solution from June 2024 to November 2024, where I gained hands-on experience in creating responsive website layouts using HTML, CSS, and design tools.'
    },
    {
        id : 3,
        date : 'july 2023-june 2024',
        title : 'web designer course',
        body : 'I completed a Web Designer course at DGA Professional Institute, Dwarka Mor, from July 2023 to June 2024, where I learned web design fundamentals, including HTML, CSS, JavaScript, and responsive design techniques.'
    }
]

export const worksData = [
    {
        id : 1,
        counter : 1092,
        title : 'Hours of work'
    },
    {
        id : 2,
        counter : 24,
        title : 'Project Done'
    },
    {
        id : 3,
        counter : 19,
        title : 'Satisfied customer'
    },
    {
        id : 4,
        counter : 4,
        title : 'Certificate'
    },
]
export const reviews = [
    {
        ImgSrc : imagePath.customer1,
        id : 1,
        name : 'mr. rocky',
        comments : "Delivered a clean, responsive website ahead of schedule. Very professional, and skilled in frontend development. Highly satisfied with the results and will definitely work with him again."
    },
    {
        ImgSrc : imagePath.customer2,
        id : 2,
        name : 'mr. rohit mehta',
        comments : "Excellent design skills and attention to detail. He created a user-friendly interface that looks great on all devices. Truly impressed with his dedication and technical knowledge."
    },
    {
        ImgSrc : imagePath.customer3,
        id : 3,
        name : 'mr. johnson',
        comments : "He quickly understood our needs and turned them into a functional, attractive website. Very efficient, reliable, and easy to work with. Highly recommended for web design projects."
    },
    {
        ImgSrc : imagePath.customer4,
        id : 4,
        name : 'mr. abhi',
        comments : "A creative and skilled developer who built exactly what we needed. Smooth communication and fast turnaround time. The website now looks modern, fast, and fully responsive."
    },
    {
        ImgSrc : imagePath.customer5,
        id : 5,
        name : 'mr. suraj',
        comments : "His frontend skills are top-notch. He delivered quality code, responsive layouts, and was always available for feedback. A great experience from start to finish."
    },
]
 
export const contactDetails = [
    {
        icon : faWhatsapp,
        id : 1,
        title : 'Call Us',
        body : '9724863041',
    },
    {
        icon: faMarkdown,
        id : 2,
        title : 'Email',
        body : 'p3532490@gmail.com',
    },
    {
        icon : faHouse,
        id : 3,
        title : 'Addess',
        body : 'H.no-64A, gali-22, prashant Enclav, baprola, new Delhi-110043',
    },
]

export default Data;
