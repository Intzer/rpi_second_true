import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const AuGallery = ({ element }) => {
    const { t } = useTranslation();
    return(
        <>
        <div class="gallery-container">
            <h2 className='text-center'>{t('gallery')}</h2>
            <div className='d-flex flex-grid justify-content-between'>
                <Carousel variant="dark" className='w-75 h-75 m-auto'>
                    <CarouselItem >
                        <img className="d-block w-75 h-75 m-auto" src={element.img1} alt='books' />

                    </CarouselItem>
                    <CarouselItem>
                        <img className="d-block w-75 h-75 m-auto" src={element.img2} alt='books' />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="d-block w-75 h-75 m-auto" src={element.img3} alt='books' />
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
        </>
    )   
}

export default AuGallery;