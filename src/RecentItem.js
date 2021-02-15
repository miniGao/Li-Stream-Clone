import React from 'react';
import './RecentItem.css';

const RecentItem = ({url, title}) => {
    return (
        <div className="recentitem">
            <iframe 
                width="400"
                height="235"
                src={url} 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen></iframe>
            
            <div className="item-details">
                <img src="https://images.unsplash.com/photo-1596797882870-8c33deeac224" />
                <div className="item-details-text">
                    <h4>{title}</h4>
                    <p>miniGao</p>
                    <p>Learning React</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem