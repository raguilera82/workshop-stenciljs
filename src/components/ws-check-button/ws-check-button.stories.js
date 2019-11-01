import { boolean, color, select, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/html";
import notes from "./readme.md";

storiesOf("Components/WsCheckButton", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    const isChecked = boolean("isChecked", false);
    const label = text("label", "Test check button");
    const propertiesSelected = {
      "--ws-check-button-selected-color": color("Selected color text", "blue"),
      "--ws-check-button-selected-border-color": color(
        "Selected Border Color",
        "orange"
      ),
      "--ws-check-button-selected-border-weight": select(
        "Selected Border Weight",
        ["1px", "3px", "5px"],
        "3px"
      ),
      "--ws-check-button-selected-background-color": color(
        "Selected Background Color",
        "white"
      )
    };
    setTimeout(() => {
      const el = document.querySelector("ws-check-button");
      if (el.shadowRoot) {
        const elLabel = el.shadowRoot.querySelector(".ws-label-selected");
        if (elLabel) {
          Object.keys(propertiesSelected).forEach(key =>
            elLabel.style.setProperty(key, propertiesSelected[key])
          );
        }
      }
    }, 500);

    return `
        <ws-check-button
            id-check="demo"
            name-check="demo"
            is-checked="${isChecked}"
            text="${label}"
        ></ws-check-button>
    `;
  }, { notes });