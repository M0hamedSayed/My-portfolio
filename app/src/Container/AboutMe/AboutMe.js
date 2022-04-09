import SectionHeading from '../../Components/Shared/SectionHeading/SectionHeading';
import './AboutMe.css';

const AboutMe = () => {
    const screenConstants = {
        description: "Full stack developer with background knowledge of MERN Stack with Redux and MEAN Stack , along with a knock of building applications with utmost efficiency. I have acquired high-level programming knowledge from taking online courses on Udemy, Pluralsight, NTI, and ITI, and I keep learning till now.",
        highlights: [
            "Full Stack web development",
            "Interactive Front End as per the design",
            "Angular 13",
            "React",
            "Redux for State Management",
            "Building REST APIs",
            "Managing database"
        ],
        heading: "Here are a Few Highlights :"
    }
    const renderHighlight = () => {
        return (
            screenConstants.highlights.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        );
    }
    return (
        <div className='section'>
            <SectionHeading title={'About Me'} subHeading={'Why Choose Me ?'} />
            <div className='container mt-5 aboutMe'>
                <div className="card mb-md-3 shadow-lg rounded-3" >
                    <div className="row g-0">
                        <div className="col-md-5 rounded-3">
                            <img src="./assets/images/mearnstack.png" className="img-fluid rounded-3" alt="..." />
                        </div>
                        <div className="col-md-7 mt-3">
                            <div className="card-body px-3 text-white">
                                {/* <h4 className="card-title">Card title</h4> */}
                                <p className="card-text mb-5 pb-2 aboutMe-description">{screenConstants.description}</p>
                                <div className='aboutMe-highlight'>
                                    <div className='aboutMe-heading txt-primary'>
                                        <h4>{screenConstants.heading}</h4>
                                    </div>
                                    {renderHighlight()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    );
}

export default AboutMe;