

import React from 'react';
import './slider.css'; // Importa tu archivo de estilos aquí
import imgs from './components/imgs.jsx';


< link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
/>


const SlideLop = () => {
    return (

        <div className="slide">

            <div className="item" style={{ backgroundImage: `url(${imgs.img1})` }}>
                <div className="content">
                    <div className="name">Valencia</div>
                    <div className="des">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Accusamus, quis.
                    </div>
                    <button>See More</button>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: `url(${imgs.img2})` }}>
                <div className="content">
                    <div className="name">Caracas</div>
                    <div className="des">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Accusamus, quis.
                    </div>
                    <button>See More</button>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: `url(${imgs.img3})` }}>
                <div className="content">
                    <div className="name">Maracay</div>
                    <div className="des">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Accusamus, quis.
                    </div>
                    <button>See More</button>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: `url(${imgs.img4})` }}>
                <div className="content">
                    <div className="name">Nuevo Estado</div>
                    <div className="des">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Accusamus, quis.
                    </div>
                    <button>See More</button>
                </div>
            </div>
            <div className="item" style={{ backgroundImage: `url(${imgs.img5})` }}>
                <div className="content">
                    <div className="name">La Guaira</div>
                    <div className="des">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Accusamus, quis.
                    </div>
                    <button>See More</button>
                </div>
            </div>
        </div >



    );
};

export default SlideLop;
