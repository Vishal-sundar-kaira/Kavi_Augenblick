import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import { testimonial } from '../constant/data';

export default function Testimonial() {
  return (
    <Swiper
    //   slidesPerView={'auto'}
    //   centeredSlides={true} 
      spaceBetween={10}
      modules={[Pagination,Navigation,Autoplay]}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      navigation={true}
      autoplay={true}
    >
            {testimonial.map((item, index) => (
                <SwiperSlide key={index} >
                    <Box width="100%" display="flex" justifyContent="center" margin="5rem 1rem">
                    <Box width="45vw" border="3px solid red" padding="1rem" textAlign="center">
                        <Typography variant="h4">{item.name}</Typography> 
                        <Typography variant='h6'>{item.review}</Typography> 
                    </Box>
                    </Box>
                </SwiperSlide>
            ))}
    </Swiper>
  );
}
