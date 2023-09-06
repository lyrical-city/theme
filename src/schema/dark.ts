import { CSSSchema } from 'colorfully';
import { DefaultStyleMap } from '../style';

export const darkSchema = new CSSSchema<DefaultStyleMap>('深色主题', 'dark', {
  color: 'dark',
  shadow: 'default',
  space: 'default'
});
