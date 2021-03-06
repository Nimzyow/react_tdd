import React, { useState } from "react";

const timeIncrements = (numTimes, startTime, increment) =>
  Array(numTimes)
    .fill([startTime])
    .reduce((acc, _, i) => acc.concat([startTime + i * increment]));

const weeklyDateValues = (startDate) => {
  const midnight = new Date(startDate).setHours(0, 0, 0, 0);
  const increment = 24 * 60 * 60 * 1000;
  return timeIncrements(7, midnight, increment);
};

const dailyTimeSlots = (salonOpensAt, salonClosesAt) => {
  const totalSlots = (salonClosesAt - salonOpensAt) * 2;
  const startTime = new Date().setHours(salonOpensAt, 0, 0, 0);
  const increment = 30 * 60 * 1000;
  return timeIncrements(totalSlots, startTime, increment);
};
//console.log("total slots", totalSlots);
// Array(totalSlots) OUTPUT: array with 4 empty items
// Array(totalSlots).fill([startTime]) OUTPUT: array with 4 arrays all with the startTime.
//OUTPUT of line above:
/* 
  array total slots [
        [ 1594195200439 ],
        [ 1594195200439 ],
        [ 1594195200439 ],
        [ 1594195200439 ]
      ]
  */
// Array(totalSlots).fill([startTime]).reduce((acc, _, i) => acc.concat([startTime + i * increment])), OUTPUT: the _ in the arguemnt basically means to ignore the argument in that position.
// we get the first item in array and insert [startTime + i * increment]
// reduce will return the single value that results from teh deduction. so it wont return [startTime + i * increment] , it will return startTime + i * increment
// console.log(
//   "array total slots",
//   Array(totalSlots)
//     .fill([startTime])
//     .reduce((acc, _, i) => acc.concat([startTime + i * increment])),
// );
const toShortDate = (timestamp) => {
  const [day, , dayOfMonth] = new Date(timestamp).toDateString().split(" ");
  return `${day} ${dayOfMonth}`;
};

const toTimeValue = (timeStamp) =>
  new Date(timeStamp).toTimeString().substring(0, 5);
//the above toTimeValue accepts a timeStap like 1594800000013
//it then generates a date from that timeStap like:
// 09:00:00 GMT+0100 (British Summer Time)
//it then converts that to a string with .toTimeString()
//it then returns only the first five characters of the string with .subString(0, 5)

const RadioButtonIfAvailable = ({ availableTimeSlots, date, timeSlot }) => {
  const startsAt = mergeDateAndTime(date, timeSlot);
  if (availableTimeSlots.some((timeSlot) => timeSlot.startsAt === startsAt)) {
    return <input name="startsAt" type="radio" value={startsAt} />;
  }
  return null;
};

const mergeDateAndTime = (date, timeSlot) => {
  const time = new Date(timeSlot);
  return new Date(date).setHours(
    time.getHours(),
    time.getMinutes(),
    time.getSeconds(),
    time.getMilliseconds(),
  );
};

export const TimeSlotTable = ({
  salonOpensAt,
  salonClosesAt,
  today,
  availableTimeSlots,
}) => {
  //timeSlots is an array of time slots
  const dates = weeklyDateValues(today);
  const timeSlots = dailyTimeSlots(salonOpensAt, salonClosesAt);
  //console.log(timeSlots);

  return (
    <table id="time-slots">
      <thead>
        <tr>
          <th />
          {dates.map((d) => (
            <th key={d}>{toShortDate(d)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((timeSlot) => (
          <tr key={timeSlot}>
            <th>{toTimeValue(timeSlot)}</th>
            {dates.map((date) => (
              <td key={date}>
                <RadioButtonIfAvailable
                  availableTimeSlots={availableTimeSlots}
                  date={date}
                  timeSlot={timeSlot}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const AppointmentForm = ({
  selectableServices,
  service,
  onSubmit,
  salonOpensAt,
  salonClosesAt,
  today,
  availableTimeSlots,
}) => {
  const [appointment, setAppointment] = useState({ service });

  const handleServiceChange = ({ target }) => {
    setAppointment({ ...appointment, service: target.value });
  };

  return (
    <form id="appointment" onSubmit={() => onSubmit(appointment)}>
      <label htmlFor="service">Salon service</label>
      <select
        id="service"
        name="service"
        value={service}
        onChange={handleServiceChange}
      >
        <option />
        {selectableServices.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
      <TimeSlotTable
        salonOpensAt={salonOpensAt}
        salonClosesAt={salonClosesAt}
        today={today}
        availableTimeSlots={availableTimeSlots}
      />
    </form>
  );
};

AppointmentForm.defaultProps = {
  availableTimeSlots: [],
  today: new Date(),
  salonOpensAt: 9,
  salonClosesAt: 19,
  selectableServices: [
    "Cut",
    "Blow-dry",
    "Cut & Color",
    "Beard trim",
    "Cut & beard trim",
    "Extensions",
  ],
};
