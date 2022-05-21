import React from "react";
import { shallow } from "enzyme";
import Filtros from "./Filtros";

describe("Filtros", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Filtros />);
    expect(wrapper).toMatchSnapshot();
  });
});
