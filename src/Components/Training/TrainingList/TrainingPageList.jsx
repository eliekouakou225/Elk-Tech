// src/components/TrainingList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { convertTitleToUrl } from '../../Utils/utils';
import PropTypes from 'prop-types';

function TrainingList({ trainings }) {
    return (

        <>

            {trainings.map(training => (
                <div className="col-lg-4" key={training.id} data-cursor-size="20px"  >
                    <div className="case-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src={training.image_training} alt="" />
                        <Link to={`/formations/${convertTitleToUrl(training.title)}`} className="case-overlay text-decoration-none" href="">
                            <small>Formations</small>
                            <h5 className="lh-base text-white mb-3">{training.title}
                            </h5>
                            <span className="btn btn-square btn-primary"><i className="fa fa-arrow-right"></i></span>
                        </Link>
                    </div>
                </div>
            ))}



        </>

    );
}
TrainingList.propTypes = {
    trainings: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TrainingList;
