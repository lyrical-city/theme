/**
 * 样式变量
 */
export interface IStyleVariable {
  /**
   * 名称
   */
  name: string;
  /**
   * 代码
   */
  code: string;
  /**
   * 值
   */
  value: string;
}

/**
 * 样式类型
 */
export interface IStyleType {
  /**
   * 名称
   */
  name: string;
  /**
   * 代码
   */
  code: string;
  /**
   * 变量列表
   */
  variables: Array<IStyleVariable>;
}

/**
 * 样式列表
 */
export interface IStyle {
  /**
   * 名称
   */
  name: string;
  /**
   * 代码
   */
  code: string;
  /**
   * 类型列表
   */
  types: Array<IStyleType>;
}
