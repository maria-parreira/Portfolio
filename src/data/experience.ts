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
        'Worked on a real-world application using React, Python, Node.js, and PostgreSQL. Participated in agile sprints, contributed to code reviews, and collaborated closely with stakeholders',
      icon: postgraduateIcon,
    },
  ];
  