// main card component

export const MyProjectsCard = ({ image, title, description, gitUrl }) => {
  return (
    <div className="my-projects-card">
      <img src={image.src} className="card-img-top" alt={image.alt} />
      <div className="card-body p-3">
        <div className="card-title fs-5 fw-semibold p-3">{title}</div>
        <div className="card-description">{description}</div>
        <a href={gitUrl} className="btn">
          <i className="git-hub-icon fa-brands fa-github pt-3"></i>
        </a>
      </div>
    </div>
  );
};
