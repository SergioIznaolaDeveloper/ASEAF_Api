import React from "react";
import { shallow } from "enzyme";
import Form2 from "./Form2";

describe("Form2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Form2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
