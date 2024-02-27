function AboutMe(){
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <h1>Alejandro Alvarado</h1>
                    <h6 style={{textAlign: "left"}}>I'm a <span className="ui-colors-primary-light">fullstack developer</span> working with frameworks like <span className="ui-colors-primary-light">React and Angular</span> on the frontend side 
                        and working with languages like <span className="ui-colors-primary-light">C#, NodeJS and Java</span> for backend purposes 
                    </h6>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <img src="/src/assets/profilephoto.jpeg" alt="Avatar" className="avatar border-gradient-purple border-gradient" />
                </div>
            </div>
        </div>
    </>);
}

export default AboutMe;