
import { BookOpen, GraduationCap, Minus, School } from 'lucide-react'
import '../../styles/curriculum.css'

const Curriculum = () => {

    return (
        <div>
            <div className="curr-container">
                <div className="image-section">
                    <img src="/images/children.png" alt="children" />


                    <div className="curr-overlay">

                        <p className='address-text'>Home > Acadmics > Curriculum</p>
                        <h1>Curriculum</h1>
                        <p className='curr-intro'>
                            Our curriculum is designed to nuture curiosity, build strong foundations and inspire every student to achieve their full potential.
                        </p>

                    </div>
                </div>

                {/* about curriculum */}

                <div className="about-curriculum">
                    <h1>About of Curriculum</h1>
                    <p>
                        At Bright Future International School, we follow a student-centered curriculum that nurtures academic excellence, creativity, and critical thinking. Our curriculum is carefully designed to provide a balanced blend of classroom learning, practical experiences, co-curricular activities, and value-based education. We encourage students to explore their interests, develop problem-solving skills, and build confidence through interactive and engaging learning methods. Our aim is to prepare every student with the knowledge, skills, and character needed to succeed in higher education, future careers, and responsible citizenship.


                    </p>
                </div>

                <div className="curr-structure-heading">

                    <h1>Curriculum Structure</h1>
                </div>

                <div className="curr-structure">

                    {/* primary card */}
                    <div className="school-type-card">
                        <div className="curr-logo">
                            <School className='curr-icon' />
                        </div>

                        <h3>Primary Education</h3>
                        <h5>(Grades I - V)</h5>
                        <p>
                            We need to build a base in things, like reading and writing and also math and learning about the environment and how to get along with people. This can be done by making learning fun and doing lots of activities.

                        </p>
                    </div>

                    {/* middle school */}

                    <div className="school-type-card">
                        <div className="curr-logo">
                            <BookOpen className='curr-icon' />
                        </div>

                        <h3>Middle School</h3>
                        <h5>(Grades VI - VIII)</h5>
                        <p>
                            We want to help people be curious and like to explore things. To do this we have a balance of school work and other activities. This balance helps people feel good, about themselves and become individuals.

                        </p>
                    </div>

                    {/* secondry section */}
                    <div className="school-type-card">
                        <div className="curr-logo">
                            <GraduationCap className='curr-icon' />
                        </div>

                        <h3>Secondary Education</h3>
                        <h5>(Grades IX - XII)</h5>
                        <p>
                            Students learn about subjects that can help them do really well in school. This kind of career-oriented learning is important because it gets them ready for college and other things they will do later in life.

                        </p>
                    </div>
                </div>

                {/* subject offered table */}

                <div className="offer-subjet-section">
                    <h1>Subjects Offered</h1>

                    <div className="subject-table">
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Class / Level</th>
                                    <th>Subjects</th>
                                </tr>
                            </thead>

                            <tr>
                                <td>Primary (I - V) </td>
                                <td> English, Mathmatics, EVS, Hindi, Computer & Science, Art & Craft, Physical    Education

                                </td>
                            </tr>

                            <tr>
                                <td>Middle (VI - VII) </td>
                                <td> English, Mathmatics, Science, Social Science, Hindi, Computer Science, Physical Education

                                </td>
                            </tr>


                            <tr>
                                <td>Secondary (IX - XII) </td>
                                <td>
                                    Physics, Chemistry, Mathmatics / Biology, Computer & Science, English, Hindi.

                                </td>
                            </tr>




                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Curriculum