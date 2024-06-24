import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.min.css';
import charming from 'charming';
import { TweenMax, Quart, Back, Expo } from 'gsap';

const Slideshow = () => {
  const slideshowRef = useRef(null);

  useEffect(() => {
    const config = {
      slideshow: {
        delay: 3000,
        pagination: {
          duration: 3,
        },
      },
    };

    const slideshowElement = slideshowRef.current;

    // Charmed title
    const slideTitles = slideshowElement.querySelectorAll('.slide-title');
    slideTitles.forEach((slideTitle) => {
      charming(slideTitle);
    });

    // Initialize Swiper
    const swiper = new Swiper(slideshowElement, {
      loop: true,
      autoplay: {
        delay: config.slideshow.delay,
        disableOnInteraction: false,
      },
      speed: 500,
      preloadImages: true,
      updateOnImagesReady: true,
      pagination: {
        el: '.slideshow-pagination',
        clickable: true,
        bulletClass: 'slideshow-pagination-item',
        bulletActiveClass: 'active',
        clickableClass: 'slideshow-pagination-clickable',
        modifierClass: 'slideshow-pagination-',
        renderBullet: (index, className) => {
          const number = (index <= 8) ? '0' + (index + 1) : (index + 1);
          let paginationItem = `<span class="slideshow-pagination-item">`;
          paginationItem += `<span class="pagination-number">${number}</span>`;
          paginationItem += (index <= 8) ? `<span class="pagination-separator"><span class="pagination-separator-loader"></span></span>` : '';
          paginationItem += `</span>`;
          return paginationItem;
        },
      },
      navigation: {
        nextEl: '.slideshow-navigation-button.next',
        prevEl: '.slideshow-navigation-button.prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      on: {
        init: () => {
          animateSlide('next');
        },
      },
    });

    const animateSlide = (direction = 'next') => {
      const activeSlide = slideshowElement.querySelector('.swiper-slide-active');
      const activeSlideImg = activeSlide.querySelector('.slide-image');
      const activeSlideTitle = activeSlide.querySelector('.slide-title');
      let activeSlideTitleLetters = activeSlideTitle.querySelectorAll('span');

      activeSlideTitleLetters = direction === "next" ? activeSlideTitleLetters : [...activeSlideTitleLetters].reverse();

      const oldSlide = direction === "next" ? slideshowElement.querySelector('.swiper-slide-prev') : slideshowElement.querySelector('.swiper-slide-next');
      if (oldSlide) {
        const oldSlideTitle = oldSlide.querySelector('.slide-title');
        const oldSlideTitleLetters = oldSlideTitle.querySelectorAll('span');
        oldSlideTitleLetters.forEach((letter, pos) => {
          TweenMax.to(letter, .3, {
            ease: Quart.easeIn,
            delay: (oldSlideTitleLetters.length - pos - 1) * .04,
            y: '50%',
            opacity: 0,
          });
        });
      }

      activeSlideTitleLetters.forEach((letter, pos) => {
        TweenMax.to(letter, .6, {
          ease: Back.easeOut,
          delay: pos * .05,
          startAt: { y: '50%', opacity: 0 },
          y: '0%',
          opacity: 1,
        });
      });

      TweenMax.to(activeSlideImg, 1.5, {
        ease: Expo.easeOut,
        startAt: { x: direction === 'next' ? 200 : -200 },
        x: 0,
      });
    };

    const animatePagination = (swiper, paginationEl) => {
      const paginationItemsLoader = paginationEl.querySelectorAll('.pagination-separator-loader');
      const activePaginationItem = paginationEl.querySelector('.slideshow-pagination-item.active');
      const activePaginationItemLoader = activePaginationItem.querySelector('.pagination-separator-loader');

      TweenMax.set(paginationItemsLoader, { scaleX: 0 });
      TweenMax.to(activePaginationItemLoader, config.slideshow.pagination.duration, {
        startAt: { scaleX: 0 },
        scaleX: 1,
      });
    };

    swiper.on('paginationUpdate', animatePagination);
    swiper.on('slideNextTransitionStart', () => animateSlide('next'));
    swiper.on('slidePrevTransitionStart', () => animateSlide('prev'));

    return () => {
      // Cleanup on component unmount
      swiper.destroy();
    };
  }, []);

  return (
    <div className="slideshow" ref={slideshowRef}>
      {/* Slides and other content go here */}
      {/* Example slide structure */}
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="path/to/image1.jpg" alt="Slide 1" className="slide-image" />
          <div className="slide-title">Slide Title 1</div>
        </div>
        <div className="swiper-slide">
          <img src="path/to/image2.jpg" alt="Slide 2" className="slide-image" />
          <div className="slide-title">Slide Title 2</div>
        </div>
        {/* Add more slides as needed */}
      </div>
      <div className="slideshow-pagination"></div>
      <div className="slideshow-navigation-button prev">Prev</div>
      <div className="slideshow-navigation-button next">Next</div>
      <div className="swiper-scrollbar"></div>
    </div>
  );
};

export default Slideshow;
