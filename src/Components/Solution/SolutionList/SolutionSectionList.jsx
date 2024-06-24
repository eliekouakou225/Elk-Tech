// src/components/TrainingList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { convertTitleToUrl } from '../../Utils/utils';


function SolutionSectionList({ solutions }) {
    return (
        <>
                {solutions.map(solution => (
                <div className="col-lg-4 col-md-6">
                    <div className="solutions-item  position-relative">
                        <div className="icon">
                            <i className={solution.icon} aria-hidden="true"></i>
                        </div>
                        <h3>{solution.title}</h3>
                        <p>{solution.small_description} </p>

                        <Link to={`/solutions/${convertTitleToUrl(solution.title)}`} className='btn-links' data-cursor-size="20px">
                            Voir les détails &#x2197;

                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

export default SolutionSectionList;