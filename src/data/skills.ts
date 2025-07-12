// Icons (substitui estes caminhos se tiveres os ícones certos!)
import javaIcon from "../assets/projects/javaIcon.png";
import javascriptIcon from "../assets/projects/js.png";
import reactIcon from "../assets/projects/react.png";
import tw from "../assets/projects/tw.png";
import jk from "../assets/projects/jk.png";
import kn from "../assets/projects/kn.png";
import sboot from "../assets/projects/sboot.png";
import docker from "../assets/projects/docker.png";
import godot from "../assets/projects/godot.png";
import sql from "../assets/projects/sql.png";

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: javaIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "TypeScript", icon: javascriptIcon }, // Ideal: tsIcon
      { name: "Python", icon: javascriptIcon },      // Ideal: pythonIcon
      { name: "GDScript", icon: godot }
    ],
  },
  {
    category: "Web Technologies",
    items: [
      { name: "React", icon: reactIcon },
      { name: "Tailwind CSS", icon: tw },
      { name: "HTML", icon: sboot },              // Ideal: htmlIcon
      { name: "WebSocket", icon: sboot }          // Ideal: websocketIcon
    ],
  },
  {
    category: "Operating Systems & Tools",
    items: [
      { name: "Git", icon: kn },                  // Ideal: gitIcon
      { name: "Agile Scrum", icon: kn },          // Ideal: scrumIcon
      { name: "Gitea", icon: docker },            // Ideal: giteaIcon
      { name: "GitHub", icon: jk },               // Ideal: githubIcon
      { name: "Jenkins", icon: jk },
      { name: "Godot Engine 3.6", icon: godot }
    ],
  },
  {
    category: "Documentation & Design",
    items: [
      { name: "UML", icon: godot },
      { name: "Confluence", icon: godot },
      { name: "Figma", icon: godot }              // Ideal: figmaIcon
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: sql },               // Ideal: mysqlIcon
      { name: "MongoDB", icon: sql }              // Ideal: mongodbIcon
    ],
  },
];
