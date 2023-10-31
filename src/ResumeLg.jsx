import React from 'react'
import { Tab } from '@headlessui/react'
import { accordionData } from '../utils/content'
import { Transition } from '@headlessui/react'
import ListItem from './ListItem'
import Content from './Content'



function ResumeLg() {
    const [selectedItemId, setSelectedItemId] = React.useState(1)
    const [isActive, setIsActive] = React.useState(false)

    console.log(selectedItemId)


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
                    as="div"
                    show={selectedItemId === 1}
                    enter="transition-opacity duration-500 delay-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500 delay-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Content content={accordionData[0].content} />
                </Transition>

                <Transition
                    as="div"
                    show={selectedItemId === 2}
                    enter="transition-opacity duration-500 delay-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500 delay-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Content content={accordionData[1].content} />
                </Transition>
                
        </div>
    </div>
  )
}

export default ResumeLg