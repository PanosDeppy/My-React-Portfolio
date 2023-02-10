import { MyProjectsCard } from "./MyProjectsCard";

import pokemon from "../images/2-pokemon.png";
import counter from "../images/counter.jpg";
import wordcounter from "../images/wordcounter.jpg";

const reactProjects = [
  {
    image: {
      src: pokemon,
      alt: "poketeams",
    },
    title: "MyPokeTeams",
    description:
      "Pokemon game using PokeAPI where you can create multiple Pokemon teams",
    gitUrl: "https://github.com/PanosDeppy/poke-teams-react",
    globalUrl: "https://poke-teams-react-panosdeppy.vercel.app/",
  },

  {
    image: {
      src: counter,
      alt: "number 10",
    },
    title: "Counter App",
    description: "A simple counter app made with React",
    gitUrl: "https://github.com/PanosDeppy/React-CounterApp",
    globalUrl: "https://panosdeppy.github.io/React-CounterApp/",
  },

  {
    image: {
      src: wordcounter,
      alt: "words",
    },
    title: "Word-counter App",
    description: "A simple word counter app made with React",
    gitUrl: "https://github.com/PanosDeppy/word-counter-app",
    globalUrl: "https://panosdeppy.github.io/word-counter-app/",
  },
];

export const MyProjects = () => {
  return (
    <section
      id="my-projects"
      className="my-projects pt-2 d-flex justify-content-center"
    >
      <div>
        <div className="text-center fs-2 p-3">My Projects</div>
        <div className="map-projects">
          {reactProjects.map((reactProject) => (
            <MyProjectsCard {...reactProject} key={reactProject.title} />
          ))}
        </div>
      </div>
    </section>
  );
};
