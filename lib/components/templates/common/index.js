"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ErrorTemplate", {
  enumerable: true,
  get: function get() {
    return _error.default;
  }
});
Object.defineProperty(exports, "FooterTemplate", {
  enumerable: true,
  get: function get() {
    return _footer.default;
  }
});
Object.defineProperty(exports, "HeaderTemplate", {
  enumerable: true,
  get: function get() {
    return _header.default;
  }
});
Object.defineProperty(exports, "LayoutTemplate", {
  enumerable: true,
  get: function get() {
    return _layout.default;
  }
});

var _error = _interopRequireDefault(require("./error.vue"));

var _footer = _interopRequireDefault(require("./footer.vue"));

var _header = _interopRequireDefault(require("./header.vue"));

var _layout = _interopRequireDefault(require("./layout.vue"));