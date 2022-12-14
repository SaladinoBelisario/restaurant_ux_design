import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
            <img src={images.G} alt="G_overlay" />
        </div>

        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About Us</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img" />
                <p className="p__opensans"> Our restaurant started with the idea of giving people the experience of great food, made from simple ingredients. From all of the housemade sauces and dressings to the daily fresh-delivered fish and meat.</p>
                <button type="button" className="custom__button">Know More</button>
            </div>

            <div className="app__aboutus-content_knife flex__center">
                <img src={images.knife} alt="about_knife" />
            </div>

            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Our History</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img" />
                <p className="p__opensans">Kevin Luo wanted to create a food institution, he was inspired by the 57-year-old
                                            family recipes and created his own instant classic.</p>
                <button type="button" className="custom__button">Know More</button>
            </div>
        </div>
    </div>
);

export default AboutUs;
