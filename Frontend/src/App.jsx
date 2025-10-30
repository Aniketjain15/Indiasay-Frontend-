import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const freelancers = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Graphic Designer",
      location: "Pune, Maharashtra",
      rate: "₹800/hr",
      experience: "4 years",
      email: "priya.sharma@email.com",
      phone: "+91 9876543210",
      skills: ["Logo Design", "Branding", "Photoshop"],
      bio: "Creative graphic designer helping businesses build unique visual identities. Worked with 50+ clients.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      portfolio: [
        "https://via.placeholder.com/200x150",
        "https://via.placeholder.com/200x150",
        "https://via.placeholder.com/200x150",
      ],
    },
    {
      id: 2,
      name: "Ravi Kumar",
      role: "Full Stack Developer",
      location: "Bangalore, Karnataka",
      rate: "₹1200/hr",
      experience: "5 years",
      email: "ravi.kumar@email.com",
      phone: "+91 9123456780",
      skills: ["React", "Node.js", "MongoDB"],
      bio: "Experienced developer building scalable web apps. Passionate about clean UI and fast backend APIs.",
      image: "https://randomuser.me/api/portraits/men/64.jpg",
      portfolio: [
        "https://via.placeholder.com/200x150",
        "https://via.placeholder.com/200x150",
      ],
    },
    {
      id: 3,
      name: "Anita Verma",
      role: "Content Writer",
      location: "Delhi, India",
      rate: "₹500/hr",
      experience: "3 years",
      email: "anita.verma@email.com",
      phone: "+91 9988776655",
      skills: ["Blog Writing", "SEO", "Copywriting"],
      bio: "Skilled content writer with experience in SEO-friendly articles and creative copywriting.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      portfolio: [
        "https://via.placeholder.com/200x150",
        "https://via.placeholder.com/200x150",
      ],
    },
  ];

  const filteredFreelancers = freelancers.filter((f) =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.skills.some((skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (selectedFreelancer) {
    const f = selectedFreelancer;
    return (
      <div className="profile-container">
        <button className="back-btn" onClick={() => setSelectedFreelancer(null)}>
          ← Back
        </button>

        <div className="profile-header">
          <img src={f.image} alt={f.name} />
          <div className="profile-info">
            <h2 className="profile-name">{f.name}</h2>
            <p className="role">{f.role}</p>
            <p>{f.location}</p>
            <p>{f.rate} | {f.experience}</p>
            <p>Email: {f.email}</p>
            <p>Phone: {f.phone}</p>
          </div>
        </div>

        <p className="bio">{f.bio}</p>

        <h3>Skills</h3>
        <div className="skills">
          {f.skills.map((skill, i) => (
            <span key={i} className="skill">{skill}</span>
          ))}
        </div>

        <h3>Portfolio</h3>
        <div className="portfolio-scroll">
          {f.portfolio.map((img, i) => (
            <img key={i} src={img} alt="work" className="portfolio-img" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Default route redirects to login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Auth routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

        <div className="listing-container">
          <h1>Find Top Freelancers</h1>
          <input
            className="search-box"
            placeholder="Search by name or skill..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="cards">
            {filteredFreelancers.map((f) => (
              <div key={f.id} className="card" onClick={() => setSelectedFreelancer(f)}>
                <img src={f.image} alt={f.name} />
                <h2 className="profile-name">{f.name}</h2>
                <p className="role">{f.role}</p>
                <p>{f.location}</p>
                <p className="rate">{f.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
