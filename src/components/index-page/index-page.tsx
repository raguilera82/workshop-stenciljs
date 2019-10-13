import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "index-page",
  styleUrl: "index-page.css",
  shadow: true
})
export class IndexPage {
  render() {
    return (
      <Host>
        <p>You are ready for following the workshop about StencilJS!!!!</p>
      </Host>
    );
  }
}