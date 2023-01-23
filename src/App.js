import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { MyProjects } from "./components/MyProjects";
import { Socials } from "./components/Socials";

/* Create our main function-based component and inside this component we will build our app.
 */

export const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <MyProjects />
      <Socials />
    </div>
  );
};
