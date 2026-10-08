import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './style.scss'
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
                            <button><img src="" alt="" /></button>
                            <button><img src="" alt="" /></button>
                            <button><img src="" alt="" /></button>
                        </div>
                    </div>
                    <p>+7 (800) 505-54-61<img src="" alt="" /></p>
                </div>
            </div>
            <nav>
                <div className="center">
                    <Link>Kugoo</Link>
                    <button><img src="" alt="" />Каталог</button>
                    <form action="">
                        <button>Везде<img src="" alt="" /></button>
                        <input type="text" placeholder='Искать самокат KUGO'/>
                        <button><img src="" alt="" /></button>
                    </form>
                    <div>
                        <button><img src="" alt="" /></button>
                        <button><img src="" alt="" /></button>
                        <button><img src="" alt="" /><p></p></button>
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
