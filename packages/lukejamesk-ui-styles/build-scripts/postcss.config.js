"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tailwindcss = _interopRequireDefault(require("tailwindcss"));

var _autoprefixer = _interopRequireDefault(require("autoprefixer"));

var _postcssNested = _interopRequireDefault(require("postcss-nested"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  plugins: [_postcssNested.default, _tailwindcss.default, _autoprefixer.default]
};
exports.default = _default;
//# sourceMappingURL=postcss.config.js.map