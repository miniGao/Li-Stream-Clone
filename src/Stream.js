import React from 'react';
import './Stream.css';

const Stream = () => {
    return (
        <div className="stream">
            <div className="stream-container">
                <div className="stream-status">
                    <div className="stream-status-container">
                        <div className="stream-status-container-top">
                            <div className="stream-status-indicator">Offline</div>
                            <h2>Check out the below streams from the "streamer"</h2>
                        </div>
                        <div className="stream-status-info">
                            <i className="fas fa-bell"></i>
                            <p>You will be notified when "streamer" is live</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stream-video-embed">
                <iframe 
                    width="500"
                    height="295"
                    src="https://www.youtube.com/embed/De4jPjoHatA" 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Stream