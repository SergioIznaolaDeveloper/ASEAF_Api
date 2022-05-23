import React from "react";
import { shallow } from "enzyme";
import NewTicket from "./NewTicket";

describe("NewTicket", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewTicket />);
    expect(wrapper).toMatchSnapshot();
  });
});
