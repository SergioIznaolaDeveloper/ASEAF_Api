import React from "react";
import { shallow } from "enzyme";
import Ticket from "./Ticket";

describe("Ticket", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Ticket />);
    expect(wrapper).toMatchSnapshot();
  });
});
