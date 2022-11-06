// make a calender UI

import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import backgroundEvent from './backgroundEvent';
import event from './event';

const localizer = momentLocalizer(moment);


const MyCalendar = (props) => (
    <div className="myCustomHeight">
        
        <Calendar
            backgroundEvents={backgroundEvent}
            localizer={localizer}
            events={event}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 400, width: 300 }}
        />
    </div>
  )

export default MyCalendar;

