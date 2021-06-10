/**
 * JavaScript 日期处理类库
 * http://momentjs.cn/
 *
 * @dependency moment
 */
import moment from 'moment';

/**
 * JavaScript 实用工具库
 * https://www.lodashjs.com/
 *
 * @dependency lodash
 */
const lodash = require('lodash');

/**
 * 工具类
 */
export default class Util {
  static _ = lodash;

  /**
   * 检测是否是由 {} 或者 new Object() 创建的对象
   *
   * @param value
   */
  static isObject(value: any) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }

  /**
   * 检测是否是数组
   *
   * @param value
   */
  static isArray(value: any) {
    // return Object.prototype.toString.call(value) === '[object Array]';
    return Array.isArray(value);
  }

  /**
   * 检测是否是纯数字
   * NaN 的类型是 number，值是 NaN
   *
   * @param value
   */
  static isNumber(value: any) {
    return typeof value === 'number' && !Number.isNaN(value);
  }

  /**
   * 检测是否是函数
   *
   * @param value
   */
  static isFunction(value: any) {
    return typeof value === 'function';
  }

  /**
   * 检测是否是空值、空数组、空对象
   *
   * @param value
   */
  static isNull(value: any) {
    if (value === null || value === undefined || value === '') {
      return true;
    } else if (this.isArray(value) && value.length === 0) {
      return true;
    } else if (this.isObject(value) && Object.keys(value).length === 0) {
      return true;
    }
    return false;
  }

  /**
   * 深度克隆
   */

  /**
   * 数组排序
   * (对象数组，可按照某一属性值排序)
   *
   * @param value Array
   * @param key String
   * @param order 'ASC': 升序, 'DESC': 降序, Function: 排序函数
   */
  static sort<T = any>(
    value: Array<T>,
    key: string,
    order: 'ASC' | 'DESC' | Function = 'ASC'
  ) {
    if (!this.isArray(value)) {
      return null;
    }
    value.sort((prev: T, next: T) => {
      let data;
      if (typeof order === 'function') {
        data = order(prev, next);
      } else {
        if (this.isObject(prev) && this.isObject(next)) {
          if (!this.isNull(key)) {
            // @ts-ignore
            const a = prev[key];
            // @ts-ignore
            const b = next[key];
            data = order === 'ASC' ? a < b : a > b;
          }
        } else if (!this.isArray(prev) && !this.isArray(next)) {
          data = order === 'ASC' ? prev < next : prev > next;
        }
      }
      return data ? -1 : 0;
    });
    return value;
  }

  /**
   * 格式化日期
   *
   * @param date String | Date | Moment
   * @param format String，具体请查看 http://momentjs.cn/docs/#/displaying/format/
   */
  static formatDate(
    date: string | Date | moment.Moment,
    format: string = 'YYYY-MM-DD'
  ) {
    if (this.isNull(date)) {
      return null;
    }
    return moment(date).format(format);
  }

  /**
   * 获取文件后缀
   *
   * @param fileName string
   */
  static getFileSuffix(fileName: string) {
    if (this.isNull(fileName)) {
      return null;
    }
    return fileName.split('.').pop()?.toLowerCase() || null;
  }

  /**
   * 下载文件
   *
   * @param file Blob
   * @param fileName string
   */
  static downloadFile(file: Blob, fileName: string) {
    try {
      const blob = new Blob([file]);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = URL.createObjectURL(blob);
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(a.href);
      a.remove();
      return true;
    } catch (e) {
      // console.error(e);
      return false;
    }
  }
}
