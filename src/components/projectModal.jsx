import React, { useState } from 'react';

const ProjectModal = ({ project, showModal, closeModal}) => {
  if (!showModal) return null;

  let[projects, setProjects] = useState(project?project:[]);

  console.log("Projects Modal = ",project);

  return (
    <div
      className="modal fade show"
      style={{
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }}
      onClick={closeModal}
    >
      <div
        className="modal-dialog modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content bg-dark text-white shadow-lg modal-xl">
          <div className="modal-header border-secondary">
            {/* <h3 className="modal-title fw-bold text-warning">{project.name}</h3> */}
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={closeModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* Add Project Image */}
            {projects[0].companyImage && (
                <div className="text-center mb-4">
                  <img
                    src={projects[0].companyImage}
                    alt={`${projects.name} preview`}
                    className="img-fluid rounded"
                    style={{ maxHeight: '75px', objectFit: 'contain' }}
                  />
                </div>
              )}
            {
              projects.map((projectdata, index)=>{
                return(
                  <div className='border border-secondary p-3 mb-3' key={index}>
                    <div className='d-flex align-items-center mb-3'>
                      <h3 className="modal-title fw-bold text-warning">{projectdata.name}</h3>
                    </div>
                    {/* <div className='d-flex align-items-center mb-3'>
                        <h6 className='text-primary'> <b> Project Name : </b> <span className='text-white'> {project.name} </span> </h6>
                    </div> */}
                    <div className='d-flex align-items-center mb-3'>
                        <h6 className='text-primary'> <b> Company Name : </b> <span className='text-white'> {projectdata.company} </span> </h6>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <h6 className="text-primary me-2"> <b>Project Type : </b><span className='text-white'> {projectdata.type} </span></h6>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <h6 className="text-primary me-2"><b>Technologies : </b><span className='text-white'>{projectdata.technologies.join(', ')}</span></h6>
                    </div>
                    <div className="mb-3">
                      <h6 className="text-primary"> <b> Description : </b></h6>
                      <ul className="text-white">
                        {projectdata.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="modal-footer border-secondary">
            {/* {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-warning me-auto"
              >
                View Project
              </a>
            )} */}
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
