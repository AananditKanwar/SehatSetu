import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="nav-brand">🏥 Sehat Setu</div>
          <div className="nav-links">
            <Link href="/login" style={{ textDecoration: "none" }}>Login</Link>
            <Link href="/register" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        padding: "5rem 1.5rem", 
        textAlign: "center", 
        background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)"
      }}>
        <div className="container">
          <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem", fontWeight: 800 }}>
            Your Health, Our Priority
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#6b7280", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
            Connect with qualified doctors, manage your medical records, and book appointments with ease.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/register" className="btn btn-primary" style={{ fontSize: "1.1rem", padding: "1rem 2rem", textDecoration: "none" }}>
              Start Free → 
            </Link>
            <Link href="/login" className="btn btn-secondary" style={{ fontSize: "1.1rem", padding: "1rem 2rem", textDecoration: "none" }}>
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Why Choose Sehat Setu?</h2>

          <div className="grid grid-3">
            {[
              {
                icon: "📋",
                title: "Easy Booking",
                desc: "Schedule appointments in seconds with your preferred doctors",
              },
              {
                icon: "🏥",
                title: "Medical Records",
                desc: "Keep all your health data organized and accessible",
              },
              {
                icon: "👨‍⚕️",
                title: "Expert Doctors",
                desc: "Connect with qualified healthcare professionals",
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                desc: "Your health data is encrypted and protected",
              },
              {
                icon: "⏰",
                title: "24/7 Support",
                desc: "Get help whenever you need it, anytime",
              },
              {
                icon: "💡",
                title: "Smart Insights",
                desc: "Get personalized health recommendations",
              },
            ].map((feature, idx) => (
              <div key={idx} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{feature.icon}</div>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>How It Works</h2>

          <div className="grid grid-4">
            {[
              { num: "1", title: "Create Account", desc: "Sign up with your email and password" },
              { num: "2", title: "Fill Details", desc: "Complete your health profile" },
              { num: "3", title: "Browse Doctors", desc: "Find and choose your preferred doctor" },
              { num: "4", title: "Get Treated", desc: "Complete your consultation" },
            ].map((step, idx) => (
              <div key={idx} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    margin: "0 auto 1rem",
                  }}
                >
                  {step.num}
                </div>
                <h4 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>{step.title}</h4>
                <p style={{ fontSize: "0.95rem" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "4rem 1.5rem", textAlign: "center", background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)" }}>
        <div className="container">
          <h2 style={{ color: "white", marginBottom: "1rem" }}>Ready to Take Control of Your Health?</h2>
          <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "2rem", fontSize: "1.1rem" }}>
            Join thousands of users who trust Sehat Setu for their healthcare needs
          </p>
          <Link href="/register" className="btn btn-secondary" style={{ fontSize: "1.05rem", padding: "0.85rem 2rem", textDecoration: "none" }}>
            Start Your Free Account Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: "auto" }}>
        <div className="container">
          <div className="grid grid-3">
            <div>
              <h4 style={{ color: "white", marginBottom: "1rem" }}>Sehat Setu</h4>
              <p>Transforming healthcare access for everyone</p>
            </div>
            <div>
              <h4 style={{ color: "white", marginBottom: "1rem" }}>Quick Links</h4>
              <ul style={{ listStyle: "none" }}>
                <li><Link href="/register">Register</Link></li>
                <li><Link href="/login">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: "white", marginBottom: "1rem" }}>Support</h4>
              <p>Email: support@sehat-setu.com</p>
              <p>Phone: +1-234-567-8900</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #374151", marginTop: "2rem", paddingTop: "2rem", textAlign: "center", color: "#9ca3af" }}>
            <p>&copy; 2026 Sehat Setu. All rights reserved. | Your health is our mission.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
