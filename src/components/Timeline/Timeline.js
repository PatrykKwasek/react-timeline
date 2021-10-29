import React from "react";

import { TimelineItem } from "./TimelineItem/TimelineItem";

import { timelineElements } from "../../data/timelineElements";

export const Timeline = () => {
  return (
    <div className='timeline-container'>
      {timelineElements.map((item) => (
        <TimelineItem
          item={item}
          key={`Timeline item-${item.id}`}
        />
      ))}
    </div>
  )
}