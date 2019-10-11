import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ws-first',
  styleUrl: 'ws-first.css',
  shadow: true,
})
export class WsFirst {
  /**
   * A test prop
   */
  @Prop() test: string = 'Hello World';

  render() {
    return <div class="ws-first">{this.test}</div>;
  }
}
