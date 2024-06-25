import React from 'react'
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules 
import { Pagination } from 'swiper/modules';

import { convertTitleToUrl } from '../../Utils/utils';

function TrainingCarousel({ trainings }) {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{
                "--swiper-pagination-color": "#F8B234",
                // "--swiper-pagination-bullet-width": "8px"
                "--swiper-pagination-bullet-size": "12px",
            }}
        >
            {trainings.map(training => ( 
                <SwiperSlide key={training.id}>
                    <div className='trainings--card'>
                        <h4 className='pl-2'>{training.title}</h4>
                        <div className='p-4'>

                            <p className='trainings--card-text'>{training.small_description} </p>
                            <Link to={`/formations/${convertTitleToUrl(training.title)}`} className='btn-links' data-cursor-size="20px">
                            Voir les détails &#x2197;

                        </Link>
                        </div>
                    </div>
                </SwiperSlide>

            ))}

        </Swiper>


    );
}

export default TrainingCarousel;
