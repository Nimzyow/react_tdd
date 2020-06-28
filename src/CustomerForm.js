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

  const handleChangeFirstName = ({ target }) => {
    setCustomer({
      ...customer,
      firstName: target.value,
    });
  };

  const handleChangelastName = ({ target }) => {
    setCustomer({
      ...customer,
      lastName: target.value,
    });
  };

  const handleChangePhoneNumber = ({ target }) => {
    setCustomer({
      ...customer,
      phoneNumber: target.value,
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
        onChange={handleChangeFirstName}
        readOnly
      />
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleChangelastName}
        readOnly
      />
      <label htmlFor="phoneNumber">Phone number</label>
      <input
        id="phoneNumber"
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleChangePhoneNumber}
        readOnly
      />
    </form>
  );
};
