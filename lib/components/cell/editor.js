'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCodemirror = require('react-codemirror');

var _reactCodemirror2 = _interopRequireDefault(_reactCodemirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editor = function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor() {
    _classCallCheck(this, Editor);

    return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).apply(this, arguments));
  }

  _createClass(Editor, [{
    key: 'render',
    value: function render() {
      var options = {
        mode: this.props.language,
        lineNumbers: this.props.lineNumbers,
        theme: this.props.theme,
        autofocus: false,
        readOnly: true
      };
      return _react2.default.createElement(
        'div',
        { className: 'cell_editor' },
        _react2.default.createElement(_reactCodemirror2.default, {
          value: this.props.input,
          ref: 'codemirror',
          className: 'cell_cm',
          options: options,
          onChange: this.onChange
        })
      );
    }
  }]);

  return Editor;
}(_react2.default.Component);

exports.default = Editor;


Editor.propTypes = {
  input: _react2.default.PropTypes.any,
  language: _react2.default.PropTypes.string,
  lineNumbers: _react2.default.PropTypes.bool,
  theme: _react2.default.PropTypes.string
};

Editor.defaultProps = {
  language: 'python',
  lineNumbers: false,
  text: '',
  theme: 'composition'
};