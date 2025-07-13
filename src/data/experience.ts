import gameIcon from '../assets/projects/game.png';
import realstateIcon from '../assets/projects/realstate.png';

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
  icon: string;
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Software Developer - Game',
    company: 'VertsaPlay',
    duration: 'Jan 2025 - Present',
    description: [
      'Contribute to the development of online games, from game logic to visual implementation.',
      'Build modular and optimized systems with a strong focus on performance and user experience.',
      'Develop internal tools to support the team and streamline workflow.',
    ],
    icon: gameIcon,
  },
  {
    title: 'Full Stack Developer',
    company: 'VeriCasa',
    duration: 'Sep 2024 – Jan 2025',
    description: [
      'Worked at a real estate startup focused on AI-powered automation for property transactions.',
      'Built dynamic web forms to collect data for report generation.',
      'Developed asynchronous backend systems for task processing.',
      'Contributed to features that automatically generate contracts, reports, and signature documents from real estate data.'
    ],
    icon: realstateIcon,
  }
];
