import React from 'react'
import { Link } from 'react-router-dom';

 
function SolutionList({ solutions }) {
    return (
        <>
        {solutions.map(solution => ( 
                     <div className="col-lg-4 col-md-6">
                     <div className="service-item  position-relative">
                     <div className="icon"> 
                     <i className={solution.icon} aria-hidden="true"></i>          
                     </div>
                     <h3>{solution.title}</h3>
                     <p>{solution.small_description} </p>
                 
                     <Link to={`/solution/${solution.id}`} className='btn-links' data-cursor-size="80px">
                     <div>
                     <button> 
                     <p>Détails</p>
                     <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="h-6 w-6"  
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     stroke-width="4"
                     >
                     <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M14 5l7 7m0 0l-7 7m7-7H3"
                     ></path>
                     </svg>
                     </button>
                     
                     </div>
                     </Link>
                     </div>
                     </div>
        ))}
        </>

    );
}

export default SolutionList;
