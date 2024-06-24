

const TrainingCarouselItem = () => {
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
        "--swiper-pagination-color": "#21417F",
      }}
    >
      
      <SwiperSlide>
        <div className='formations--card'>
            <h4 className='pl-2'>Infographie</h4>
            <div className='p-4'>
            
            <p className='formations--card-text'>L'infographie est une discipline qui combine l'art et la technologie pour créer des visuels attrayants et informatifs. </p>
            <Link to={'/'} className='btn-links' data-cursor-size="80px">
  <div>
  <button>
  <p>Détails</p>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
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
      </SwiperSlide>

    </Swiper>
  )
}

export default TrainingCarouselItem