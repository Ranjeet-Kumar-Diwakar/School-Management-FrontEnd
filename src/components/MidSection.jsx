import '../styles/midsection.css'

const MidSection = () => {

    return (
        <div>
            <div className="upper-section-container">
                <ul className='upper-list-container'>
                    {/* first list items */}
                    <li className='items'>
                        <div className="icon">
                            <img src="/images/degree.png" alt="Licence" />
                        </div>

                        <div className="content">
                            <h4>30+</h4>
                            <h5>Courses Offered</h5>
                            <p>Wide Range of Acadmics co-curricular Programs</p>
                        </div>
                    </li>

                    {/* Second  list items */}

                    <li className='items'>
                        <div className="icon">
                            <img src="/images/group.png" alt="Licence" />
                        </div>

                        <div className="content">
                            <h4>50+</h4>
                            <h5>Expert Teachers</h5>
                            <p>Dedicated & Experienced Faculty</p>
                        </div>
                    </li>

                    {/* third list items */}

                    <li className='items'>
                        <div className="icon">
                            <img src="/images/infracture.png" alt="Licence" />
                        </div>

                        <div className="content">
                            <h4>Modern</h4>
                            <h5>Infrastructure</h5>
                            <p>Advanced Labs, Libraries, Smart Classrooms & More</p>
                        </div>
                    </li>

                    {/* fourth list item */}

                    <li className='items'>
                        <div className="icon">
                            <img src="/images/trophy.png" alt="Licence" />
                        </div>

                        <div className="content">
                            <h4>100%</h4>
                            <h5>Results</h5>
                            <p>Consistent Excellence in Acadmics</p>
                        </div>
                    </li>


                </ul>
            </div>

            {/* lower section */}

            <div className="lower-section-container">
                <div className="addmission-section">
                    <div className="img-section">
                       <img src="/images/book.png" alt="book-icon" />
                    </div>

                    <div className="heading-section">
                        <h1>Admission Section 2025-26</h1>
                        <p>Give Your Child the best education for a brighter tomorrow</p>
                    </div>

                    <div className="button-section">
                        <button className="yellow-button">Apply now </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MidSection