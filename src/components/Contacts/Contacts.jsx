import icons from '../../img/symbol-defs.svg'
import { useState } from "react";
import { Container } from '../Container/Container';
import style from "./Contacts.module.css"
export const Contacts = () => {
    const [formData, setFormData] = useState([])
    const [client, setClient] = useState({
        name: '',
        phone: '',
        message: '',
    })
    const handleSubmit = (event) => {
        event.preventDefault()
        const clientData = {
            name: event.target.elements.name.value,
            phone: event.target.elements.phone.value,
            message: event.target.elements.message.value,
        }
        if (!clientData.name || !clientData.phone) {
            alert("Заповніть всі обов'язкові поля")
        }
        else {
            setClient(clientData)
            formData.push(client)
            alert("Дякую за реєстрацію!!!")
        }

    }
    console.log(client)

    return (
        <section className={style.footerContainer}>
            <Container>
                <div className={style.footerBooking}>
                    <h2 className={style.footerTitle}>Online-booking</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={style.footerInputs}>
                            <div className={style.wrapInput}>
                                <input placeholder="NAME*" type="text" name="name" className={style.footerInput} />
                                <label className={style.formInputTitle}>NAME*</label>
                            </div>
                            <div className={style.wrapInput}>

                                <input placeholder="PHONE*" type="text" name="phone" className={style.footerInput} />
                                <label className={style.formInputTitle}>PHONE*</label>
                            </div>
                        </div>
                        <div className={style.wrapInput}>

                            <input placeholder="MESSAGE" type="text" name="message" className={style.footerInput} />
                            <label className={style.formInputTitle}>MESSAGE</label>
                        </div>
                        <button type="submit" className={style.footerButton}>send</button>
                    </form>
                </div>
                <div className={style.footerContacts}>
                    <h2 className={style.footerTitle}>Contacts</h2>
                    <address>
                        <ul className={style.footerList}>
                            <li>
                                <svg className={style.footerIcons}>
                                    <use href={icons + '#icon-map-pin'}></use>
                                </svg>
                                <a href="https://www.google.com.ua" className={style.footerContact}>
                                    st. Vasylkivska, 7A Kiev, 08132
                                </a>
                            </li>
                            <li>
                                <svg className={style.footerIcons}>
                                    <use href={icons + '#icon-phone'}></use>
                                </svg>
                                <a href="tel:+380441111111" className={style.footerContact}>+38 044 111 11 11</a>
                            </li>
                            <li>
                                <svg className={style.footerIcons}>
                                    <use href={icons + '#icon-mail'}></use>
                                </svg>
                                <a href="mailto:barbershop@email.com" className={style.footerContact}>barbershop@email.com</a>
                            </li>
                        </ul>
                    </address>
                    <p className={style.footerHours}>Working hours</p>
                    <p className={style.footerDays}>Every day from 9:00 to 22:00</p>
                </div>
            </Container>
        </section>
    )
}
