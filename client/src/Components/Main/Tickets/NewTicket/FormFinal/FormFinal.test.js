import React from "react";
import { shallow } from "enzyme";
import FormFinal from "./FormFinal";

describe("FormFinal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormFinal />);
    expect(wrapper).toMatchSnapshot();
  });
});
