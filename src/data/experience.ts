import postgraduateIcon from '../assets/projects/it.jpg';

export interface ExperienceItem {
    title: string;
    company: string;
    duration: string;
    description: string;
    icon:string;
  }
  
  export const experiences: ExperienceItem[] = [
    {
      title: 'Software Developer - Game',
      company: 'VertsaPlay',
      duration: 'Jan 2025 - Present',
      description:
        'Currently working in the game development industry. I contribute to create online games from the game logic to the visual side. My responsibilities are developing modular, optimized systems with a focus on performance and user experience. I also contribute to develop internal tools to support the design team and improve workflow. I work primarily with Godot Engine, JavaScript and Python.',
      icon: postgraduateIcon,
    },
    {
      title: 'Full Stack Developer',
      company: 'VeriCasa',
      duration: 'Set 2024 – Jan 2025',
      description:
        'Worked as a fullstack developer at a real estate startup. I contributed to the development of an AI-driven platform designed to analyze real estate documents and automatically generate contracts, reports, and signature sheets related to property transactions.On the frontend, I was responsible for building dynamic web forms used to collect data for report generation, using React, TypeScript, and Tailwind CSS. On the backend, I contributed to the development of an asynchronous processing system in Python, built around RabbitMQ, to automate task handling.',
      icon: postgraduateIcon,
    },
  ];
  