'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _transformimeReact = require('transformime-react');

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('codemirror/mode/markdown/markdown');
require('codemirror/mode/python/python');
// TODO: consider dynamic require of languages like in nteract/nteract

var Notebook = function (_React$Component) {
  _inherits(Notebook, _React$Component);

  function Notebook() {
    _classCallCheck(this, Notebook);

    var _this = _possibleConstructorReturn(this, (Notebook.__proto__ || Object.getPrototypeOf(Notebook)).call(this));

    _this.createCellElement = _this.createCellElement.bind(_this);
    return _this;
  }

  _createClass(Notebook, [{
    key: 'getLanguageMode',
    value: function getLanguageMode() {
      // The syntax highlighting language should be set in the language info
      // object.  First try codemirror_mode, then name, and fallback on 'null'.
      var language = this.props.notebook.getIn(['metadata', 'language_info', 'codemirror_mode', 'name'], this.props.notebook.getIn(['metadata', 'language_info', 'codemirror_mode'], this.props.notebook.getIn(['metadata', 'language_info', 'name'], 'text')));

      // TODO: Load the ipython codemirror mode from somewhere
      if (language === 'ipython') {
        language = 'python';
      }

      return language;
    }
  }, {
    key: 'createCellElement',
    value: function createCellElement(id) {
      var cellMap = this.props.notebook.get('cellMap');
      return _react2.default.createElement(
        'div',
        {
          key: 'cell-container-' + id
        },
        _react2.default.createElement(_cell2.default, {
          cell: cellMap.get(id),
          language: this.getLanguageMode(),
          key: id,
          displayOrder: this.props.displayOrder,
          transforms: this.props.transforms
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var cellOrder = this.props.notebook.get('cellOrder');
      return _react2.default.createElement(
        'div',
        {
          style: {
            paddingTop: '10px',
            paddingLeft: '10px',
            paddingRight: '10px'
          },
          ref: 'cells'
        },
        cellOrder.map(this.createCellElement)
      );
    }
  }]);

  return Notebook;
}(_react2.default.Component);

Notebook.propTypes = {
  displayOrder: _react2.default.PropTypes.instanceOf(_immutable2.default.List),
  notebook: _react2.default.PropTypes.instanceOf(_immutable2.default.Map),
  transforms: _react2.default.PropTypes.instanceOf(_immutable2.default.Map)
};

Notebook.defaultProps = {
  displayOrder: _transformimeReact.displayOrder,
  transforms: _transformimeReact.transforms
};

exports.default = Notebook;