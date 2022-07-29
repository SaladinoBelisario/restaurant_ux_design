import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import AwardCard from "../../components/AwardCard/AwardCard";
import './Laurels.css';

const Laurels = () => (
    <div className="app__bg app__wrapper section__padding" id="awards">
        <div className="app__wrapper_info">
            <SubHeading title="Awards & recognition" />
            <h1 className="headtext__cormorant">Our Laurels</h1>

            <div className="app__laurels_awards">
                {data.awards.map((award) => <AwardCard imgUrl={award.imgUrl} title={award.title} subtitle={award.subtitle} />)}
            </div>
        </div>

        <div className="app__wrapper_img">
            <img src={images.laurels} alt="laurels_img" />
        </div>
    </div>
);

export default Laurels;
