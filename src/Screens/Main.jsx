import React, { useState } from 'react'


import '../Screens/main.scss'

const Main = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatPassword: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        repeatPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
        validateField(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm()
        if (!hasErrors()) {
            console.log('Отправка формы прошла успешна')
        }
    }

    const validateField = (name, value) => {
        let error = ''

        switch (name) {
            case 'email':
                error = value.trim() === '' ?
                    'Email cannot be empty' : ''
                break;
            case 'password':
                error = value.trim() === '' ?
                    'Password cannot be empty' : ''
                break;
            case 'repeatPassword':
                error = value.trim() === '' ?
                    'Email cannot be empty' :
                    formData.password !== value ?
                        'Пароль не совпадает' : ''
                break;
            default:
                break;

        }
        setErrors({
            ...errors,
            [name]: error,
        })
    }

    const validateForm = () => {
        for (const key in formData) {
            validateField(key, formData[key]);
        }
    };

    const hasErrors = () => {
        for (const key in errors) {
            if (errors[key] !== '') {
                return true
            }
        }
        return false;
    }

    return (
        <section className='main-mob'>
            <div className="container">
                <div className="container__items">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input className='container__items__text' type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Введите Email' />
                            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                        </div>
                        <div>
                            <input className='container__items__text' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Введите пароль' />
                            {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                        </div>
                        <div>
                            <input className='container__items__text' type="password" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} placeholder='Повторно введите пароль' />
                            {errors.repeatPassword && <div style={{ color: 'red' }}>{errors.repeatPassword}</div>}
                        </div>
                        <button className='container__items__button' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );

}

export default Main