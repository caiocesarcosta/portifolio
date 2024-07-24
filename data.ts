import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend App Android",
    about:
      "Desenvolvendo app de controle corporal (Bioimpedância) em <b> Kotlin</b>. Utilizando  arquitetura escalável <b>MVVMi</b> ",
  },
  {
    Icon: FaServer,
    title: "IA",
    about:
      "Utilizando as IA's para melhor performance e customização do tempo de desenvolvimento ",
  },
  {
    Icon: AiOutlineApi,
    title: "API",
    about:
      "Utilizando  Api Rest <b>Retrofit</b>  & <b>Node API</b> ",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Kotlin",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "C++",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "C#",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Cobol",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "MVVM",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MVP",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Retrofit 2",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Coroutines",
    level: "70",
  },
  // {
  //   Icon: BsCircleFill,
  //   name: "React",
  //   level: "70",
  // },
  // {
  //   Icon: BsCircleFill,
  //   name: "Django",
  //   level: "80",
  // },
  // {
  //   Icon: BsCircleFill,
  //   name: "Bootstrap",
  //   level: "80",
  // },
];


export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "VS Code",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Android Studio",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Linux Distro Ubunto",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MacOs",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "GitHub",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "50",
  },
  
];

export const projects: IProject[] = [
  { 
    name: "SuperApp Itau",
    description:
      "Empresa bancário, onde colaborei no app SuperApp e Cartão Branco hojé conhecido como Itaú One.  Estive em várias squads como: Cartões, Aumento de Limite, Analytics, Produtos e Empréstimos, programa de pontos Iupp",
    image_path: "/images/itau.png",
    deployed_url: "https://www.itau.com.br/canais-itau/aplicativo-itau",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["java", "kotlin"],
    key_techs: ["Java", "Kotlin", "Retrofit 2", "MVVM|MVP","Coroutines","LiveData","Observer","Koin","GitHub","Junit","Mokito", "Firebase",],
  },
  {
    name: "Flex Automation",
    description:
      "Empresa automação residencial. Onde contrbuí no desenvolvimento de um app de configuração e controle da valvula smart e Também no desenvolvimento do aplicativo Desktop o qual fazia o gerenciamento e configuração dos dispositivos smart (sensores, painéis touch)",
      image_path: "/images/flex-automation.png",
      deployed_url: "https://www.flexautomation.com.br/produtos",
      github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
      category: ["java", "kotlin"],
      key_techs: ["Java", "Kotlin", "MVP", "C#", ".NET","Dagger 2", "MongoDb", "GitHub", "BlueToth","WiFi" ],
  },
  {
    name: "Audit Business",
    description:
      "Empresa que atua no mercado de desenvolvimento de sistema para auditoria de lojas. Onde contribui com o desenvolvimento do app ControlQuest( Ferramenta de questionários online para saber as opiniões dos consulmidores que utilizam o Mall e o consumo nas loja)",
    image_path: "/images/audit-business.jpg",
    deployed_url: "https://www.auditbs.com.br/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["java"],
    key_techs: ["Java","SQLITE", "MVC" ],
  },
  {
    name: "Itau Baixa Plataforma - COBOL",
    description:
    "Empresa bancária. onde colaboreis na codificação em COBOl ",
    image_path: "/images/cobol.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["cobol"],
    key_techs: ["COBOL","DB2"],
  }
];
