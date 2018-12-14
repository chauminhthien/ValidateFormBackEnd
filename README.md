# Validate Form Backend for nodejs

## 1. Using

````javascript
var Validate        = require('./libs/validate');
````

## 2. Validate Data

````javascript
  let rule = {
    phone : { type : 'phone' },
    name : { type : 'string', notin: ['11111'] },
  }
  let data = { phone: '0963501009', name: '11111' };
  let valid = Validate.validDataForm(rule, data);
````

## 3. Result

````json
  { 
    "error"           : {},
    "data"            : { "phone": "0963501008", "name": "11111" },
    "isNum"           : ["Function": "isNum"],
    "isPhone"         : ["Function": "isPhone"],
    "isInt"           : ["Function":"isInt"],
    "checkRuleRange"  : ["Function": "checkRuleRange"],
    "validInteger"    : ["Function": "validInteger"],
    "validatePhone"   : ["Function": "validatePhone"],
    "validateString"  : ["Function": "validateString"],
    "validDataForm"   : ["Function": "validDataForm"] }
````

## 4. Rule parameter
  key this is name form data,

### + Rule String

* Syntax : { type : 'string', min: 3, max: 5 }

* option of type string

--- min,

Example : { name: { type : 'string', min: 3} }

--- max,

Example : { name: { type : 'string', max: 5} }

--- in,

Example : { name: { type : 'string', in: [3, 1]} }

--- notin,

Example : { name: { type : 'string', notin: [3, 1]} }

--- base,

Example : { name: { type : 'string', base: /^1111$/} }


### + Rule Phone

* Syntax : { type : 'phone' }

Example : { name: { type : 'phone' } }

### + Rule Int

* Syntax : { type : 'int', min: 3, max: 5 }

* option of type int

--- min,

Example : { point: { type : 'int', min: 3} }

--- max,

Example : { point: { type : 'int', max: 5} }

--- in,

Example : { point: { type : 'int', in: [3, 1]} }

--- notin,

Example : { point: { type : 'int', notin: [3, 1]} }

### + Rule Email

* Syntax : { type : 'email', min: 3, max: 5 }

* option of type email

--- min,

Example : { email: { type : 'email', min: 3} }

--- max,

Example : { email: { type : 'email', max: 5} }

--- in,

Example : { email: { type : 'email', in: [3, 1]} }

--- notin,

Example : { email: { type : 'email', notin: [3, 1]} }

--- base,

Example : { email: { type : 'email', base: /^1111$/} }

### + Rule Array

* Syntax : { type : 'arr', min: 3, max: 5 }

* option of type Array

--- min,

Example : { Array: { type : 'email', min: 3} }

--- max,

Example : { Array: { type : 'email', max: 5} }

### + Rule Bool

* Syntax : { type : 'bool',}

Example : { bool: { type : 'bool'} }


