import React, { useState } from "react";
export const CustomerForm = ({
  firstName,
  lastName,
  phoneNumber,
  onSubmit,
}) => {
  const [customer, setCustomer] = useState({
    firstName,
    lastName,
    phoneNumber,
  });

  const handleChange = ({ target }) => {
    setCustomer({
      ...customer,
      [target.name]: target.value,
    });
  };

  return (
    <form id="customer" onSubmit={() => onSubmit(customer)}>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleChange}
        readOnly
      />
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleChange}
        readOnly
      />
      <label htmlFor="phoneNumber">Phone number</label>
      <input
        id="phoneNumber"
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleChange}
        readOnly
      />
      <input type="submit" value="Add" />
    </form>
  );
};
