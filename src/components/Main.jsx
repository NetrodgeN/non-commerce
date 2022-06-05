import React from 'react';

const Main = () => {
    return (
        <main>
            <div className='slide-wrapper'>
                <div className="slide-1">
                    <span>ПРИВЕТ</span>
                    <p>ЭТО <strong> НЕ</strong> КОММЕРЧЕСКОЕ ЗАДАНИЕ</p>
                    <button>Что дальше?</button>
                </div>
                <div className="slide-2">
                    Текст сообщения
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque est illum repudiandae!
                            Ad architecto debitis dignissimos doloremque eaque, enim, esse excepturi ipsam iste magnam
                            maiores natus non numquam tenetur, vitae.</p>
                    </div>
                </div>
                <div className="slide-3">
                    <p>Ключевое сообщение</p>
                    <h2>BREND <strong> XY</strong></h2>
                    <div className='brend-container'>
                        <div><p>Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies</p></div>
                        <div><p>A arcu cursus vitae</p></div>
                        <button>Подробнее</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;