import React from "react";
import { shallow } from "enzyme";
import Tickets from "./Tickets";

describe("Tickets", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Tickets />);
    expect(wrapper).toMatchSnapshot();
  });
});
