import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ws-check-button',
  styleUrl: 'ws-check-button.css',
  shadow: true
})
export class WsCheckButton {

  /**Id input checkbox */
  @Prop() idCheck: string;
  /**Value input checkbox */
  @Prop() isChecked: boolean = false;
  /**Name input checkbox */
  @Prop() nameCheck: string;
  /**Text label */
  @Prop() text: string;

  /**Fire outside value input checkbox */
  @Event() checkedChange: EventEmitter;

  render() {
    return (
      <Host>
        <input
          id={this.idCheck}
          name={this.nameCheck}
          type="checkbox"
          value={this.text}
          checked={this.isChecked}
          onChange={(event) => this.checkedChange.emit(event)}
        />
        <label
          htmlFor={this.idCheck}
          class={{
            'ws-label': true,
            'ws-label-selected': this.isChecked
          }}
        >
          <span>{this.text}</span>
          {
            this.isChecked && (
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8">
                <path fill="#307F7F" fill-rule="nonzero"
                      d="M3.336 6.312L.848 3.824 0 4.672 3.336 8l7.16-7.16L9.648 0z"/>
              </svg>
            )
          }
        </label>
      </Host>
    );
  }

}
