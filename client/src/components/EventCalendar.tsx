"use client"

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events =[
    {
        id:1,
        title:"Lorem Ipsum Dolor.",
        time:"12:00PM - 2:00PM",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id:2,
        title:"Lorem Ipsum Dolor.",
        time:"2:00PM - 4:00PM",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id:3,
        title:"Lorem Ipsum Dolor.",
        time:"4:00PM - 6:00PM",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src="/moreDark.png" alt="learn-more" width={20} height={20} className=''/>
      </div>
      <div className="flex flex-col gap-4">
            {events.map(event=>(
                <div key={event.id} className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaYellow">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold text-black">{event.title}</h1>
                        <span className="text-sm text-gray-500">{event.time}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">{event.description}</p>
                </div>
        
            ))}
      </div>
    </div>
  );
}

export default EventCalendar;