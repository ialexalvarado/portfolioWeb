

import { IconContext } from "react-icons";
import { DiAngularSimple, DiCss3, DiDocker, DiDotnet, DiGit, DiHtml5, DiJava, DiJavascript, DiJenkins, DiJira, DiMongodb, DiMsqlServer, DiMysql, DiNodejs, DiReact } from "react-icons/di";
import { SiCouchbase, SiGithubactions, SiGooglecloud, SiIbmcloud, SiKubernetes, SiMicrosoftazure, SiOracle } from "react-icons/si";

function Skills() {
    return (
        <div className="row">
            <h1 style={{ textAlign: "left" }}>Skills</h1>
            <br/>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="row">
                        <h5 style={{ textAlign: "left" }}>Front-end techs</h5>
                        <div className="row" style={{ textAlign: "left" }}>
                            <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                <div>
                                    <DiAngularSimple />&nbsp;&nbsp;&nbsp;Angular
                                </div>
                                <div>
                                    <DiReact />&nbsp;&nbsp;&nbsp;React
                                </div>
                                <div>
                                    <DiHtml5 />&nbsp;&nbsp;&nbsp;Html
                                </div>
                                <div>
                                    <DiCss3 />&nbsp;&nbsp;&nbsp;CSS
                                </div>
                                <div>
                                    <DiJavascript />&nbsp;&nbsp;&nbsp;JavaScript
                                </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <h5>Back-end techs</h5>
                        <div className="row" style={{ textAlign: "left" }}>
                            <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                <div>
                                    <DiJava />&nbsp;&nbsp;&nbsp;Java(Springboot)
                                </div>
                                <div>
                                    <DiNodejs />&nbsp;&nbsp;&nbsp;Nodejs(NestJS, Express)
                                </div>
                                <div>
                                    <DiDotnet />&nbsp;&nbsp;&nbsp;C#
                                </div>

                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="row">
                        <h5>Databases</h5>
                        <div className="row" style={{ textAlign: "left" }}>
                            <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                <div>
                                    <DiMsqlServer />&nbsp;&nbsp;&nbsp;Microsoft SQL
                                </div>
                                <div>
                                    <DiMysql />&nbsp;&nbsp;&nbsp;MySQL
                                </div>
                                <div>
                                    <SiOracle />&nbsp;&nbsp;&nbsp;Oracle
                                </div>
                                <div>
                                    <SiCouchbase />&nbsp;&nbsp;&nbsp;Couchbase
                                </div>
                                <div>
                                    <DiMongodb />&nbsp;&nbsp;&nbsp;MongoDb
                                </div>

                            </IconContext.Provider>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <h5>Cloud Services</h5>
                        <div className="row" style={{ textAlign: "left" }}>
                            <IconContext.Provider value={{ color: "white", size: "2em" }}>
                                <div>
                                    <SiMicrosoftazure />&nbsp;&nbsp;&nbsp;Azure
                                </div>
                                <div>
                                    <SiIbmcloud />&nbsp;&nbsp;&nbsp;IBM Cloud
                                </div>
                                <div>
                                    <SiGooglecloud />&nbsp;&nbsp;&nbsp;Google Cloud Platform
                                </div>

                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h5>Tools & Additional Technologies</h5>
                    <div className="row" style={{ textAlign: "left" }}>
                        <IconContext.Provider value={{ color: "white", size: "2em" }}>
                            <div>
                                <DiDocker />&nbsp;&nbsp;&nbsp;Docker
                            </div>
                            <div>
                                <SiKubernetes />&nbsp;&nbsp;&nbsp;Kubernetes
                            </div>
                            <div>
                                <DiGit />&nbsp;&nbsp;&nbsp;Git
                            </div>
                            <div>
                                <DiJenkins />&nbsp;&nbsp;&nbsp;Jenkins
                            </div>
                            <div>
                                <DiJira />&nbsp;&nbsp;&nbsp;Jira
                            </div>
                            <div>
                                <SiGithubactions />&nbsp;&nbsp;&nbsp;Github Actions
                            </div>

                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;