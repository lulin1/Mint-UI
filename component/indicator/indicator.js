// // ES6 mudule
import Indicator from 'vue-indicator';
// CommonJS
const Indicator = require('vue-indicator').default;
//Open an indicator:
Indicator.open();
//Open an indicator with a string:
Indicator.open('Loading...');
//Open an indicator with an object:
Indicator.open({ text:'Loading...', spinnerType: 'fading-circle' });
//Then close it:
Indicator.close();