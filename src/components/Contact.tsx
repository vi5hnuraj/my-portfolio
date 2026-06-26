import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const contactTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });

      // Animate header
      contactTimeline.fromTo(
        ".contact-header",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Animate contact cards
      contactTimeline.fromTo(
        ".contact-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.4"
      );

      // Animate footer
      contactTimeline.fromTo(
        ".contact-footer",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      );
    });

    // Clean up
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h3 className="section-title">Let's Connect</h3>
          <p className="section-subtitle">Have a project in mind or just want to say hi? Feel free to reach out!</p>
        </div>

        <div className="contact-grid">
          <a href={`mailto:${config.contact.email}`} className="contact-card" data-cursor="disable">
            <div className="contact-icon-wrapper"><FaEnvelope /></div>
            <div className="contact-info">
              <h4>Email</h4>
              <p>{config.contact.email}</p>
            </div>
            <MdArrowOutward className="contact-arrow" />
          </a>

          <a href={config.contact.github} target="_blank" rel="noopener noreferrer" className="contact-card" data-cursor="disable">
            <div className="contact-icon-wrapper"><FaGithub /></div>
            <div className="contact-info">
              <h4>GitHub</h4>
              <p>@vi5hnuraj</p>
            </div>
            <MdArrowOutward className="contact-arrow" />
          </a>

          <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card" data-cursor="disable">
            <div className="contact-icon-wrapper"><FaLinkedin /></div>
            <div className="contact-info">
              <h4>LinkedIn</h4>
              <p>Let's connect</p>
            </div>
            <MdArrowOutward className="contact-arrow" />
          </a>
        </div>

        <div className="contact-footer">
          <h2>
            Designed and Developed <br /> by <span>{config.developer.fullName}</span>
          </h2>
          <h5>
            <MdCopyright /> {new Date().getFullYear()}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
