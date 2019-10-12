import { Component, h, Host, State } from "@stencil/core";

@Component({
  tag: "index-page",
  styleUrl: "index-page.css",
  shadow: true
})
export class IndexPage {
  @State() checkToggle: boolean = false;

  onChangeCheck = () => {
    this.checkToggle = !this.checkToggle;
  };

  render() {
    return (
      <Host>
        <ws-check-button
          idCheck="demo"
          nameCheck="demo"
          isChecked={this.checkToggle}
          text="Texto del button"
          onCheckedChange={this.onChangeCheck}
        ></ws-check-button>
      </Host>
    );
  }
}