import React from "react";
import { shallow } from "enzyme";
import Form3 from "./Form3";

describe("Form3", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Form3 />);
    expect(wrapper).toMatchSnapshot();
  });
});
