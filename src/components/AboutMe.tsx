import { IconContext } from "react-icons";
import { DiAngularSimple, DiGithub } from "react-icons/di";
import { LiaLinkedin } from "react-icons/lia";

function AboutMe(){
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <h1 className="text-left">Alejandro Alvarado</h1>
                    <p className="text-left">I'm a <span className="ui-colors-primary-light">fullstack developer</span> working with frameworks like <span className="ui-colors-primary-light">React and Angular</span> on the frontend side 
                        and working with languages like <span className="ui-colors-primary-light">C#, NodeJS and Java</span> for backend purposes 
                    </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <img src="/src/assets/profilephoto.jpeg" alt="Avatar" className="avatar" />
                    <div>
                    <IconContext.Provider value={{ color: "white", size: "2em" }}>
                        <a href="https://github.com/ialexalvarado" ><DiGithub /></a>
                        <a href="https://www.linkedin.com/in/ialejandroalvarado" ><LiaLinkedin /></a>
                    </IconContext.Provider>
                    </div>
                    
                </div>
            </div>
        </div>
    </>);
}

export default AboutMe;