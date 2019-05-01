import { shallow } from "enzyme";
import React from "react";
import { AccessoryBox } from "../AccessoryBox";

const props = {
  userAuth: { loggedIn: true },
  accessories: {
    custom: [[{ id: 0 }, { id: 4 }], { id: 1 }],
    accessoryPlan: "custom",
  },
  dayIndex: 0,
  userSettings: { standard: "5day" },
};
const wrapper = shallow(<AccessoryBox {...props} />);

describe("AccessoryBox", () => {
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("renders button only when user is logged in", () => {
    let wrapper = shallow(<AccessoryBox {...props} />);
    expect(wrapper.find("button")).toHaveLength(1);
    const loggedOutProps = { ...props, userAuth: { loggedIn: false } };
    wrapper = shallow(<AccessoryBox {...loggedOutProps} />);
    expect(wrapper.find("button")).toHaveLength(0);
  });
  fit("new blank accessory row is generated on button click", () => {
    expect(wrapper.find("Connect(AccessoryRow)").get(0).props).toHaveProperty("id");
    expect(wrapper.find("Connect(AccessoryRow)")).toHaveLength(2);
    wrapper.find("button").simulate("click");
    expect(wrapper.find("Connect(AccessoryRow)")).toHaveLength(3);
    expect(wrapper.find("Connect(AccessoryRow)").get(2).props).not.toHaveProperty("id");
    // console.log(wrapper.debug());
  });
});
