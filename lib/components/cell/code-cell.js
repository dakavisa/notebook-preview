'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inputs = require('./inputs');

var _inputs2 = _interopRequireDefault(_inputs);

var _editor = require('./editor');

var _editor2 = _interopRequireDefault(_editor);

var _reactJupyterDisplayArea = require('react-jupyter-display-area');

var _reactJupyterDisplayArea2 = _interopRequireDefault(_reactJupyterDisplayArea);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeCell = function CodeCell(props) {
  return _react2.default.createElement(
    'div',
    { className: 'cell_code' },
    _react2.default.createElement(
      'div',
      { className: 'input_area' },
      _react2.default.createElement(_inputs2.default, { executionCount: props.cell.get('execution_count'), running: props.running }),
      _react2.default.createElement(_editor2.default, {
        input: props.cell.get('source'),
        language: props.language
      })
    ),
    _react2.default.createElement(_reactJupyterDisplayArea2.default, {
      className: 'cell_display',
      outputs: props.cell.get('outputs'),
      displayOrder: props.displayOrder,
      transforms: props.transforms
    })
  );
};

CodeCell.propTypes = {
  cell: _react2.default.PropTypes.instanceOf(_immutable2.default.Map).isRequired,
  displayOrder: _react2.default.PropTypes.instanceOf(_immutable2.default.List).isRequired,
  language: _react2.default.PropTypes.string,
  theme: _react2.default.PropTypes.string,
  transforms: _react2.default.PropTypes.instanceOf(_immutable2.default.Map),
  running: _react2.default.PropTypes.bool
};

CodeCell.defaultProps = {
  running: false
};

exports.default = CodeCell;