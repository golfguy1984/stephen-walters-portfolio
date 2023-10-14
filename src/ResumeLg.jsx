import React from 'react'
import { Tab } from '@headlessui/react'
import { accordionData } from '../utils/content'
import { Transition } from '@headlessui/react'
import ListItem from './ListItem'
import Content from './Content'



function ResumeLg() {
    const [selectedItemId, setSelectedItemId] = React.useState(1)
    const [isActive, setIsActive] = React.useState(false)


  return (
    <div className='flex border'>
        <div className='w-1/3 border p-5'>
            <ul className='list-none' onClick={() => setIsActive(!isActive)}>
                {accordionData.map(item => (
                    <ListItem key={item.id} item={item} onClick={setSelectedItemId} />
                ))}
            </ul>
        </div>
        <div className='w-2/3'>
            <Transition
                    appear={true}
                    show={isActive}
                    enter="transition-all ease-in-out duration-500 delay-[200ms]"
                    enterFrom="opacity-0 translate-y-6"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all ease-in-out duration-500 delay-[200ms]"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                <Content content={accordionData.find(item => item.id === selectedItemId).content} />

            </Transition>
        </div>
    </div>
  )
}

export default ResumeLg