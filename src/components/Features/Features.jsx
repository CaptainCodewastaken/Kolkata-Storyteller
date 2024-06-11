import React from 'react';
import './Features.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophoneAlt,
  faMapMarkerAlt,
  faHeart,
  faUserGroup, // Using faUserGroup instead of faNetworkUnwired (free)
} from '@fortawesome/free-solid-svg-icons'; // Icons for features

const Features = () => {
  return (
    <div className="features-container bg-[size:20px_20px] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]">
      <hr className="no-gap-hr"/>
      <h2 className='heading'>Explore Kolkata Through Local Voices</h2>
      <p className='heading-explain'>
        Kolkata comes alive through the stories of its residents. Dive into the
        city's vibrant tapestry of experiences, hidden gems, and authentic
        connections.
      </p>
      <div className="features-grid">
        <div className="feature-item">
          <FontAwesomeIcon icon={faMicrophoneAlt} size="2x" className="icon" />
          <h3 className='heading'>Unfiltered Narratives</h3>
          <p>
            Listen to captivating stories directly from Kolkata's residents,
            told in their own words. No filters, just pure, unfiltered
            experiences.
          </p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="icon" />
          <h3 className='heading'>Discover Hidden Gems</h3>
          <p>
            Go beyond the tourist traps and uncover local favorites. Find unique
            restaurants, shops, and hidden spots recommended by the people who
            know Kolkata best.
          </p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faHeart} size="2x" className="icon" />
          <h3 className='heading'>Connect with the City</h3>
          <p>
            Feel the pulse of Kolkata by engaging with its residents. Share your
            own stories, ask questions, and build meaningful connections with
            the local community.
          </p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faUserGroup} size="2x" className="icon" />
          <h3 className='heading'>Become a Local Insider</h3>
          <p>
            Gain access to a network of passionate Kolkata residents. Get
            insider tips, recommendations, and a deeper understanding of the
            city's culture and traditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
