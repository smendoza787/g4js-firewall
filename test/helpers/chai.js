'use strict';

// Configure Chai's global and runtime property's for project.
var chai = require('chai');

chai.config.includeStack = true;

global.assert = chai.assert;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;