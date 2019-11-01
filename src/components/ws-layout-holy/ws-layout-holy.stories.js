import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Layouts', module)
    .add('Holy', () => `
        <ws-layout-holy>
            <div slot="header">Contenido header</div>
            <div slot="nav">Contenido nav</div>
            <div slot="aside">Contenido aside</div>
            <div slot="section">Contenido section</div>
            <div slot="footer">Contenido footer</div>
        </ws-layout-holy>
  `, { notes })