import shome from '../assets/projects/shome.jpg';
import tcpudp from '../assets/projects/tcpudp.jpg';
import devops from '../assets/projects/devops.jpg';
import lf from '../assets/projects/lf.jpg';

export interface Project {
    title: string;
    link: string;
    image: string;
    customStyles?: React.CSSProperties;
}

export const projects: Project[] = [
    {
        title: 'Smart Home',
        link: 'https://github.com/maria-parreira/smarthome-switch-dev',
        image: shome,
    },
    {
        title: 'TCP vs UDP',
        link: 'https://github.com/maria-parreira/scomred-switch-dev',
        image: tcpudp,
        customStyles: { width: '100%', height: '100%', objectFit: 'scale-down' },
    },
    {
        title: 'DevOps',
        link: 'https://github.com/maria-parreira/devops-switch-dev',
        image: devops,
    },
    {
        title: 'Lost and Found',
        link: 'https://github.com/maria-parreira/lost-and-found',
        image: lf,
    },
];
