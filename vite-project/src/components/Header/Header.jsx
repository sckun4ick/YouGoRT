import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './style.scss'
import { Photo } from '../../photo.js';
function App() {

  return (
    <>
        <header>
            <div className="verh">
                <div className="center">
                    <div className="left">
                        <Link to="/">Сервис</Link>
                        <Link to="/">Сотрудничество</Link>
                        <Link to="/">Заказать звонок</Link>
                        <div>
                            <button><img src={Photo.viber} alt="" /></button>
                            <button><img src={Photo.whatsapp} alt="" /></button>
                            <button><img src={Photo.telegram} alt="" /></button>
                        </div>
                    </div>
                    <p>+7 (800) 505-54-61<img src="" alt="" /></p>
                </div>
            </div>
            <nav>
                <div className="center">
                    <Link to="">Kugoo</Link>
                    <button className='mmm'><img src={Photo.shop} alt="" />Каталог</button>
                    <form action="">
                        <button>Везде<img src={Photo.downArrowH} alt="" /></button>
                        <input type="text" placeholder='Искать самокат KUGO'/>
                        <button><img src={Photo.search} alt="" /></button>
                    </form>
                    <div>
                        <button><img src={Photo.balance} alt="" /></button>
                        <button><img src={Photo.heart} alt="" /></button>
                        <button><img src={Photo.shoppingCart} alt="" /><p></p>Корзина</button>
                    </div>
                </div>
            </nav>
            <div className="niz">
                <div className="center">
                    <Link to="/">О магазине</Link>
                    <Link to="/">Доставка и оплата<span>Доступна рассрочка</span></Link>
                    <Link to="/">Тест-драйв</Link>
                    <Link to="/">Блог</Link>
                    <Link to="/">Контакты</Link>
                    <Link to="/">Акции<span>%</span></Link>
                </div>      
            </div>
        </header>
    </>
  )
}

export default App
