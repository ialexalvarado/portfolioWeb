function Timeline() {
    return (
        <div className="row">
            <div id="timeline-content">
                <h1 className="timeline-title" style={{ textAlign: "left" }}>Experience</h1>

                <ul className="timeline">
                    <li className="event" data-date="Apr 21 - Today">
                        <h3 className="timeline-header">Kyndryl/IBM</h3>
                        <p className="tl-p">Fullstack developer</p>
                        <sub>Working with react/angular applications with NestJs and Springboot API on micro-services architecture with docker and cloud ecosystem</sub>
                    </li>
                    <li className="event" data-date="Aug 20 - Apr 21">
                        <h3 className="timeline-header">Softtek</h3>
                        <p>Front-end dev</p>
                        <sub>Involved on migrate react application to a newest version and apply new features and bugfix</sub>
                    </li>
                    <li className="event" id="date" data-date="Jun 19 - Aug 20">
                        <h3 className="timeline-header">GFAE</h3>
                        <p className="tl-p">Fullstack developer</p>
                        <sub>Working on web/desktop applications develop on C# and Angular front-end applications </sub>
                    </li>
                    <li className="event" data-date="Feb 18 - Jun 19">
                        <h3 className="timeline-header">Vianney</h3>
                        <p className="tl-p">Fullstack developer</p>
                        <sub>Working on e-commerce applications for internal/external clients on ASP.net, Angular for front-end purposes and C#, Nodejs(Express) for backend purposes</sub>
                        <p><a href="https://www.vianney.mx" className="tl-a">vianney.mx</a></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Timeline;