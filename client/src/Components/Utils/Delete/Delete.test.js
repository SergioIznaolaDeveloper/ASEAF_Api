import React from "react";
import { shallow } from "enzyme";
import Delete from "./Delete";

describe("Delete", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Delete />);
    expect(wrapper).toMatchSnapshot();
  });
});
