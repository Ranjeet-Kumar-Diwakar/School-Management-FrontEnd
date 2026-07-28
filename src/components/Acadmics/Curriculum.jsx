
import { Minus } from 'lucide-react'
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
            </div>
        </div>
    )
}

export default Curriculum