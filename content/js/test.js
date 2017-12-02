'use strict'

// es6 import
import Decimal from 'decimal.js';

var n = new Decimal(0.1);
console.log(n);
alert('decimal=' + Decimal.add(0.1, 0.2).toString() + "; math=" + (0.1 + 0.2).toString());

