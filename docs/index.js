const basicInfo = require('./basicInfo');
const task = require('./task.js');
const components = require('./components');
module.exports = {
    ...basicInfo,
    ...task,
    ...components
};
