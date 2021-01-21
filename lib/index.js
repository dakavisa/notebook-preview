'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _notebook = require('./components/notebook');

var _notebook2 = _interopRequireDefault(_notebook);

var _commutable = require('commutable');

var commutable = _interopRequireWildcard(_commutable);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotebookPreview = function NotebookPreview(props) {
  if (props.notebook) {
    var nb = props.notebook;
    var notebook = _immutable2.default.Map.isMap(nb) ? nb : commutable.fromJS(nb);
    return _react2.default.createElement(_notebook2.default, { notebook: notebook });
  } else {
    return _react2.default.createElement(
      'h1',
      null,
      'Notebook not provided. '
    );
  }
};

NotebookPreview.propTypes = {
  notebook: _react2.default.PropTypes.any
};

exports.default = NotebookPreview;