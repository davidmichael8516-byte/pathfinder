class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        header {
          background-color: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }
        
        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        
        .logo-icon {
          color: #7c2d12;
          margin-right: 0.5rem;
        }
        
        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #7c2d12;
          font-family: 'Playfair Display', serif;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
        }
        
        .nav-links li {
          margin-left: 2rem;
        }
        
        .nav-links a {
          text-decoration: none;
          color: #4a140a;
          font-weight: 500;
          transition: color 0.3s;
          display: flex;
          align-items: center;
        }
        
        .nav-links a:hover {
          color: #7c2d12;
        }
        
        .nav-links i {
          margin-right: 0.5rem;
        }
        
        .auth-buttons {
          display: flex;
          align-items: center;
        }
        
        .btn {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }
        
        .btn-login {
          color: #7c2d12;
          margin-right: 1rem;
        }
        
        .btn-register {
          background-color: #7c2d12;
          color: white;
        }
        
        .btn-register:hover {
          background-color: #991b1b;
        }
        
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #7c2d12;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .auth-buttons {
            display: none;
          }
          
          .mobile-menu-button {
            display: block;
          }
          
          .mobile-menu {
            display: none;
            padding: 1rem 0;
            background: white;
            border-top: 1px solid #e5e7eb;
          }
          
          .mobile-menu.active {
            display: block;
          }
          
          .mobile-nav-links {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .mobile-nav-links li {
            margin: 0.5rem 0;
          }
          
          .mobile-auth-buttons {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            width: 100%;
          }
          
          .mobile-auth-buttons a {
            display: block;
            text-align: center;
            margin-bottom: 0.5rem;
          }
        }
      </style>
      <header>
        <div class="container">
          <nav class="navbar">
            <a href="index.html" class="logo">
              <span class="logo-text">Pathfinder</span>
            </a>
            
            <ul class="nav-links">
              <li><a href="index.html"><i data-feather="home"></i> Home</a></li>
              <li><a href="knowledge.html"><i data-feather="book"></i> Knowledge</a></li>
              <li><a href="community.html"><i data-feather="users"></i> Community</a></li>
              <li><a href="notices.html"><i data-feather="bell"></i> Notices</a></li>
              <li><a href="quran.html"><i data-feather="book-open"></i> Quran</a></li>
</ul>
            
            <div class="auth-buttons">
              <a href="login.html" class="btn btn-login">Login</a>
              <a href="register.html" class="btn btn-register">Register</a>
            </div>
            
            <button class="mobile-menu-button" id="mobile-menu-button">
              <i data-feather="menu" class="w-6 h-6"></i>
            </button>
          </nav>
          
          <div class="mobile-menu" id="mobile-menu">
            <ul class="nav-links mobile-nav-links">
              <!-- Mobile navigation links are sufficient, desktop duplicates removed -->
            </ul>
            
            <div class="mobile-auth-buttons">
              <!-- Mobile auth buttons are sufficient, desktop duplicates removed -->
            </div>
          </div>
        </div>
      </header>
`;
    
    // Initialize Feather icons
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/feather-icons';
    script.onload = () => {
      feather.replace();
    };
    this.shadowRoot.appendChild(script);
    
    // Mobile menu toggle
    setTimeout(() => {
      const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
      const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
      
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
          mobileMenu.classList.toggle('active');
          const icon = mobileMenuButton.querySelector('i');
          if (mobileMenu.classList.contains('active')) {
            icon.setAttribute('data-feather', 'x');
          } else {
            icon.setAttribute('data-feather', 'menu');
          }
          feather.replace();
        });
      }
    }, 0);
  }
}

customElements.define('custom-header', CustomHeader);