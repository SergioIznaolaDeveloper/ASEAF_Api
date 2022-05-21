import React from "react";
import { shallow } from "enzyme";
import NoDelete from "./NoDelete";

describe("NoDelete", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NoDelete />);
    expect(wrapper).toMatchSnapshot();
  });
});
