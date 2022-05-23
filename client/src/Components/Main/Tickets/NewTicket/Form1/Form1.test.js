import React from "react";
import { shallow } from "enzyme";
import Form1 from "./Form1";

describe("Form1", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Form1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
