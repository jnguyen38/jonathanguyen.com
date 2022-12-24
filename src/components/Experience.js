import styles from "../styles/pages/Home.module.css";

export default function Experience() {
    const celularity = ["Collaborated with multiple small teams of employees at the biotech company in order to facilitate Celularity’s data integration process into Palantir’s Foundry platform",
        "Performed statistical analysis on data from pre-clinical/clinical trials and development processes to identify correlations between cell donor characteristics and stem cell viability in cellular therapies"];
    const ndIT = ["Collaborated with ND University Relations employees on an IT project where we taught community admins how to operate the Notre Dame web page frontend software (my.ND.edu)"];
    const ndLD = ["Teach my peers how to properly code in Verilog HDL and operate the Quartus Prime software",
        "Fully understand combinational and sequential circuits in order to efficiently provide help to students"];
    const ford = ["Deployed a responsive and interactive quiz page that allows Ford’s customers to differentiate leasing and buying, and connected a backend database to track customer trends, created with jQuery/CSS/HTML",
        "Developed extensive experience with standard industry skills such as GitHub, mob programming, Agile development, unit testing, and various and deployment strategies",
        "Partnered with a team of Software Devs, Product Managers, and UX Designers to address real-time customer needs"];

    function ExperienceItem(props) {
        return (
            <div className={`${styles.displayItem} black-text d-flex-col-l gap-2 p-3 pr-4`}>
                <div className={`d-flex jc-sb full-width`}>
                    <div className={`d-flex-col-l`}>
                        <p className={`fw-2`}>{props.company}</p>
                        <p className={`fw-5 fs-smd`}>{props.title}</p>
                    </div>
                    <p className={`fw-2 italic as-fs text-right`}>{props.date}</p>
                </div>
                <div className={`full-width d-flex-col-l gap-2`}>
                    {props.points.map((point, index) => {
                        return (
                            <p key={index} className={`${styles.listContainer} ${styles.exploreLine} ml-4 pl-4 fw-2 fs-sm`}>{point}</p>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div id={`experience`} className={`${styles.experience} gap-2`}>
            <h2 className={`fw-6 fs-md`}>Experience.</h2>
            <p className={`${styles.description} fw-2 fs-sm`}>
                So far, I&#39;ve been lucky enough to take part in a wide variety of work experiences
                since my first year at Notre Dame. Although I&#39;m always <span className={`fw-5`}>searching for more opportunities</span>,
                here are a few that I was happy to look back on.
            </p>
            <div className={`${styles.exploreDisplay} d-flex-col-l gap-3 my-3`}>
                <ExperienceItem company={`University of Notre Dame`} title={`Logic Design Teaching Assistant`} date={`Winter 2022 - Present`} points={ndLD}/>
                <ExperienceItem company={`Ford Motor Company`} title={`Software Engineer Intern`} date={`Summer 2022`} points={ford}/>
                <ExperienceItem company={`Celularity Inc`} title={`Data Science Intern`} date={`Summer 2021`} points={celularity}/>
                <ExperienceItem company={`University of Notre Dame`} title={`Information Technology Intern`} date={`Spring 2021`} points={ndIT}/>
            </div>
        </div>
    );
}