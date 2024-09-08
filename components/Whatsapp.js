import React from 'react';
// import './LoginRegister.css';
import './Whatsapp.css'
import dp from './images/dp.jpeg';
import post1 from './images/post1.jpeg';
import post2 from './images/post2.jpeg';
import cat from './images/cat.jpg';
import flow from './images/flow.jpeg';

const Whatsapp = () => {
  return (
    <div>
      <div class="container">
        {/* <!-- Sidebar --> */}
        <aside class="sidebar">
            <header class="sidebar-header">
                <img src={dp} alt="dp" class="profile-img" />
                <input type="text" placeholder="Search" class="search-input" />
            </header>
            <div class="chat-list">
              <center>
            <h3>Chat list</h3>
            </center>
                <div class="chat-item">
                    <img src={post2} class="chat-avatar" />
                    <div class="chat-info">
                        <h3>Sathish</h3>
                        <p>Last message preview...</p>
                    </div>
                    
                </div>
                {/* <!-- More chat items --> */}
                <div class="chat-item">
                    <img src={cat} class="chat-avatar" />
                    <div class="chat-info">
                        <h3>partha</h3>
                      
                    </div>
                    
                </div>
                <div class="chat-item">
                    <img src={flow} class="chat-avatar" />
                    <div class="chat-info">
                        <h3>kumar</h3>
                      
                    </div>
                    
                </div>
            </div>
        </aside>

        {/* <!-- Chat Window --> */}
        <main class="chat-window">
            <header class="chat-header">
                <img src={post1} alt="Friend" class="chat-avatar" />
                <div class="chat-info">
                    <h3>Karthi</h3>
                    <p>Online</p>
                </div>
            </header>
            <div class="chat-messages">
                <div class="message received">
                    <p>Hello! How are you?</p>
                </div>
                <div class="message sent">
                    <p>I'm good, thanks! You?</p>
                </div>
                {/* <!-- More messages --> */}
            </div>
            <footer class="chat-footer">
                <input type="text" placeholder="Type a message" class="message-input" />
                <button class="send-button">Send</button>
            </footer>
        </main>
    </div>
    </div>
  );
};

export default Whatsapp;