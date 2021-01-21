'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _codeCell = require('./code-cell');

var _codeCell2 = _interopRequireDefault(_codeCell);

var _markdownCell = require('./markdown-cell');

var _markdownCell2 = _interopRequireDefault(_markdownCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = function Cell(props) {
  return _react2.default.createElement(
    'div',
    { className: 'cell' },
    props.cell.get('cell_type') === 'markdown' ? _react2.default.createElement(_markdownCell2.default, props) : _react2.default.createElement(_codeCell2.default, props)
  );
};

Cell.propTypes = {
  cell: _react2.default.PropTypes.any,
  id: _react2.default.PropTypes.string,
  focusedCell: _react2.default.PropTypes.string,
  onCellChange: _react2.default.PropTypes.func,
  running: _react2.default.PropTypes.bool
};

exports.default = Cell;