import { Component, h } from '@stencil/core';

@Component({
  tag: 'ws-layout-holy',
  styleUrl: 'ws-layout-holy.css',
  shadow: true
})
export class WsLayoutHoly {

  render() {
    return (
      <div id="holy">
        <header id="holy-header" role="banner">
          <slot name="header" />
        </header>
        <nav id="holy-nav">
          <slot name="nav" />
        </nav>
        <main id="holy-content" role="main">
          <slot name="section" />
        </main>
        <aside id="holy-aside" role="complementary">
          <slot name="aside" />
        </aside>
        <footer id="holy-footer" role="contentinfo">
          <slot name="footer" />
        </footer>
      </div>
    );
  }

}
