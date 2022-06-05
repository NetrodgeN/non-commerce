import './App.css';
import Carousel from "./Carousel";
import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";

import sperm from "./assets/01/pink_sperm_1.png"

function App() {
    return (
        <div className="wrapper">
            <Header/>
            {/*<Main/>*/}
            {/*<Footer/>*/}
            <Carousel>
                <div className='item item-1'>
                    <div className='anim-bg'>
                        <div className="inline"><img src={sperm} alt=""/></div>
                        <div className="inline"><img src="" alt=""/></div>
                        <div className="inline"><img src="" alt=""/></div>
                        <div className="inline"><img src="" alt=""/></div>
                        <div className="inline"><img src="" alt=""/></div>
                        <div className="inline"><img src="" alt=""/></div>
                        <div className="inline"><img src="" alt=""/></div>
                        <div className="inline"><img src="" alt=""/></div>
                        <div className="inline"><img src="" alt=""/></div>
                    </div>
                    <span>ПРИВЕТ,</span>
                    <p>ЭТО <strong> НЕ</strong> КОММЕРЧЕСКОЕ ЗАДАНИЕ</p>
                    <button>Что дальше?</button>
                </div>
                <div className='item item-2'>item 2</div>
                <div className='item item-3'>item 3</div>
            </Carousel>
        </div>
    );
}


export default App;
