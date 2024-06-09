import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='page'>
    <div className="about-container">
      <h1>The Kolkata Storyteller</h1>
      <p>
        Weaving tales of the everyday, we bring Kolkata's vibrant spirit to life. From bustling markets to serene lanes, we capture the stories that make this city unique.
      </p>
      <blockquote>
        "Stories have the power to transport us. They allow us to experience the world through different eyes." - Robert McKee
      </blockquote>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Kolkata Storyteller, we believe in the power of storytelling to connect hearts and cultures. We aim to illuminate the rich tapestry of Kolkata's heritage, as told by its very own residents.
        </p>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          We envision a platform where everyone can share their Kolkata story. A space where the past meets the present, and where future narratives are shaped by the voices of today. We strive to be the leading destination for authentic Kolkata stories.
        </p>
      </section>

      <section className="team">
        <h2>Meet the Storytellers</h2>
        {/* Removed the team-photos div and image elements */}
        <p>
          Our team comprises passionate storytellers, photographers, and writers, driven to uncover and share the hidden gems of Kolkata. We're a diverse group united by our love for this remarkable city and its people.
        </p>
      </section>
    </div>
    </div>
  );
};

export default About;
