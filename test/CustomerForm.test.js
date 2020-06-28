import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import { createContainer } from "./domManipulators";
import { CustomerForm } from "../src/CustomerForm";

describe("CustomerForm", () => {
  let render, container;

  const form = (id) => container.querySelector(`form[id="${id}"]`);

  const expectToBeInputFieldOfTypeText = (formElement) => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual("INPUT");
    expect(formElement.type).toEqual("text");
  };

  const itRendersAsATextBox = (fieldName) =>
    it("renders as a text box", () => {
      render(<CustomerForm />);
      expectToBeInputFieldOfTypeText(field(fieldName));
    });

  const itIncludesTheExistingValue = (fieldName) =>
    it("includes the existing value ", () => {
      render(<CustomerForm {...{ [fieldName]: "value" }} />);
      expect(field(fieldName).value).toEqual("value");
    });

  const field = (name) => form("customer").elements[name];

  const ItRendersALabel = (fieldName, labelName) =>
    it("renders a label", () => {
      render(<CustomerForm />);
      expect(labelFor(fieldName)).not.toBeNull();
      expect(labelFor(fieldName).textContent).toEqual(labelName);
    });

  const itAssignsAnIdThatMatchesTheLabelId = (fieldName) =>
    it("assigns an id that matches the label id", () => {
      render(<CustomerForm />);
      expect(field(fieldName).id).toEqual(fieldName);
    });

  const itSubmitsExistingValue = (fieldName, value) =>
    it("submits existing value", async () => {
      expect.hasAssertions();
      render(
        <CustomerForm
          {...{ [fieldName]: value }}
          onSubmit={(props) => expect(props[fieldName]).toEqual(value)}
        />,
      );
      await ReactTestUtils.Simulate.submit(form("customer"));
    });

  const itSubmitsNewValue = (fieldName, value) =>
    it("saves new value when submitted", async () => {
      expect.hasAssertions();
      render(
        <CustomerForm
          {...{ [fieldName]: "existingValue" }}
          onSubmit={(props) => expect(props[fieldName]).toEqual(value)}
        />,
      );
      await ReactTestUtils.Simulate.change(field(fieldName), {
        target: { value: value },
      });
      await ReactTestUtils.Simulate.submit(form("customer"));
    });

  const labelFor = (formElement) =>
    container.querySelector(`label[for="${formElement}"]`);

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  it("renders a form", () => {
    render(<CustomerForm />);
    expect(form("customer")).not.toBeNull();
  });

  describe("first name field", () => {
    itRendersAsATextBox("firstName");
    itIncludesTheExistingValue("firstName");
    ItRendersALabel("firstName", "First name");
    itAssignsAnIdThatMatchesTheLabelId("firstName");
    itSubmitsExistingValue("firstName", "firstName");
    itSubmitsNewValue("firstName", "firstName");
  });
  describe("last name field", () => {});
  describe("phone number field", () => {});
});
