import { Component, Event, EventEmitter, h, Host, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'cjs-child',
  styleUrl: 'cjs-child.css',
  shadow: true
})
export class CjsChild {

  @Prop() messageFromFather: string;

  @Event() reply: EventEmitter;

  @State() paga: number = 0; 

  @Method()
  async setPaga(money: number) {
    this.paga = this.paga + money;
  }

  componentDidLoad() {
    this.reply.emit('Noooooooooooooo');
  }

  render() {
    return (
      <Host>
        <p>Money: {this.paga}</p>
        <p>{this.messageFromFather}</p>
      </Host>
    );
  }

}
