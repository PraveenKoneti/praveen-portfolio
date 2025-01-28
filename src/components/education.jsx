


const Education = () => {

    const education = [
        {
            degree: "Bachelor of Technology (B.Tech)",
            institution: "Jawaharlal Nehru Technological University",
            stream: "Electronics and Communication Engineering", 
            year: "2019 - 2023",
            percentage: "76%",
            details: "Specialized in Electronics and Communication Engineering (ECE).",
        },
        {
            degree: "Higher Secondary (Class XII)",
            institution: "Sri Hari Junior College",
            stream: "Science (MPC)", 
            year: "2017 - 2019",
            percentage: "85%",
            details: "Science Stream with a focus on Mathematics, Physics, and Chemistry.",
        },
        {
            degree: "Board of Secondary Education",
            institution: "S.V.R High School",
            stream: "Science",
            year: "2016 - 2017",
            percentage: "88%",
            details: "Completed secondary education with a focus on foundational subjects including Mathematics, Science, and English, achieving strong academic performance."
        }        
    ];


    return(
        <div className="col-12 bg-black p-4 text-white">
            <h2 className="text-center text-primary mb-4">Education</h2>
            <div
                className="container-fluid p-4 rounded shadow education"
                style={{
                    color: "#CCCCCC",
                }}
            >
                {education.map((edu, index) => (
                    <div key={index} className="row p-4 align-items-center custom-education">
                        {/* Degree and Institution */}
                        <div className="col-md-4">
                            <h5 className="text-white">{edu.degree}</h5>
                            <p className="mb-1">
                                <strong className="text-white">Institution:</strong> {edu.institution}
                            </p>
                            <p className="">
                                <strong className="text-white">Stream:</strong> {edu.stream}
                            </p>
                        </div>

                        {/* Stream */}
                        <div className="col-md-2">
                            <h5 className="text-white">Year</h5>
                            <p className="">{edu.year}</p>
                        </div>

                        {/* Percentage */}
                        <div className="col-md-2">
                            <h5 className="text-white">Percentage</h5>
                            <p className="">{edu.percentage ? `${edu.percentage}` : "N/A"}</p>
                        </div>

                        {/* Details */}
                        <div className="col-md-4">
                            <p className="">
                                <strong className="text-white">Details:</strong> {edu.details}
                            </p>
                            <button className="btn btn-sm btn-secondary"> More Info </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )


}


export default Education;