import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Page/Index', module)
  .add('Index', () => `<index-page></index-page>`, {notes})