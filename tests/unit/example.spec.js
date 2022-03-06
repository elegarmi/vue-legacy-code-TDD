// Imports
import Vuetify from "vuetify";

// Utilities
import { createLocalVue, mount } from "@vue/test-utils";

// Components
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(HelloWorld, {
      localVue,
      vuetify,
      propsData: { msg },
    });

    expect(wrapper.text()).toMatch(msg);
  });

  it("renders component", () => {
    const wrapper = mount(HelloWorld, {
      localVue,
      vuetify,
    });

    expect(wrapper.exists()).toBe(true);
  });
});
