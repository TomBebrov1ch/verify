import React from 'react'
import Inputs from '../Inputs/Inputs.jsx'
import Pass from '../Inputs/Pass.jsx'
import Reg from '../Buttons/Reg.jsx'

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
                        <Inputs className="container__items__input-r" placeholder='Введите имя' />
                        <Inputs className="container__items__input-r" placeholder='Введите фамилию' />
                        <Pass className="container__items__input-r" placeholder='Введите пароль' />
                        <Pass className="container__items__input-r" placeholder='Повторно введите пароль' />
                        <Reg className="container__items__button" Зарегистрироваться />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main