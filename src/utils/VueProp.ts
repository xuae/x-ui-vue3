import Util from '@/utils/Util';

export default class VueProp {
  static oneOf(arr: Array<string>) {
    if (!Util.isArray(arr)) {
      throw new TypeError(
        '[PropTypes error]: You must provide an array as argument'
      );
    }
    const msg = `[PropTypes warn]: oneOf - value should be one of 
    ["${arr.join('", "')}"]`;

    return (value: string) => {
      const valid = arr.includes(value);
      if (!valid) {
        console.warn(msg);
      }
      return valid;
    };
  }
}
