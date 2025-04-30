const MicroLearnLandingPage = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  // Animation on scroll effect
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.6 });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  }




  return (
    <div className="landing-page">

      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <div className="logo">
            <h1>World Cyber Defense</h1>
          </div>
          <div className="nav-links">
            <a href="#features">Why?</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#Join-Us">Join us</a>
            <a href="/ReportNow" className="btn-primary">
              Report a Threat
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="hidden">Security.</h1>
          <h1 className="hidden">For Everyone.</h1>
          <p className="hidden">Report an online threat or attack, and we'll help nuetralize the threat or attack as much as possible.</p>
          <div className="hero-cta hidden">
            <a href="/ReportNow" className="btn-primary">
              Report a Threat
            </a>
            <a href="#how-it-works" className="btn-secondary">Learn More</a>
          </div>
          <div className="fade-overlay fade-bottom"></div>
        </div>
      </header>

      {/* Features Section - Bento Box Layout */}
      <section id="features" className="features">
        <h2 className="section-title hidden">Why were we created?</h2>

        <div className="bento-grid">
          <div className="bento-box large hidden">
            <div className="icon">⚔️</div>
            <h3>Cyber Threat Surge (2024)</h3>
            <p>75% rise in weekly attacks globally (Q3 2024).

              30% year-over-year increase in corporate attacks.

              $16.6B in U.S. cybercrime losses (+33%).

              Ransomware payments up 500%, averaging $2M.

            </p>
          </div>

          <div className="bento-box hidden">
            <div className="icon">🌐</div>
            <h3>Estimated Doxxing Victims in the U.S. (2000–2025)</h3>
            <p>United States: By 2025, it's projected that 28% of Americans—approximately 58 million people—will have experienced doxxing. ​</p>
          </div>

          <div className="bento-box hidden">
            <div className="icon">📉</div>
            <h3>Impact on Small and Medium-Sized Enterprises</h3>
            <p>60% of SMEs that experience a cyberattack go out of business within six months. 25% of organizations hit by a ransomware attack were forced to close.</p>
          </div>

          <div className="bento-box large hidden">
            <div className="icon">🛡️</div>
            <h3>Cost of Cybersecurity Failure</h3>
            <p>Global cybercrime damages to hit $10.5 trillion annually by 2025.

              Average cost of a data breach: $4.45 million (2024).

              43% of cyberattacks target small businesses.

              82% of breaches involve human error (phishing, weak passwords).

            </p>
          </div>





        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        {/* Top Gradient */}
        <div className="fade-overlay fade-top"></div>

        <h2 className="section-title hidden">How can YOU help?</h2>

        <div className="steps">
          <div className="step hidden">
            <div className="step-number">1</div>
            <h3>Report the threat or attack</h3>
            <p>Anonymously fill out the WCD Threat Report Form with clear details:

              Type of threat (e.g., phishing, ransomware, breach).

              What was affected.

              Any suspicious files, links, or IP addresses.</p>
          </div>

          <div className="step hidden">
            <div className="step-number">2</div>
            <h3>Attach Evidence (If Available).</h3>
            <p>Upload any related screenshots, emails, or logs. The more evidence you provide, the faster and more accurately we can respond.</p>
          </div>

          <div className="step hidden">
            <div className="step-number">3</div>
            <h3>We take action</h3>
            <p>A WCD analyst will review your case and contact you within 24 hours. We will provide next steps, security advice, and actively work to investigate, mitigate, and take down the threat whenever possible.</p>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="report-button-container">
          <a href="/ReportNow" className="btn-primary">
            Report a Threat
          </a>
        </div>



        {/* Bottom Gradient */}
        <div className="fade-overlay fade-bottom"></div>
      </section>



      {/* Join us */}
      <section id="Join-Us" className="educators">
        <div className="educator-content hidden">
          <h2>Join Us</h2>
          <h3>Be Part of World Cyber Defense</h3>
          <p>Become a defender of the internet by joining World Cyber Defense (WCD). Fill out our quick application form to start. Once submitted, our team will review your application, contact you if we need anything, and guide you through onboarding if accepted.</p>
          <div className="stats">
            <div className="stat">
              <h4>100%</h4>
              <p>Volunteer Driven</p>
            </div>
            <div className="stat">
              <h4>Global</h4>
              <p>Work with Experts Worldwide</p>
            </div>
            <div className="stat">
              <h4>24/7</h4>
              <p>Protect the Internet</p>
            </div>
          </div>
          <a href="https://forms.gle/gfnUaF9u2PvNXAWg8" className="btn-primary" target="_blank">Apply Now</a>
        </div>
        <div className="educator-image glass-card hidden">
          <div className="placeholder-image"></div>
        </div>
      </section>



      {/* Contact Form Section */}
      <section id="order" className="order-section">
        <div className="FormTint"></div>
        <div className="fade"></div>
        <h3>Need help? Contact us here!</h3>

        {/* Contact Form */}
        <form id="contact-form" action="https://submit-form.com/Fg0gW4cYf" method="POST">
          <input type="hidden" name="_redirect" value="https://wcd.Solnetex.com/" />

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </section>



      {/* Footer */}
      <footer className="footer">

        <div className="copyright">
          <p>&copy; 2025 World Cyber Defense. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Render the component to the DOM
ReactDOM.render(<MicroLearnLandingPage />, document.getElementById('root'));
