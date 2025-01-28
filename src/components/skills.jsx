

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "HTML", rating: 5 },
        { name: "CSS", rating: 4 },
        { name: "JavaScript", rating: 5 },
        { name: "Python", rating: 4 },
      ],
    },
    {
      category: "Libraries",
      items: [
        { name: "React", rating: 5 },
        { name: "React Redux", rating: 4 },
        { name: "PrimeReact", rating: 4 },
        { name: "PrimeFlex", rating: 4 },
        { name: "Bootstrap", rating: 4 },
        { name: "Tkinter", rating: 3 },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "Express.js", rating: 4 },
        { name: "Flask", rating: 3 },
        { name: "Angular", rating: 3 },
        { name: "Vue.js", rating: 3 },
      ],
    },
    {
      category: "Databases",
      items: [{ name: "MongoDB", rating: 4 }],
    },
    {
      category: "Tools",
      items: [
        { name: "Git/GitHub", rating: 5 },
        { name: "npm/Yarn", rating: 4 },
        { name: "VS Code", rating: 5 },
      ],
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi ${i <= rating ? "bi-star-fill" : "bi-star"} star m-1`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="container-fluid py-5 bg-black text-white">
      <h2 className="text-center text-primary mb-4">My Skills</h2>
      <div className="row">
        {skills.map((skillCategory, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card bg-transparent border-0 shadow-lg">
              <div className="card-body p-4 rounded skills">
                <h4 className="text-white mb-3">{skillCategory.category}</h4>
                <div
                  className="skills-list p-3 rounded"
                  style={{
                    color: '#CCCCCC',
                    height: '320px',
                    overflowY: 'auto',
                  }}
                >
                  {skillCategory.items.map((skills, index1) => (
                    <div
                      key={index1}
                      className="d-flex justify-content-between align-items-center mb-3 p-3 shadow-sm rounded custom-skills"
                      style={{
                        backgroundColor: '#000000',
                        color: 'white',
                      }}
                    >
                      <span className="text-start">{skills.name}</span>
                      <span className="text-end text-warning">{renderStars(skills.rating)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
