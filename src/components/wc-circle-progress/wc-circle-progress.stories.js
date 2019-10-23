import { color, number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from '@storybook/html';
import notes from './readme.md';


storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Circle Progress', () => {
    const labelPA = 'Progress Amount';
    const defaultValuePA = 0;
    const options = {
      range: true,
      min: 0,
      max: 100,
      step: 1,
    };
    const progressAmount = number(labelPA, defaultValuePA, options);

    const labelPC = 'Progress Color';
    const defaultValuePC = '#ff00ff';
    const progressColor = color(labelPC, defaultValuePC);
    return `
    <div style="display: flex; align-items: center; flex-direction: column">
      <div style="width: 200px; height: 200px; margin: 20px;">
        <wc-circle-progress progress-color="${progressColor}" progress-amount="${progressAmount}"></wc-circle-progress>
      </div>
    </div>`
  }, { notes })