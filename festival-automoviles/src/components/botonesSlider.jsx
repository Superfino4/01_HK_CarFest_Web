import React, { useState } from 'react';
import './botonesSlider.css'

<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
/>

const BotonesSlideLop = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showSlide = (index) => {
        const items = document.querySelectorAll('.item');
        items.forEach((item, i) => {
            item.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            showSlide(currentIndex - 1);
        }
    };

    const nextSlide = () => {
        const items = document.querySelectorAll('.item');
        if (currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1);
            showSlide(currentIndex + 1);
        }
    };

    return (
        <div className="button">
            <div className="prev" onClick={prevSlide}>
                <i className="fa-solid fa-angles-left"></i>
            </div>
            <div className="next" onClick={nextSlide}>
                <i className="fa-solid fa-angles-right"></i>
            </div>
        </div>
    );
};

export default BotonesSlideLop;