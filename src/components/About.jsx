import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section class="bg-white py-20" id="about">
      <div class="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I'm Chizoba Eucharia Nweke, a dynamic front-end web developer
            passionate about crafting seamless user experiences. Equipped with
            expertise in HTML, CSS, and JavaScript, I specialize in bringing
            designs to life and optimizing websites for responsiveness.
            Furhermore, I excel in creating visually appealing interfaces,
            ensuring a delightful user journey. With a keen eye for design and a
            commitment to staying abreast of industry trends, I thrive in
            transforming concepts into engaging, user-friendly web applications
          </p>
        </article>
      </div>
    </section>
    // <>heuuuu</>
  );
};
export default About;
