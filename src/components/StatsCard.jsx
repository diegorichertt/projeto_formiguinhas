import React from 'react';

const StatsCard = ({ icon, title, count }) => {
    return (
        <div className="stat-card">
            <i className={icon}></i>
            <h3>{count}</h3>
            <p>{title}</p>
        </div>
    );
};

export default StatsCard;
