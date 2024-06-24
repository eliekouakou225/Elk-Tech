import React from 'react'
import { Link } from 'react-router-dom';
import { convertTitleToUrl } from '../../Utils/utils';
import image1 from '../../../Assets/img/project-1.jpg'
function SolutionPageList({ solutions }) {
    return (
        <>
            {/* {solutions.map(solution => (
                <div className="col-12 card-list-item " data-cursor-size="80px">
                    <div className="card-list-item--text">
                        <h2>{solution.title}</h2>
                        <p> {solution.small_description} </p>
                        <Link to={`/solution/${convertTitleToUrl(solution.title)}`} className='btn-links' data-cursor-size="80px">
                            Voir les Détails <i class="fa fa-long-arrow-right" aria-hidden="true"></i>

                        </Link>
                    </div>
                    <div className="card-list-item--image">
                        <svg width="190" height="190" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="190" height="190" rx="20" fill="#333333" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M94.3637 67.6331C94.8895 67.1073 94.678 66.2121 93.9726 65.9772L53.8962 52.6316C53.1146 52.3713 52.3712 53.1147 52.6314 53.8963L65.9771 93.9727C66.212 94.6781 67.1072 94.8896 67.6329 94.3639L77.7136 84.2832C78.1041 83.8927 78.7373 83.8927 79.1278 84.2832L91.6125 96.7679C92.0031 97.1584 92.6362 97.1584 93.0267 96.7679L96.7678 93.0269C97.1583 92.6363 97.1583 92.0032 96.7678 91.6126L84.2831 79.1279C83.8926 78.7374 83.8926 78.1042 84.2831 77.7137L94.3637 67.6331Z" fill="white" />
                            <path d="M33.3402 35.9606V38.9858C33.3402 42.7674 33.2236 45.6208 32.9905 47.546C32.7573 49.4712 32.0694 51.2474 30.9269 52.8746C29.8076 54.5019 27.9656 55.877 25.4006 57C28.4086 58.1689 30.4838 59.9336 31.6264 62.2942C32.7689 64.632 33.3402 67.8864 33.3402 72.0576V78.6239C33.3402 80.3886 33.4685 81.7294 33.725 82.6461C34.0048 83.5629 34.576 84.2504 35.4388 84.7088C36.3249 85.1901 37.7239 85.4307 39.6359 85.4307H41V91H37.9221C34.098 91 31.2999 89.9343 29.5278 87.8028C27.779 85.6714 26.9046 82.0158 26.9046 76.8362V71.7139C26.9046 67.6343 26.3333 64.6893 25.1908 62.8787C24.0715 61.0681 22.0079 60.0711 19 59.8878V54.1122C21.4017 53.9747 23.1622 53.3674 24.2814 52.2902C25.4006 51.213 26.1118 49.8379 26.4149 48.1648C26.7414 46.4917 26.9046 44.3374 26.9046 41.7017V38.3327C26.9046 34.3906 27.2077 31.3539 27.814 29.2224C28.4436 27.091 29.6444 25.5211 31.4165 24.5126C33.1887 23.5042 35.7652 23 39.1463 23H41V28.5349H40.2305C38.3651 28.5349 36.9428 28.7068 35.9634 29.0506C34.9841 29.3714 34.2962 30.0361 33.8998 31.0445C33.5268 32.0529 33.3402 33.6916 33.3402 35.9606Z" fill="#35BA67" />
                            <path d="M83.6598 38.9858V35.9606C83.6598 33.6916 83.4732 32.0529 83.1002 31.0445C82.7038 30.0361 82.0159 29.3714 81.0366 29.0506C80.0572 28.7068 78.6349 28.5349 76.7695 28.5349H76V23H77.8537C81.2348 23 83.8113 23.5042 85.5835 24.5126C87.3556 25.5211 88.5564 27.091 89.186 29.2224C89.7923 31.3539 90.0954 34.3906 90.0954 38.3327V41.7017C90.0954 44.3374 90.2586 46.4917 90.5851 48.1648C90.8882 49.8379 91.5994 51.213 92.7186 52.2902C93.8378 53.3674 95.5983 53.9747 98 54.1122V59.8878L91.5994 57C89.0344 55.877 87.1924 54.5019 86.0731 52.8746C84.9306 51.2474 84.2427 49.4712 84.0095 47.546C83.7764 45.6208 83.6598 42.7674 83.6598 38.9858Z" fill="#35BA67" />
                        </svg>

                    </div>
                </div>
            ))} */}
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

export default SolutionPageList 