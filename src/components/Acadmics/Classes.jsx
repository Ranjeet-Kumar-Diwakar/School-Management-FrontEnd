

import { classesData, classFeatureData, studentLifeData } from '../../data/ImageData'
import '../../styles/classes.css'


const Classes = () => {

    return (
        <div>
            <div className="classes-container">
                <div className="classes-image-section">
                    <div className="left-side">
                        <div className="left-side-text">
                            <p>
                            Home > Acadmics > Classes
                            </p>

                            <h1>CLASSES</h1>
                            <div className="yellow-line"></div>

                            <p>A nuturing learning environment for every stage of child's academic journey</p>
                        </div>
                    </div>

                    <div className="right-side">
                        <img src="/images/classes.png" alt="" />
                    </div>
                </div>

                <div className="about-class-heading">
                    <h1>About Our Classes</h1>
                </div>
                <div className="about-classes-cards">

                    {
                        classesData.map((item) => (
                            <div className='classes-card'>
                                <img src={item.image} alt={item.image} />
                                <h2>{item.heading}</h2>

                                <ul>
                                    <li><span>Age Group : </span>{item.ageGroup}</li>
                                    <li><span>Class Size : </span>{item.ClassSize}</li>
                                    <li><span>Focus : </span>{item.focus}</li>
                                    <li><span>Activities : </span>{item.activities}</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>

                <div className="classroom-feature-heading">
                    <h1>Classroom Features</h1>
                </div>

                <div className="classroom-features">
                    {classFeatureData.map(({ icon: Icon, title }, index) => (
                        <div className="icon-title" key={index}>
                            <div className="feature-icon">
                                <Icon />
                            </div>

                            <p>{title}</p>
                        </div>
                    ))}
                </div>

                {/* student life in class */}

                <div className="class-life">
                    {
                        studentLifeData.map((item, index) => (
                            <div key={index} className="class-life-card">
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        ))
                    }

                    <div className="important-note">
                        <p>Every class is a step towards a bright future. We teach, we care, we inspire.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Classes