const today = new Date();

const at = (hours) => today.setHours(hours, 0);

export const sampleAppointments = [
  { startsAt: today.setHours(9), customer: { firstName: "Charlie" } },
  { startsAt: today.setHours(10), customer: { firstName: "Frankie" } },
  { startsAt: today.setHours(11), customer: { firstName: "Casey" } },
  { startsAt: today.setHours(12), customer: { firstName: "Ashley" } },
  { startsAt: today.setHours(13), customer: { firstName: "Jordan" } },
  { startsAt: today.setHours(14), customer: { firstName: "Jay" } },
  { startsAt: today.setHours(15), customer: { firstName: "Alex" } },
  { startsAt: today.setHours(16), customer: { firstName: "Jules" } },
  { startsAt: today.setHours(17), customer: { firstName: "Stevie" } },
];
