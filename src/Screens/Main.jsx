import React from 'react'
import Inputs from '../Inputs/Inputs.jsx'

import '../Screens/main.scss'

const Main = () => {

    return (
        <section className='main-mob'>
            <div className="container">
                <div className="container__items">
                    <div className="container__items__text">
                        <h1>СОСО</h1>
                    </div>
                    <div className="container__items__input">
                        <Inputs className="container__items__input-name" placeholder='Введите имя' />
                        <Inputs className="container__items__input-surname" placeholder='Введите фамилию' />
                        <Inputs className="container__items__input-pass" placeholder='Введите пароль' />
                        <Inputs className="container__items__input-rep" placeholder='Повторно введите пароль' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main