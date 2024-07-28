import React from 'react'
import { Link } from 'react-router-dom';
import { convertTitleToUrl } from '../../Utils/utils';
import PropTypes from 'prop-types';
import image1 from '../../../Assets/img/project-1.jpg'
function SolutionPageList({ solutions }) {
    return (
        <>
            {solutions.map(solution => (
                <div className="col-lg-4" key={solution.id} data-cursor-size="20px"  >
                    <div className="case-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src={image1} alt="" />
                        <Link to={`/solutions/${convertTitleToUrl(solution.title)}`} className="case-overlay text-decoration-none" href="">
                            <small>Solution</small>
                            <h5 className="lh-base text-white mb-3">{solution.title}
                            </h5>
                            <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}
SolutionPageList.propTypes = {
    solutions: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default SolutionPageList 