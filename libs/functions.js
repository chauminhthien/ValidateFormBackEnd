'use strict';

const Functions = {
  ucfirst: str => {
    if (!str || str.length === 0 || typeof str !== 'string') return '';
    return str[0].toUpperCase() + str.slice(1);
  },
  isFun: fn => fn instanceof Function,
  isExistFun: (it, fun) => !!it && !!fun && fun in it && Functions.isFun(it[fun]),
  isEmpty: input => !input || ('push' in input && input.length === 0) || Object.keys(input).length === 0,
  isArr: input => !!input && 'push' in input,
  isObj: input => !!input && 'delete' in input && Object.keys(input).length > 0,
};

module.exports = Functions;
