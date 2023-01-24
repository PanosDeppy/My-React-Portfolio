// main card component

export const MyProjectsCard = ({
  image,
  title,
  description,
  gitUrl,
  globalUrl,
}) => {
  return (
    <div className="my-projects-card">
      <img
        src={image.src}
        className="card-img-top rounded-top"
        alt={image.alt}
      />
      <div className="card-body p-3 rounded-bottom">
        <div className="card-title fs-5 fw-semibold p-2">{title}</div>
        <div className="card-description">{description}</div>
        <a href={gitUrl} className="contact-icon">
          <i className="git-hub-icon fa-brands fa-github pt-2"></i>
        </a>
        <a href={globalUrl} className="contact-icon">
          <i className="git-hub-icon fa-solid fa-globe pt-2"></i>
        </a>
      </div>
    </div>
  );
};
