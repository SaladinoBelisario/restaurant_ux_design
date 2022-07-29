import React from 'react';
import './AwardCard.css';

interface AwardCardProperties {
    imgUrl: string
    title: string
    subtitle: string
}

const AwardCard = ({ imgUrl, title, subtitle }: AwardCardProperties) => (
    <div className="app__laurels_awards-card">
        <img src={imgUrl} alt="awards" />
        <div className="app__laurels_awards-card_content">
            <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
            <p className="p__opensans">{subtitle}</p>
        </div>
    </div>
);

export default AwardCard;