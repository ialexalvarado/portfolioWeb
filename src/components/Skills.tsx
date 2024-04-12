

import { IconContext } from "react-icons";
import { DiAngularSimple, DiCss3, DiDocker, DiDotnet, DiGit, DiHtml5, DiJava, DiJavascript, DiJenkins, DiJira, DiMongodb, DiMsqlServer, DiMysql, DiNodejs, DiPostgresql, DiReact } from "react-icons/di";
import { GrKubernetes } from "react-icons/gr";
import { SiCouchbase, SiGithubactions, SiGooglecloud, SiIbmcloud, SiKubernetes, SiMicrosoftazure, SiOracle } from "react-icons/si";

function Skills() {
    return (
        <div className="row">
            <h1>Skills</h1>
            <i className="bi-alarm" />
            <p>hello</p>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row">
                    <h3>Front-end techs</h3>
                    <div className="row">
                        <IconContext.Provider value={{ color: "white", size: "3em" }}>
                            <div>
                                <DiAngularSimple /> Angular
                            </div>
                            <div>
                                <DiReact /> React
                            </div>
                            <div>
                                <DiHtml5 /> Html
                            </div>
                            <div>
                                <DiCss3 /> CSS
                            </div>
                            <div>
                                <DiJavascript /> JavaScript
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="row">
                    <h3>Back-end techs</h3>
                    <div className="row">
                        <IconContext.Provider value={{ color: "white", size: "3em" }}>
                            <div>
                                <DiJava /> Java(Springboot)
                            </div>
                            <div>
                                <DiNodejs /> Nodejs(NestJS, Express)
                            </div>
                            <div>
                                <DiDotnet /> C#
                            </div>

                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row">
                    <h4>Databases</h4>
                    <div className="row">
                        <IconContext.Provider value={{ color: "white", size: "2em" }}>
                            <div>
                                <DiMsqlServer /> Microsoft SQL
                            </div>
                            <div>
                                <DiMysql /> MySQL
                            </div>
                            <div>
                                <SiOracle /> Oracle
                            </div>
                            <div>
                                <SiCouchbase /> Couchbase
                            </div>
                            <div>
                                <DiMongodb /> MongoDb
                            </div>

                        </IconContext.Provider>
                    </div>
                </div>
                <div className="row">
                    <h4>Cloud Services</h4>
                    <div className="row">
                        <IconContext.Provider value={{ color: "white", size: "2em" }}>
                            <div>
                                <SiMicrosoftazure /> Azure
                            </div>
                            <div>
                                <SiIbmcloud /> IBM Cloud
                            </div>
                            <div>
                                <SiGooglecloud /> Google Cloud Platform
                            </div>

                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <h4>Tools & Additional Technologies</h4>
                <div className="row">
                        <IconContext.Provider value={{ color: "white", size: "2em" }}>
                            <div>
                                <DiDocker /> Docker
                            </div>
                            <div>
                                <SiKubernetes /> Kubernetes
                            </div>
                            <div>
                                <DiGit /> Git
                            </div>
                            <div>
                                <DiJenkins /> Jenkins
                            </div>
                            <div>
                                <DiJira /> Jira
                            </div>
                            <div>
                                <SiGithubactions /> Github Actions
                            </div>

                        </IconContext.Provider>
                    </div>
            </div>
        </div>
    )
}

export default Skills;