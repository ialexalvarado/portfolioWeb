function Projects({projectName, projectDetails, projectLink}){
    return (
        <div className="gradient-layout-rounded">
            <div className="row">
                <img src="/src/assets/rectangle.png" className="projects-mini-image mx-auto" />
            </div>
            <div className="row">
                <h5>{projectName}</h5>
            </div>
            <div className="row">
                <p className="text-left" style={{paddingLeft: "22px"}}>{projectDetails}</p>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <button className="btn btn-primary ui-colors-bg-primary btn-grad">Live Preview</button> 
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <button className="btn ui-colors-bg-secondary btn-grad-black">Check on Github</button> 
                </div>
            </div>
                     

         
        </div>
    )
}

//btn-gradient

export default Projects;