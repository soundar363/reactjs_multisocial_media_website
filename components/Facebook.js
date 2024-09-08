import React from 'react';
import './Facebook.css';
import dp from './images/dp.jpeg';
import cat from './images/cat.jpg';
import flow from './images/flow.jpeg';
import facep1 from './images/facep1.jpg';
import facep2 from './images/facep2.jpg';
import facep3 from './images/facep3.jpg';
import facep4 from './images/facep4.jpeg';
const Facebook = () => {
  return (
    <div>
      <header>
        <div classname="logo">Facebook</div>
        <div className="search-bar">
            <input type="text" placeholder="Search Facebook" />
        </div>
        <div className="profile-menu">
            <img src={dp} alt="Profile Picture" />
            <span>soundar kmr</span>
        </div>
    </header>

    {/* <!-- Main Content --> */}
    <div class="main-content">
        {/* <!-- Sidebar --> */}
        <aside class="sidebar">
            <ul>
                <li>Home</li>
                <li>Friends</li>
                <li>Watch</li>
                <li>Marketplace</li>
                <li>Groups</li>
            </ul>
        </aside>

        {/* <!-- News Feed --> */}
        <div class="news-feed">
            <div class="post">
                <div class="post-header">
                    <img src={cat} alt="Friend" />
                    <span>karuppusamy</span>
                </div>
                <div class="post-content">
                <img src={facep1} alt="Friend" />
                    <p>This is a sample post on Facebook!</p>
                </div>
                <div class="post-actions">
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
                </div>
            </div>
            {/* <!-- Add more posts here --> */}
            
            <div class="post">
                <div class="post-header">
                    <img src={flow} alt="Friend" />
                    <span>karthikeyan prabu</span>
                </div>
                <div class="post-content">
                <img src={facep3} alt="Friend" />
                    <p>This is a sample post on Facebook!</p>
                </div>
                <div class="post-actions">
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
                </div>
            </div>
            <div class="post">
                <div class="post-header">
                    <img src={facep4} alt="Friend" />
                    <span>Leo dashu</span>
                </div>
                <div class="post-content">
                <img src={facep2} alt="Friend" />
                    <p>This is nature post to live!</p>
                </div>
                <div class="post-actions">
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Footer --> */}
    <footer>
        <p>&copy; 2024 Develop by Facebook</p>
    </footer>
    </div>
  );
};

export default Facebook;