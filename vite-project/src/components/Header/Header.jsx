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
                        <Link>Сервис</Link>
                        <Link>Сотрудничество</Link>
                        <Link>Заказать звонок</Link>
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
                    <Link>Kugoo</Link>
                    <button><img src={Photo.shop} alt="" />Каталог</button>
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
                    <Link>О магазине</Link>
                    <Link>Доставка и оплата<span>Доступна рассрочка</span></Link>
                    <Link>Тест-драйв</Link>
                    <Link>Блог</Link>
                    <Link>Контакты</Link>
                    <Link>Акции<span>%</span></Link>
                </div>      
            </div>
        </header>
    </>
  )
}

export default App
