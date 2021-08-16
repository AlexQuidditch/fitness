import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Pagination, Autoplay]);

export function useGallery(selector: string) {
  const swiper = new SwiperCore(selector, {
    centeredSlides: true,
    autoplay: {
      delay: 45000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: `${selector.replaceAll('#', '')}__pagination-bullet`
    },
  });
  return swiper;
}
