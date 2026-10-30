import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Victor",
  lastName: "Ozana",
  name: "Victor Ozana",
  role: "Desenvolvedor de Software",
  avatar: "/images/avatar.jpg",
  email: "victor.ozprofissional@gmail.com",
  location: "America/Sao_Paulo", // Fuso IANA
  languages: ["Português", "Inglês (Intermediário)"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Fale comigo!</>,
  description: <>Deseja conversar sobre oportunidades, projetos ou trocar uma ideia? Escolha um canal abaixo e entre em contato direto comigo!</>,
};

const social: Social = [
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
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/5561998492225",
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
  label: "Início",
  title: `${person.name} — Portfólio`,
  description: `Portfólio de ${person.name}, ${person.role}`,
  headline: <>Construindo software eficiente, escalável e inteligente.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Projetos</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Ver projetos
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Olá, sou Victor Ozana. Desenvolvedor de Software com experiência em C#/.NET, Node.js, Java e Next.js, além de pesquisador em Inteligência Artificial aplicada pelo IFG. Foco em arquiteturas sólidas, APIs de alta performance e código limpo.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Conheça ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/5561998492225",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Sou Desenvolvedor de Software e graduando em Sistemas de Informação no Instituto Federal de Goiás (IFG). Tenho experiência prática em desenvolvimento Full Stack (C#/.NET, Node.js, Next.js e ecossistema Java/Quarkus), modernização de plataformas, otimização de consultas em bancos de dados SQL Server/PostgreSQL e implementação de APIs RESTful resilientes com testes automatizados (xUnit, JUnit).
        <br /><br />
        Atualmente atuo como pesquisador acadêmico em Inteligência Artificial pelo IFG, desenvolvendo soluções aplicadas de Processamento de Linguagem Natural (NLP), reconhecimento de voz e modelos de Deep Learning com Python e Google AI Studio.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiência profissional",
    experiences: [
      {
        company: "Instituto Federal de Goiás (IFG)",
        timeframe: "08/2025 — Atual",
        role: "Pesquisador em Inteligência Artificial (Iniciação Científica)",
        achievements: [
          <>
            Desenvolveu e entregou MVP funcional de chatbot de assistência técnica voltado à agricultura familiar.
          </>,
          <>
            Implementou pipelines de Processamento de Linguagem Natural (NLP) e reconhecimento de voz para interação com usuários.
          </>,
          <>
            Construiu e treinou modelos de Deep Learning em Python utilizando Google AI Studio.
          </>,
        ],
        images: [],
      },
      {
        company: "Todos Empreendimentos LTDA",
        timeframe: "02/2026 — 08/2026",
        role: "Estagiário em Desenvolvimento de Software",
        achievements: [
          <>
            Reduziu em 80% o tempo de resposta em operações críticas por meio da otimização de consultas SQL Server e estratégias de cache.
          </>,
          <>
            Desenvolveu e manteve soluções Full Stack em C#/.NET e Node.js para fluxos de campanhas, com testes unitários em xUnit.
          </>,
          <>
            Contribuiu para a modernização da plataforma desenvolvendo novas APIs em .NET e sustentando sistemas em WebForms (arquitetura 3-Tier/3MS).
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formação acadêmica & Cursos",
    institutions: [
      {
        name: "Instituto Federal de Goiás (IFG)",
        description: <>Bacharelado em Sistemas de Informação • 1º semestre de 2024 – 2º semestre de 2027 (Previsão).</>,
      },
      {
        name: "Workshop em IA – O Novo Programador (2026)",
        description: <>Capacitação voltada a ferramentas, agentes e fluxos de produtividade com Inteligência Artificial no desenvolvimento de software.</>,
      },
      {
        name: "FLISoL (Festival Latino-Americano de Instalação de Software Livre) – IFG (2026)",
        description: <>Participação em palestras e workshops focados em software livre, desenvolvimento comunitário e infraestrutura.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Habilidades técnicas",
    skills: [
      {
        title: "C# & .NET",
        description: (
          <>Desenvolvimento de APIs RESTful robustas, testes com xUnit, arquitetura em camadas e integração com ecossistema Microsoft.</>
        ),
      },
      {
        title: "Java & Quarkus / Spring Boot",
        description: (
          <>Desenvolvimento backend orientado a objetos, arquitetura MVC, testes unitários com JUnit e criação de serviços REST.</>
        ),
      },
      {
        title: "Node.js, React & Next.js",
        description: (
          <>Construção de aplicações web modernas, interfaces reativas com TypeScript/JavaScript, renderização do lado do servidor e integração de APIs.</>
        ),
      },
      {
        title: "Inteligência Artificial & Python",
        description: (
          <>Processamento de Linguagem Natural (NLP), modelos de Deep Learning, reconhecimento de voz e uso do Google AI Studio para aplicações inteligentes.</>
        ),
      },
      {
        title: "Bancos de Dados & Performance",
        description: (
          <>SQL Server e PostgreSQL: modelagem relacional, otimização e tuning de consultas com reduções expressivas de latência e implementação de cache.</>
        ),
      },
      {
        title: "DevOps, Ferramentas & Boas Práticas",
        description: (
          <>Git, GitHub, Azure DevOps, pipelines de CI/CD, Scrum, Clean Code e princípios SOLID.</>
        ),
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Artigos & Aprendizados",
  description: `Textos e reflexões de ${person.name} sobre desenvolvimento e tecnologia`,
};

const work: Work = {
  path: "/work",
  label: "Projetos",
  title: `Projetos – ${person.name}`,
  description: `Projetos práticos e soluções desenvolvidas por ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: `Galeria – ${person.name}`,
  description: `Registros de ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
