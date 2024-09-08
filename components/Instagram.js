// src/components/About.js
import React from 'react';
import './Instagram.css';
import hm from './images/hm.png';
import msg from './images/msg.png';
import noti from './images/noti.png';
import msgicon from './images/msgicon.webp';
import profile from './images/profile.jpeg';
import dp from './images/dp.jpeg';
import post from './images/post.webp';
import li from './images/li.png';
import com from './images/com.png';
import share from './images/share.png';
import post1 from './images/post1.jpeg';
import post2 from './images/post2.jpeg';
import reels from './images/reels.png';
import insta from './images/insta.jpg';
const Instagram = () => {
  return (
        <div>
      <header>
        <div className='navbar'>
            <div className='logo'>Instagram</div>
            <img src={insta} className='insta' />
            <input type="text" class="search-bar" placeholder="Search" />
            <div className="nav-icons">
                <a href="#"><img src={hm} className='hm' /></a>
                <a href="#"><img src={msg} className='msg'/></a>
                <a href="#"><img src={reels} className='pro1' /></a>
                <a href="#"><img src={msgicon} className='msgicon' /></a>
                <a href="#"><img src={noti} className='noti' /></a>
                <a href="#"><img src={profile} className='pro' /></a>
            </div>
        </div>
    </header>

    <main>
        {/* <section class="stories">
            <div class="story">Story 1</div>
            <div class="story">Story 2</div>
            <div class="story">Story 3</div>
            <div class="story">Story 4</div>
            <div class="story">Story 5</div>
        </section> */}

        <section className="posts">
            <div className="post">
                <div className="post-header">
                    <img src={dp} alt="Profile Picture" />
                    <span>@sandy_soundar_</span>
                </div>
                <img src={post} className='po' />
                <div className="post-footer">
                    <div className="post-icons">
                        <img src={li} alt="Like" />
                        <img src={com} alt="Comment" />
                        <img src={share} alt="Share" />
                    </div>
                    <div className="post-caption">
                        <span><strong>sandy_soundar_</strong>#instagramlogo<br />#trending.</span>
                    </div>
                </div>
            </div>
            </section>
    </main>
    <main>
        {/* <section class="stories">
            <div class="story">Story 1</div>
            <div class="story">Story 2</div>
            <div class="story">Story 3</div>
            <div class="story">Story 4</div>
            <div class="story">Story 5</div>
        </section> */}

        <section className="posts">
            <div className="post">
                <div class="post-header">
                    <img src={dp} alt="Profile Picture" />
                    <span>@sandy_soundar_</span>
                </div>
                <img src={post1} className='po' />
                <div className="post-footer">
                    <div class="post-icons">
                        <img src={li} alt="Like" />
                        <img src={com} alt="Comment" />
                        <img src={share} alt="Share" />
                    </div>
                    <div className="post-caption">
                        <span><strong>sandy_soundar_</strong>#natureview<br />#trending.</span>
                    </div>
                </div>
            </div>
            </section>
    </main>
    <main>
        {/* <section class="stories">
            <div class="story">Story 1</div>
            <div class="story">Story 2</div>
            <div class="story">Story 3</div>
            <div class="story">Story 4</div>
            <div class="story">Story 5</div>
        </section> */}

        <section className="posts">
            <div className="post">
                <div className="post-header">
                    <img src={dp} alt="Profile Picture" />
                    <span>@sandy_soundar_</span>
                </div>
                <img src={post2} className='po' />
                <div className="post-footer">
                    <div className="post-icons">
                        <img src={li} alt="Like" />
                        <img src={com}alt="Comment" />
                        <img src={share} alt="Share" />
                    </div>
                    <div className="post-caption">
                        <span><strong>sandy_soundar_</strong>#sunview<br />#trending.</span>
                    </div>
                </div>
            </div>
            </section>
    </main>
</div>


  
  );
};

export default Instagram;