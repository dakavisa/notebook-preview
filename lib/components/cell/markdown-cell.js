'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _remark = require('remark');

var _remark2 = _interopRequireDefault(_remark);

var _remarkReact = require('remark-react');

var _remarkReact2 = _interopRequireDefault(_remarkReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var markdownRenderer = (0, _remark2.default)().use(_remarkReact2.default);

var MarkdownCell = function MarkdownCell(props) {
  return _react2.default.createElement(
    'div',
    { className: 'cell_markdown rendered' },
    markdownRenderer.process(props.cell.get('source'))
  );
};

MarkdownCell.propTypes = {
  cell: _react2.default.PropTypes.any
};

exports.default = MarkdownCell;