import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './style.scss'
import { Photo } from '../../../photo.js';
function App() {

  return (
    <>
        <section className='main'>
            <div className="carts">
                <div className="center">
                    <div className="elft">
                        <p className='ui'>Новинка</p>
                        <h1>Электросамокаты Kugoo Kirin от официального дилера</h1>
                        <h6>с бесплатной доставкой по РФ от 1 дня</h6>
                        <button className='buy'>Перейти в католог</button>
                        <div className='w'>
                            <button><img src={Photo.arrow} alt="" /></button>
                            <p>1</p>
                            <div id='lents'><div id='usuf'></div></div>
                            <p>5</p>
                            <button><img src={Photo.arrow} alt="" /></button>
                        </div>
                    </div>
                    <div className="right">

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default App