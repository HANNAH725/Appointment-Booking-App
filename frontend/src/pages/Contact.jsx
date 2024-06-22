import React from 'react';



const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">Got a technical issue? Want to send feedback?</p>
        <form action="#" className='space-y-8'>
          <div>
            <label htmlFor="email" className='from__label'>Your Email</label>
            <input type="email" id="email" placeholder='example@gmail.com' className='form__input mt-1'/>
            <label htmlFor="subject" className='from__label' id='subject'>Enter Message</label>
            <input type="email" id="email" placeholder='Let us know how we can help you' className='form__input mt-1'/>
            <div className="sm:col-span-2">
              <label htmlFor="message" className='from__label'>Enter Your Message</label>
              <textarea rows="6" id="message" placeholder='Leave a Comment..' className='form__input mt-1'></textarea>
            </div>
            <button className="btn rounded sm:w-fit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

