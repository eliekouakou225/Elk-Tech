// src/components/TrainingList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { convertTitleToUrl } from '../../Utils/utils';
import PropTypes from 'prop-types';

function SolutionSectionList({ solutions }) {
    return (
        <>
            {solutions.map(solution => (
                <div className="col-lg-4 col-md-6" key={solution.id}>
                    <div className="solutions-item  position-relative">
                        <div className="icon">
                            <i className={solution.icon} aria-hidden="true"></i>
                        </div>
                        <h3>{solution.title}</h3>
                        <p>{solution.small_description} </p>

                        <Link to={`/solutions/${convertTitleToUrl(solution.title)}`} className='btn-links' data-cursor-size="20px">
                            Voir les détails <span className='arrow-rotate'><i className="fa fa-long-arrow-right" aria-hidden="true"></i> </span>

                        </Link>

                    </div>
                </div>
            ))}
        </>
    );
}
SolutionSectionList.propTypes = {
    solutions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            small_description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default SolutionSectionList;