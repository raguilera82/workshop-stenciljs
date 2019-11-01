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
        <p>You are ready for following the workshop about StencilJS!!!!</p>
      </Host>
    );
  }
}