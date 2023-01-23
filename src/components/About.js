import imageUrl from "../images/panos_image.jpg";

export const About = () => {
  return (
    <section id="about-me" className="container-about-me mt-5">
      <div className="container py-5">
        <div className="about-container">
          <div className="about-img pb-4 d-flex justify-content-center">
            <img
              src={imageUrl}
              className="my-image img-fluid rounded-5 "
              alt="Panagiotis Ioannidis"
            />
          </div>
          <div className="about-me-info">
            <div className="text-center fs-1"> Panagiotis Ioannidis</div>
            <div className="fs-5 text-center ">
              Associate Frontend Developer
            </div>
            <hr />
            <div className="description p-3 fs-5">
              I am a creative individual seeking opportunities as a Frontend
              Developer. I am passionate about continuous self-improvement,
              gaining knowledge in various sectors, acquiring new skills,
              expanding my horizons, and challenging myself to become better at
              what I do every day.
            </div>
            <div className="skills p-3 fs-5">
              I will finish in February my Frontend development Bootcamp with
              Purple Beard Training. I am confident in working with HTML, CSS,
              Bootstrap, Javascript, and React.
            </div>

            <div className="background p-3 fs-5">
              Besides coding, I have a strong background in healthcare and music
              composition and I am a published author in the sector of personal
              development and romantic relationships. In my free time, I enjoy
              playing the bass guitar, illustrating, writing, yoga, martial
              arts, travelling, and spending quality time with my wife.
            </div>

            <div className="p-3 fs-5">Looking forward to working with you!</div>
          </div>
        </div>
      </div>
    </section>
  );
};
