import React from "react";

import { Button } from "../../Button/Button";

export const TimelineItem = ({ item }) => {
  return (
    <div className='timeline-item'>
      <div className='timeline-item-content'>
        <p>{item.title}</p>
        <p>{item.location}</p>
        <p>{item.description}</p>
        <p>
          {item.buttonText && <Button txt={item.buttonText} />}
        </p>
        <span className="circle" />
      </div>
    </div>
  )
}