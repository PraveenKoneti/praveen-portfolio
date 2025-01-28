import { useState } from "react";
import projects from "../data/projects";
import ProjectModal from "./projectModal";
import lg from '../assets/images/company/lg.png';

const Experience = () => {
  const experiences = [
    {
      company: "LG Soft India",
      period: "May 2024 - Present",
      role: "Frontend Developer",
      description: "Responsible for maintaining existing projects, modifying UI designs, developing new projects, and deploying updates.",
      logo: lg,
    },
    {
      company: "Cybotrix Technology",
      period: "Oct 2023 - May 2024",
      role: "Frontend Developer (Intern)",
      description: "Contributed to a Multi-Vendor E-Commerce Website Application using React, HTML, CSS, and Bootstrap.",
      logo: "https://cybotrix.com/wp-content/uploads/2019/10/cropped-cybotrix-1-1.png",
    },
    {
      company: "Infocampus",
      period: "May 2023 - Oct 2023",
      role: "Trainee",
      description: "Gained foundational knowledge in web development and worked on small-scale projects.",
      logo: "https://infocampus.co.in/wp-content/uploads/2021/12/cropped-infocampus-1.png",
    },
  ];

  let [selectedProjects,setSelectedProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const getProjects = (companyName) => {
      let getProject = [];
      projects.map((project)=>{
          if(project.company === companyName)
          {
            getProject.push(project);
            console.log("Projects at experience = ",getProject)
          }
            
      })
      setSelectedProjects(getProject);
      setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
    setSelectedProjects([]);
  };

  return (
    <div className="py-4 bg-black">
      <div className="container-fluid pb-5">
        <h2 className="text-center mb-4 text-primary"> Experience </h2>
        <div className="row g-4">
          {experiences.map((experience, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="card h-100 experience-card border-0"
                style={{
                  backgroundColor: "#FAF9F5",
                  borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="card-body position-relative text-center p-4 experience-card">
                  <div
                    className="badge"
                    style={{
                      backgroundColor: "#6a11cb",
                      color: "#fff",
                      textTransform: "uppercase",
                      padding: "6px 8px",
                      borderRadius: "8px",
                    }}
                  >
                    {experience.role}
                  </div>
                  <br />
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className="mb-4 mt-3 rounded-circle"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      border: "2px solid #ddd",
                      padding: "6px",
                      boxShadow: "0 4px 15px rgba(67, 30, 201, 0.8)", // Add shadow for gradient effect
                    }}
                  />
                  <h5
                    className="card-title text-uppercase fw-bold"
                    style={{ color: "#555" }}
                  >
                    {experience.company}
                  </h5>
                  <p className="text-muted mb-2">{experience.period}</p>
                  <p style={{ color: "#666" }}>{experience.description}</p>
                  <button
                    className="btn btn-primary btn-sm text-white"
                    style={{
                      background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                      border: "none",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                    }}
                    onClick={getProjects.bind(this, experience.company)}
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProjects.length>0 && (
        <ProjectModal 
          project={selectedProjects}
          showModal={showModal}
          closeModal={closeModal}
        />
      )}

    </div>
  );
};

export default Experience;
