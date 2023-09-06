import { CSSStyle } from 'colorfully';
import { color } from './color';
import { shadow } from './shadow';
import { space } from './space';

export type DefaultStyleMap<T = typeof defaultStyleMap> = {
  [K in keyof T]: T[K] extends CSSStyle<infer V, infer _Map, infer _styleMap> ? V : void;
};

export const defaultStyleMap = { color, space, shadow };
