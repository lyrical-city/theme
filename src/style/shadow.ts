import { CSSStyle } from 'colorfully';

export const shadow = new CSSStyle('阴影', 'shadow', {
  default: {
    name: '默认',
    code: 'default',
    variables: {
      '--shadow-1-up': {
        name: '一级向上',
        code: '--shadow-1-up',
        value: '0 -1px 2px -2px rgba(0, 0, 0, 16%), 0 -3px 6px 0 rgba(0, 0, 0, 12%), 0 -5px 12px 4px rgba(0, 0, 0, 9%)'
      },
      '--shadow-1-down': {
        name: '一级向下',
        code: '--shadow-1-down',
        value: '0 1px 2px -2px rgba(0, 0, 0, 16%), 0 3px 6px 0 rgba(0, 0, 0, 12%), 0 5px 12px 4px rgba(0, 0, 0, 9%)'
      },
      '--shadow-1-left': {
        name: '一级向左',
        code: '--shadow-1-left',
        value: '-1px 0 2px -2px rgba(0, 0, 0, 16%), -3px 0 6px 0 rgba(0, 0, 0, 12%), -5px 0 12px 4px rgba(0, 0, 0, 9%)'
      },
      '--shadow-1-right': {
        name: '一级向右',
        code: '--shadow-1-right',
        value: '1px 0 2px -2px rgba(0, 0, 0, 16%), 3px 0 6px 0 rgba(0, 0, 0, 12%), 5px 0 12px 4px rgba(0, 0, 0, 9%)'
      },
      '--shadow-2-up': {
        name: '',
        code: '--shadow-2-up',
        value: '0 -3px 6px -4px rgba(0, 0, 0, 12%), 0 -6px 16px 0  rgba(0, 0, 0, 8%), 0 -9px 28px 8px rgba(0, 0, 0, 5%)'
      },
      '--shadow-2-down': {
        name: '',
        code: '--shadow-2-down',
        value: '0 3px 6px -4px rgba(0, 0, 0, 12%), 0 6px 16px 0  rgba(0, 0, 0, 8%), 0 9px 28px 8px rgba(0, 0, 0, 5%)'
      },
      '--shadow-2-left': {
        name: '',
        code: '--shadow-2-left',
        value:
          '-3px 0 6px -4px rgba(0, 0, 0, 12%), -6px 0 16px 0  rgba(0, 0, 0, 8%), -9px 0  28px 8px rgba(0, 0, 0, 5%)'
      },
      '--shadow-2-right': {
        name: '',
        code: '--shadow-2-right',
        value: '3px 0 6px -4px rgba(0, 0, 0, 12%), 6px 0  16px 0  rgba(0, 0, 0, 8%), 9px 0  28px 8px rgba(0, 0, 0, 5%)'
      },
      '--shadow-3-up': {
        name: '',
        code: '--shadow-3-up',
        value:
          '0 -6px 16px -8px rgba(0, 0, 0, 8%), 0 -9px 28px 0  rgba(0, 0, 0, 5%), 0 -12px 48px 16px rgba(0, 0, 0, 3%)'
      },
      '--shadow-3-down': {
        name: '',
        code: '--shadow-3-down',
        value: '0 6px 16px -8px rgba(0, 0, 0, 8%), 0 9px 28px 0  rgba(0, 0, 0, 5%), 0 12px 48px 16px rgba(0, 0, 0, 3%)'
      },
      '--shadow-3-left': {
        name: '',
        code: '--shadow-3-left',
        value:
          '-6px 0 16px -8px rgba(0, 0, 0, 8%), -9px 0  28px 0  rgba(0, 0, 0, 5%), -12px 0  48px 16px rgba(0, 0, 0, 3%)'
      },
      '--shadow-3-right': {
        name: '',
        code: '--shadow-3-right',
        value:
          '6px 0  16px -8px rgba(0, 0, 0, 8%), 9px 0  28px 0  rgba(0, 0, 0, 5%), 12px 0  48px 16px rgba(0, 0, 0, 3%)'
      }
    }
  }
});
