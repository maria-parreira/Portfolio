import postgraduateIcon from '../assets/projects/it.jpg';
import veterinaryIcon from '../assets/projects/vet.jpg';

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string[];
  icon: string;
}

export const educationList: EducationItem[] = [
  {
    degree: 'Postgraduation in Software Development (SWITCH Dev)',
    institution: 'Instituto Superior de Engenharia do Porto',
    duration: 'Sep 2023 - Jun 2024',
    description: [
      'Immersed in the daily workflow of a full-stack software developer using Scrum methodology.',
      'Delivered features in sprint cycles and participated in peer reviews.',
      'Gained experience working under pressure and collaborating with colleagues from diverse backgrounds.',
      'Acquired a strong foundation to face real-world development challenges and tight deadlines.',
      'Built a modular and scalable system for house management. Check it out: [here](https://github.com/maria-parreira/smarthome-switch-dev)'
    ],
    icon: postgraduateIcon,
  },
  {
    degree: 'Master of Science in Veterinary Medicine',
    institution: 'Universidade de Évora',
    duration: 'Sep 2015 - Feb 2022',
    description: [
      'Developed a deep understanding of animal physiology, pathology, and clinical care.',
      'Improved communication skills through collaboration with colleagues and interaction with clients.',
      'Learned the importance of teamwork in diagnosing and treating companion animals.'
    ],
    icon: veterinaryIcon,
  },
];
