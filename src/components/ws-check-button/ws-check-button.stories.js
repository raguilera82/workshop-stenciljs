import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Components/WsCheckButton', module)
  .add('With checked', () => `<ws-check-button 
                          id-check="demo1" 
                          name-check="demo1"
                          is-checked="true"
                          text="Texto del botón"
                          ></ws-check-button>`, {notes})
  .add(
    'With not checked',
    () => `<ws-check-button 
    id-check="demo2" 
    name-check="demo2"
    is-checked="false"
    text="Texto del botón"
    ></ws-check-button>`, {notes}
  );