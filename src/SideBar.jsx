import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function SideBar(props) {


  return (
    <Transition.Root show={props.show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.close}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-[300px]">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={props.close}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-[#2869CF] py-6 shadow-xl">
                    <div className="px- sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        {/* Panel title */}
                      </Dialog.Title>
                    </div>
                    <div className="flex justify-center relative mt-6 flex-1 px-4 sm:px-6">
                    
                        <ul className=' text-white flex flex-col items-center w-full divide-y-2'>
                          <li onClick={props.close} className=' w-3/4 text-center pb-2'><a className='text-xl text-white' href="#about">About</a></li>
                          <li onClick={props.close} className=' w-3/4 text-center pb-2'><a className='text-xl text-white' href="#skills">Skills</a></li>
                          <li onClick={props.close} className=' w-3/4 text-center pb-2'><a className='text-xl text-white' href="#experience">Experience</a></li>
                          <li onClick={props.close} className=' w-3/4 text-center pb-2'><a className='text-xl text-white' href="#projects">Projects</a></li>
                          <li onClick={props.close} className=' w-3/4 text-center pb-2'><a className='text-xl text-white' href="#footer">Contact</a></li>
                        </ul>
                        
                        {/* Your content */}  
                        
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}