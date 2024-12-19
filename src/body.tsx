import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const imageStyle: React.CSSProperties = {
    height: '800px', // Set a fixed height for all images
    objectFit: 'cover', // Ensure the images cover the area without distortion
    width: '100%'
};
const images = [
    { src: '/public/image1.png', alt: 'Image 1'},
    { src: '/public/image2.jpg', alt: 'Image 2'},
    { src: '/public/image3.jpeg', alt: 'Image 2'}
];

const containerStyle = {
    width: '70%',
    height: '70%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const Body: React.FC = () => {
    return (
        <div className="carousel-container" style={containerStyle}>
            <Carousel showThumbs={false} useKeyboardArrows showIndicators={false} showStatus={false}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.src} alt={image.alt} style={imageStyle} />
                    <a href={`/public/download${index + 1}.pdf`} download>
                        <button>Download</button>
                    </a>
                </div>
            ))}
            </Carousel>
        </div>
    );
};



export default Body;