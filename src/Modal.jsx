import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function MyModal(props) {
const [formSubmitted,setFormSubmitted] = useState(false)

  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zjbkurb', 'template_jsxzlhr', form.current, 'itDwWhxwf5o0t_yfo')
        .then((result) => {
            setFormSubmitted(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <>
     

      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {
    props.close();
    setTimeout(() => {
      setFormSubmitted(false);
      
    }, 2000);
}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    { !formSubmitted ? "Get in touch" : "Thank You" }
                  </Dialog.Title>
                  { !formSubmitted && <div className='mb-4'>
                    <p className=' text-sm px-2'>I'd love to help you with your next project. Go ahead a leave some information and i'll get back to you as soon as possible. <br/><br/>Thanks - Stephen</p>
                  </div> }
                  { !formSubmitted && <div className="mt-2">
                    <form className="flex flex-col" ref={form} onSubmit={sendEmail}>    
                        <input className="form-inputs rounded-md" type="text" name="user_name" placeholder='Name'/>
                        <input className="form-inputs rounded-md" type="email" name="user_email" placeholder='Email'/>
                        <textarea className="form-inputs rounded-md" name="message" placeholder='Message'/>
                        {/* <input className="form-btn" type="submit" value="Send" /> */}
                       
                            <button
                            type="submit"
                            className=" mx-auto rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            // onClick={set a prop true that prop runs displays a sending message that after 2 seconds says thank you we have your info and we'll get back to you}
                            value="send"
                            >
                            Got it, thanks!
                            </button>
                       
                    </form>
                  </div> }

                  { formSubmitted && <div>
                    Thank you content here
                    have set timeout function that flips a state from true to false and false to true that shows messages.
                  </div> }
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}