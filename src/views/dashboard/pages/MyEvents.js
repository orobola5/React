import React from 'react'
import "./myEvent.css"

const MyEvents = () => {
  return (
    <div>
      <div className='my-events-header'>
        <div className='my-events-header-filter'>
          <input type="date" />
        </div>
      <div className='my-event-header-search'>
        <input type="search" />

      </div>
      <button>Create Event</button>
      </div>
    </div>
  )
}

export default MyEvents