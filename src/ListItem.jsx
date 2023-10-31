import React from 'react'

function ListItem({ item, onClick }) {
  return (
        <li className="cursor-pointer mb-5" onClick={() => onClick(item.id)}>
            <p className=' m-0 text-base font-medium'>{item.company}</p>
            <p className=' m-0 text-base'>{item.title}</p>
        </li>
  )
}

export default ListItem