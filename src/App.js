import './App.css';
import { Hero } from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import ParticlesComponent from './components/Particles/Particles';
import Timeline from './components/Timeline/Timeline';
import Skills from './components/Skills/Skills';

function App() {
  const events = [
    {heading:"Burhani National English School",
      subHeading: "I completed my 10th grade education at Burhani National English School. During my time there, I developed a strong academic foundation and a keen interest in science and technology. The school provided a well-rounded education, emphasizing not only academic excellence but also the development of critical thinking and problem-solving skills. My experience at Burhani National English School was instrumental in shaping my future educational and career aspirations.",
      direction: "right",
      year:2020,
    },
    {
      heading:"MGM's Polytechnic",
      subHeading:"After completing my 10th grade, I pursued a diploma in Computer Science from MGM Polytechnic. I graduated with distinction, achieving a commendable score of 83%. The rigorous curriculum at MGM Polytechnic covered various aspects of computer science, including programming, data structures, algorithms, and computer hardware. The practical, hands-on approach to learning allowed me to gain a deep understanding of theoretical concepts and their real-world applications. This diploma program not only enhanced my technical skills but also reinforced my passion for the field of computer science.",
      direction: "left",
      year:2023,
    },
    {
      heading:"Jawaharlal Nehru Engineering College",
      subHeading:"I am currently pursuing my degree in Computer Science Engineering from Jawaharlal Nehru Engineering College. This program is designed to provide a comprehensive education in computer science, covering advanced topics such as artificial intelligence, machine learning, cybersecurity, and software development. My studies at Jawaharlal Nehru Engineering College have been both challenging and rewarding, offering numerous opportunities for research, innovation, and professional growth. I am actively involved in various projects and extracurricular activities that complement my academic learning and prepare me for a successful career in the tech industry.",
      direction:"right",
      year:2024,
    }
  ]
  return (
    <>
    <ParticlesComponent id="particles"/>
    <Navbar/>
    <Hero/>
    <Timeline events={events}/>
    <Skills/>
    </>
  );
}

export default App;