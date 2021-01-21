'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Inputs;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Inputs(_ref) {
  var executionCount = _ref.executionCount,
      running = _ref.running;

  var count = !executionCount ? ' ' : executionCount;
  var input = running ? '*' : count;
  return _react2.default.createElement(
    'div',
    { className: 'cell_inputs' },
    '[',
    input,
    ']'
  );
}

Inputs.propTypes = {
  executionCount: _react.PropTypes.any,
  running: _react.PropTypes.bool
};