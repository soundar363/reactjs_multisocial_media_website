import React from 'react';
import './About.css';
import insta from './images/insta.jpg';
import facebook from './images/facebook.jpg';
import whatsapp from './images/whatsapp.webp';
const About = () => {
  return (
    <div class="container">
        {/* <!-- Instagram Section --> */}
        <section class="platform instagram">
            <img src={insta} alt="Instagram Logo" class="platform-logo" />
            <h2>About Instagram</h2>
            <p>
                Instagram is a photo and video sharing social networking service owned by Facebook. It was created by Kevin Systrom and Mike Krieger and launched in October 2010 on iOS.
            </p>
        </section>

        {/* <!-- Facebook Section --> */}
        <section class="platform facebook">
            <img src={facebook} alt="Facebook Logo" class="platform-logo" />
            <h2>About Facebook</h2>
            <p>
                Facebook is an American online social media and social networking service owned by Meta Platforms. It was founded by Mark Zuckerberg, along with fellow Harvard College students and roommates.
            </p>
        </section>

        {/* <!-- WhatsApp Section --> */}
        <section class="platform whatsapp">
            <img src={whatsapp} alt="WhatsApp Logo" class="platform-logo" />
            <h2>About WhatsApp</h2>
            <p>
                WhatsApp is a freeware, cross-platform messaging and Voice over IP (VoIP) service owned by Facebook, Inc. It allows users to send text messages and voice messages, make voice and video calls, and share images, documents, and other media.
            </p>
        </section>
    </div>
  );
};

export default About;