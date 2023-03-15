import imageUrl from "../images/panos-i.jpg";

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
            <div className="name text-center fs-1"> Panagiotis Ioannidis</div>
            <div className="profession fs-4 text-center">
              Frontend Developer | Illustrator | Musician | Author | Couple
              Coach
            </div>

            <hr className="hr" />

            <div className="text-background rounded-4">
              <div className="description p-3 fs-5">
                Ambitious Associate Frontend Developer with hands-on experience
                in HTML, CSS, GitHub, JavaScript, and React. I am passionate
                about creating visually appealing and user-friendly web
                applications. I am always seeking new opportunities to expand my
                knowledge and skill set in various fields and embrace challenges
                to grow. I believe that my diverse background, combined with my
                strong front-end development skills, make me an asset to any
                team.
              </div>

              <div className="skills p-3 fs-5">
                In addition to my technical skills, I have a diverse background
                in healthcare, teaching, coaching, and music composition. I am a
                self-starter with a constant drive to improve myself both
                personally and professionally.
              </div>

              <div className="background p-3 fs-5">
                I am also a published author in the sector of personal
                development and romantic relationships with extended studies in
                life, relationship and couple coaching as well as many other
                personal development sciences.
              </div>

              <div className="background p-3 fs-5">
                In my free time, I enjoy playing the bass guitar, illustration,
                writing, yoga, martial arts, travelling, and spending quality
                time with my wife.
              </div>

              <div className="p-3 fs-5">
                I am looking forward to working with you!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
