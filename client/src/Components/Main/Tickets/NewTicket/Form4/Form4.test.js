import React from "react";
import { shallow } from "enzyme";
import Form4 from "./Form4";

describe("Form4", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Form4 />);
    expect(wrapper).toMatchSnapshot();
  });
});
