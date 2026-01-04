class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin-top: auto;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        footer {
          background-color: #7c2d12;
          color: white;
          padding: 3rem 1rem 2rem;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-column h3 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          font-family: 'Playfair Display', serif;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-column h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 2px;
          background-color: #fef3c7;
        }
        
        .footer-column ul {
          list-style: none;
        }
        
        .footer-column ul li {
          margin-bottom: 0.75rem;
        }
        
        .footer-column ul li a {
          color: #f3e8d0;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-column ul li a:hover {
          color: white;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: background-color 0.3s;
        }
        
        .social-links a:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        
        .copyright {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.875rem;
          color: #f3e8d0;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-column">
              <h3>Pathfinder</h3>
              <p>Your trusted companion on the journey to faith. Supporting Muslim reverts with knowledge, community, and guidance.</p>
              <div class="social-links">
                <a href="#"><i data-feather="facebook"></i></a>
                <a href="#"><i data-feather="twitter"></i></a>
                <a href="#"><i data-feather="instagram"></i></a>
                <a href="#"><i data-feather="youtube"></i></a>
              </div>
            </div>
            
            <div class="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="knowledge.html">Knowledge Center</a></li>
                <li><a href="community.html">Community Rooms</a></li>
                <li><a href="notices.html">Notices & Sessions</a></li>
                <li><a href="quran.html">Quran Explorer</a></li>
                <li><a href="register.html">Register</a></li>
</ul>
            </div>
            
            <div class="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Quran Study Guides</a></li>
                <li><a href="#">Hadith Collections</a></li>
                <li><a href="#">Scholar Recommendations</a></li>
                <li><a href="#">Du'a Resources</a></li>
                <li><a href="#">Islamic Literature</a></li>
              </ul>
            </div>
            
            <div class="footer-column">
              <h3>Contact Us</h3>
              <ul>
                <li><i data-feather="mail" class="mr-2"></i> support@pathfinder.com</li>
                <li><i data-feather="message-circle" class="mr-2"></i> Live Chat</li>
                <li><i data-feather="clock" class="mr-2"></i> Mon-Fri: 9AM-6PM GMT</li>
              </ul>
            </div>
          </div>
          <div class="copyright">
            <p>&copy; 2026 Pathfinder. All rights reserved. Made with ❤️ for the Ummah.</p>
          </div>
</div>
      </footer>
    `;
    
    // Initialize Feather icons
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/feather-icons';
    script.onload = () => {
      feather.replace();
    };
    this.shadowRoot.appendChild(script);
  }
}

customElements.define('custom-footer', CustomFooter);