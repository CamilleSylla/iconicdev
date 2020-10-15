import React from 'react'
import emailjs from 'emailjs-com'


//assets
import Mail from '../../../assets/img/Mail.svg'
export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_a0yhol6', e.target, 'user_9Mwl1WzLHnTGVe4ZXHEMI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="wrapper">
      <div className="contact-form">
        <form className="input-fields" onSubmit={sendEmail}>
            <input type="text" className="input" placeholder="Nom" name="name"/>
            <input type="text" className="input" placeholder="Adresse Email" name="mail"/>
            <input type="text" className="input" placeholder="N° de téléphone" name="phone"/>
            <input type="text" className="input" placeholder="Sujet" name="Subject"/>
            <input type="text" className="msg" placeholder="Votre Message" name="msg"/>
            <input type="submit" class="form-btn" value="Envoyer" name="Subject"/>
        </form>
      </div>
    </div>
  )
}