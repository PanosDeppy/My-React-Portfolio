export const Socials = () => {
  return (
    <div id="contact-me" className="container-socials">
      <div className="designed fs-2 pt-3 d-flex justify-content-center">
        Contact me
      </div>

      <hr className="hr" />

      <br></br>
      <div className="d-flex d-flex justify-content-center fs-4">
        <a
          href="https://www.linkedin.com/in/panagiotis-ioannidis-panos/"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
        >
          <i className="fa-brands fa-linkedin px-4"></i>
        </a>

        <a
          href="https://github.com/PanosDeppy"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
        >
          <i className="git-hub-icon fa-brands fa-github px-4"></i>
        </a>
      </div>
      <div className="designed fs-5 pt-4 pb-3 d-flex justify-content-center">
        Designed and developed by Panagiotis Ioannidis
      </div>
    </div>
  );
};
