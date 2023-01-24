export const Socials = () => {
  return (
    <div id="contact-me" className="container-socials">
      <div className="designed fs-2 pt-3 d-flex justify-content-center">
        Contact me
      </div>
      <br></br>
      <div className="d-flex d-flex justify-content-evenly fs-4">
        <a
          href="https://www.linkedin.com/in/panagiotis-ioannidis-panos/"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://github.com/PanosDeppy"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
        >
          <i className="git-hub-icon fa-brands fa-github"></i>
        </a>

        <a
          href="https://mail.google.com/mail/"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>

        <a
          href="tel:+447386109901"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
        >
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
      <div className="designed fs-5 pt-4 pb-3 d-flex justify-content-center">
        Designed and developed by Panagiotis Ioannidis
      </div>
    </div>
  );
};
