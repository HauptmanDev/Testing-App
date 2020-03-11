import style from './Contacts.module.css';
import React from 'react'


function ContactsPage() {
    return (
        <div className={style.contacts}>
            <div className={style.text}>
                <span>Контакты</span>
                <span> Ул. Сурганова, 2, каб. 64 и 65, 1 этаж</span>
            </div>
            <div className={style.text}>
                Чтобы ЗАПИСАТЬСЯ на курс или УЗНАТЬ СТОИМОСТЬ или ПРОКОНСУЛЬТИРОВАТЬСЯ за чашкой чаю, просто НАПИШИ В
                ЛИЧКУ VK
                или ПОЗВОНИ +375 (29) 562-76-54 (МТС, viber, telegram, whatsApp) Екатерина
            </div>
        </div>
    );
}

export default ContactsPage;
