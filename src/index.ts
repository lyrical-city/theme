import { Colorfully } from 'colorfully';
import { defaultSchemaMap } from './schema';
import { defaultStyleMap } from './style';

const theme = new Colorfully({ styleMap: defaultStyleMap, schemaMap: defaultSchemaMap });

export default theme;
