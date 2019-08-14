'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ShoppingList = require('./ShoppingList.jsx');

var _ShoppingList2 = _interopRequireDefault(_ShoppingList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = function (_React$Component) {
  _inherits(app, _React$Component);

  function app() {
    _classCallCheck(this, app);

    return _possibleConstructorReturn(this, (app.__proto__ || Object.getPrototypeOf(app)).apply(this, arguments));
  }

  _createClass(app, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(_ShoppingList2.default, null)
      );
    }
  }]);

  return app;
}(React.Component);

exports.default = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9Db21wb25lbnQvYXBwLmpzeCJdLCJuYW1lcyI6WyJhcHAiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEc7Ozs7Ozs7Ozs7OzZCQUVWO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxzQkFBRDtBQURGLE9BREY7QUFLRDs7OztFQVI4QkMsTUFBTUMsUzs7a0JBQWxCRixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTaG9wcGluZ0xpc3QgZnJvbSAnLi9TaG9wcGluZ0xpc3QuanN4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTaG9wcGluZ0xpc3QgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4iXX0=