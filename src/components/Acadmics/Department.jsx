
import { Link } from 'react-router-dom';
import { departmentData } from '../../data/ImageData'
import '../../styles/department.css'
import { MoveRight } from 'lucide-react';

const Department = () => {

    return(
        <div>
           <div className="department-container">
               <div className="our-department">
                    <div className="department-path">
                        <p>Home > Acadmics > department</p>
                    </div>
                        <h1>Our Departments</h1>
                        <h3>Empowering Excellence Through specialized Learning</h3>
                        <div className="yellow-line"></div>
                        <p>
                            Our diverse departments are the foundation of a well-rounded education. From innovative classrooms to creative studios and advanced labs, each department is dedicated to nurturing talent, curiosity and character in every student.
                        </p>
               </div>

               <div className="department-cards">
                    {
                        departmentData.map((item, index) => {
                            const Icon = item.icon;
                            console.log(index);

                            return(
                                <div className="department-card" key={index}>
                                   
                                    <div className={index%2 ===0 ? "even-icon" : "odd-icon"}>
                                        <Icon className='icon-body'/> 
                                    </div>  

                                    <h3>{item.heading}</h3>
                                    <p>{item.about}</p>
                                     <div className="explore">
                                         <Link
                                     to={item.pageUrl}>
                                            Explore
                                     </Link>    
                                    </div>   
                                </div>
                            );
                            
                        })
                    }
               </div>
           </div>
        </div>
    )
}

export default Department