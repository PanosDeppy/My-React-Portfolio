import PanagiotisIoannidisCV from "../cv/PanagiotisIoannidisCV.pdf";

export const Navbar = () => {
  return (
    <div className="container-navbar fixed-top mb-5">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-end">
          <a className="navbar-brand p-2 px-3" href="#about-me">
            Welcome to my React Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav px-3">
              <a
                className="nav-link d-flex justify-content-end"
                aria-current="page"
                href="#about-me"
              >
                About Me
              </a>
              <a
                className="nav-link d-flex justify-content-end"
                href="#my-projects"
              >
                My Projects
              </a>
              <a
                className="nav-link d-flex justify-content-end"
                href="#contact-me"
              >
                Contact Me
              </a>

              <a
                className="nav-link d-flex justify-content-end"
                href={PanagiotisIoannidisCV}
                rel="noreferrer"
                target="_blank"
              >
                CV
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
