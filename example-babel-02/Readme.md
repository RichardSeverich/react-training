# babel

* Babel is a tool.
* It is used convert (ES6+) code to a compatible with the browser.
* Translates your (ES6+) JS code into (ES5) ones that browser (front-end) or Node.js (back-end) understands.


(ES6+) Sintax:
``` 
import moment from 'moment'; 
export default () => moment().format("YYYY Do MM");
```

// (ES5) Sintax
```
const moment = require('moment')
function getDateString() {
  const date = moment();
  return date.format("YYYY Do MM");
}
exports.default = getDateString;
``` 

##  Deploy

0. install node v14.17.1
1. npm install
2. npm run build
3. open index.html
