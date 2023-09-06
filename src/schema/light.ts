import { CSSSchema } from 'colorfully';
import { DefaultStyleMap } from '../style';

export const lightSchema = new CSSSchema<DefaultStyleMap>('浅色主题', 'light', {
  color: 'light',
  shadow: 'default',
  space: 'default'
});
