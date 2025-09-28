import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Victor",
  lastName: "Ozana",
  name: `Victor Ozana`,
  role: "Desenvolvedor de Software",
  avatar: "/images/avatar.jpg",
  email: "victor.ozprofissional@gmail.com",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Português", "Inglês"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Fale comigo!</>,
  description: <>Deseja falar comigo? Deixe o seu email aqui e entrarei em contato!</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Victorozana",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/victorozana/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Casa",
  title: `${person.name}' Portfolio`,
  description: `Site do meu portifolio ${person.role}`,
  headline: <>Codificando soluções, e construindo o futuro.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Projetos</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Clique aqui!
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Olá, sou Victor Ozana. Meu trabalho é transformar ideias em código e construir aplicações robustas e fáceis de usar. Explore alguns dos meus projetos!
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Victor é um desenvolvedor de software 
        colaborativo e proativo, focado em criar 
        soluções com arquitetura sólida e desempenho 
        otimizado que garantem uma experiência de usuário 
        excepcional.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Projetos práticos",
    experiences: [
      {
        company: "Iniciação Científica",
        timeframe: "2025-presente",
        role: "Python, Scikit-learn, TensorFlow, Keras",
        achievements: [
          <>
           Feira Digital: Processamento de Linguagem Natural para Alavancar a Agricultura Familiar. É uma API que integra o Processamento de Linguagem Natural para entender a linguagem natural de agricultores familiar.
          </>,
        ],
        images: [],
      },
      {
        company: "Memory Game",
        timeframe: "2025",
        role: "Java, JavaFX, CRUD, Git, Arquitetura MVC",
        achievements: [
          <>
             Este projeto foi feito para as aulas na faculdade, porém ele inclui interface gráfica e é totalmente funcional, ou seja jogavél. Ele é capaz de incluir nomes e salva-lós, além de tratar problemas de concorrência.
          </>,
        ],
        images: [{
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formação",
    institutions: [
      {
        name: "Instituto Federal de Goiás",
        description: <>Bacharelado em Sistemas de Informação 01.2024 - 02.2027(previsão) .</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades técnicas",
    skills: [
      {
        title: "Java",
        description: (
          <>A linguagem Java é a linguagem que estudo desde que iniciei minhas atividades na programação, aplicando conhecimentos como: Lógica de Programação, Programação Orientada a Objetos, Arquiterura MVC, CRUD e Estrutura de Dados.</>
        ),
      },
      {
        title: "Spring Boot",
        description: (
          <>Principal Framework que utilizo para integrar minhas aplicações em Java, aplicando conhecimentos de: Conexão com Banco de Dados, API RESTful, Segurança da Informação e Arquitetura em Camadas.</>
        ),
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projetos Práticos",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Galeria – ${person.name}`,
  description: `Coleções de fotos de ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
