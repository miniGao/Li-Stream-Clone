import React from 'react';
import './Profile.css';
import RecentItem from './RecentItem';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-top-left">
                <img src="https://minigao.files.wordpress.com/2021/02/coder-icon.png" />
                <div className="profile-top-left-details">
                    <h1>miniGao</h1>
                    <h3>100k followers</h3>
                </div>
            </div>
            <div className="profile-top-right">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="profile-menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i className="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>
            <div className="profile-recent">
                <h2>Recent broadcasts</h2>
                <div className="profile-recent-items">
                    <RecentItem 
                        url = {'https://www.youtube.com/embed/De4jPjoHatA'}
                        title = {'Learning React'}
                    />
                    <RecentItem 
                        url = {'https://www.youtube.com/embed/De4jPjoHatA'}
                        title = {'Learning React'}
                    />
                    <RecentItem 
                        url = {'https://www.youtube.com/embed/De4jPjoHatA'}
                        title = {'Learning React'}
                    />
                </div>
            </div>
            <div className="profile-categories">
                <h2>User's recently streamed Categories</h2>
                <img src="https://images.unsplash.com/photo-1613109040774-dc07b15f0ac0" />
                <img src="https://images.unsplash.com/photo-1613109040774-dc07b15f0ac0" />
                <img src="https://images.unsplash.com/photo-1613109040774-dc07b15f0ac0" />
            </div>
        </div>
    )
}

export default Profile