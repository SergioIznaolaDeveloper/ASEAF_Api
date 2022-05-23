import React from "react";
import { shallow } from "enzyme";
import Form5 from "./Form5";

describe("Form5", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Form5 />);
    expect(wrapper).toMatchSnapshot();
  });
});
