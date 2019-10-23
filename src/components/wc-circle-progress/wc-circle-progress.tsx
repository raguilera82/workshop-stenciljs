import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-circle-progress',
  styleUrl: 'wc-circle-progress.css',
  shadow: true
})
export class WcCircleProgress {

  @Prop() progressAmount: string = "0";
  @Prop() progressColor: string = "#2ecc71";

  render() {
    return (
      <div
        style={{
          width: `100%`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          background: `conic-gradient(${this.progressColor} ${this.progressAmount}%, 0, #ecf0f1 ${(
            100 - parseInt(this.progressAmount)
          ).toString()}%)`,
          borderRadius: `50%`
        }}
      >
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            backgroundColor: `#fff`,
            height: `80%`,
            width: `80%`,
            borderRadius: `50%`,
            boxShadow: `0px 0px 7px 0px rgba(0, 0, 0, 0.1)`
          }}
        >
          <span
            style={{
              fontFamily: `"Helvetica Neue", Helvetica, Arial, Verdana, sans-serif`,
              fontSize: `2em`,
              fontWeight: `lighter`
            }}
          >
            {this.progressAmount}
          </span>
        </div>
      </div>
    );
  }

}
