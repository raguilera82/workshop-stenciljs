import { storiesOf } from '@storybook/html';

storiesOf('Components/WsFirst', module)
  .add('Default', () => `<ws-first></ws-first>`)
  .add(
    'With Input',
    () => `<ws-first test="John"></ws-first>`,
  );
