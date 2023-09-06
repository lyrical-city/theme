import { CSSSchema } from 'colorfully';
import { DefaultStyleMap } from '../style';

export const defaultSchema = new CSSSchema<DefaultStyleMap>('默认主题', 'default', {
  color: 'default',
  shadow: 'default',
  space: 'default'
});
