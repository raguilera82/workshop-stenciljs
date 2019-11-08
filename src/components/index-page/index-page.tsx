import { Component, Element, h, Host, Listen, State } from "@stencil/core";
import { HTMLStencilElement } from "@stencil/core/internal";

@Component({
  tag: "index-page",
  styleUrl: "index-page.css",
  shadow: true
})
export class IndexPage {

  @State() messageFromChild: string;

  @Element() element: HTMLStencilElement;

  @Listen('reply')
  onReply(ev: CustomEvent) {
    this.messageFromChild = ev.detail;
  }

  tomaPaga = async () => {
    const child = this.element.shadowRoot.querySelector('cjs-child');
    await child.setPaga(5);
  }

  render() {
    return (
      <Host>
        <cjs-child messageFromFather="I am your father"></cjs-child>
        <p>Message from child: {this.messageFromChild}</p>
        <button onClick={this.tomaPaga}>Toma paga</button>
      </Host>
    );
  }
}