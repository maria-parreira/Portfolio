import postgraduateIcon from '../assets/projects/it.jpg';
import veterinaryIcon from '../assets/projects/vet.jpg';

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  icon: string;
}

export const educationList: EducationItem[] = [
  {
    degree: 'Postgraduation in Software Development (SWITCH Dev)',
    institution: 'Instituto Superior de Engenharia do Porto',
    duration: '2023-2024',
    description:
      'During my time at ISEP, I immersed myself in the daily workflow of a full-stack software developer. I worked extensively with the Scrum methodology, developing and delivering features in sprints. This experience included the dynamic of peer reviews, where I learned the importance of giving and receiving constructive feedback. I gained valuable skills in managing pressure and collaborating with colleagues of diverse personalities. The course was both challenging and rewarding, equipping me with the skills and mindset necessary to face real-world software development challenges and tight deadlines.',
    icon: postgraduateIcon,
  },
  {
    degree: 'Master of Science in Veterinary Medicine',
    institution: 'Universidade de Évora',
    duration: '2015-2022',
    description:
      'During my Master’s in Veterinary Medicine, I gained a better understanding of how animal bodies work, which deepened my admiration for them. I learned to communicate effectively with different colleagues and customers, and the importance of teamwork in achieving the best outcomes in diagnosing and treating companion animals.',
    icon: veterinaryIcon,
  },
];
