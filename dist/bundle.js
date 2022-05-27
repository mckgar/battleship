/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --ship-color: rgba(128, 128, 128, 1);\n  --ship-hit-color: red;\n  --miss-color: whitesmoke;\n  --ocean-color: lightblue;\n}\n\nbody {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n#header {\n  grid-row: 1;\n  width: 100vw;\n  text-align: center;\n  border-bottom: 2px solid black;\n  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);\n  margin-bottom: 1rem;\n}\n\n#start-form {\n  grid-row: 2;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 0.5fr;\n  gap: 3rem;\n}\n\n.player-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.form-item {\n  display: flex;\n  flex-direction: column;\n}\n\n#start-button,\n#place-button,\n#start-new-game {\n  grid-row: 2;\n  grid-column: 1 / -1;\n  align-self: center;\n  justify-self: center;\n\n  padding: 8px 16px;\n  margin-bottom: 1rem;\n  border: 1px solid black;\n  border-radius: 1000px;\n\n  cursor: pointer;\n}\n\n#main {\n  /* height: 100vh; */\n  grid-row: 3;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 3rem;\n}\n\n#player-board {\n  grid-column: 1;\n  grid-row: 1;\n  align-self: center;\n  justify-self: center;\n}\n\n#opponent-board {\n  grid-column: 2;\n  grid-row: 1;\n  align-self: center;\n  justify-self: center;\n}\n\n#player-board,\n#opponent-board {\n  height: min(60vh, 100vw);\n  width: min(60vh, 100vw);\n  border: 1px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n\n  background-color: var(--ocean-color);\n}\n\n.space {\n  height: 100%;\n  width: 100%;\n  border: 1px solid black;\n  /* background-color: var(--ocean-color); */\n}\n\n.space.S,\n.ship {\n  background-color: var(--ship-color);\n}\n\n.space.H {\n  background-color: var(--ship-hit-color);\n}\n\n.space.M {\n  background-color: var(--miss-color);\n}\n\n.ship {\n  height: 100%;\n  width: 100%;\n}\n\n.ship.Length5.vertical {\n  height: calc(500% + 8px);\n}\n\n.ship.Length5.horizontal {\n  width: calc(500% + 8px);\n}\n\n.ship.Length4.vertical {\n  height: calc(400% + 6px);\n}\n\n.ship.Length4.horizontal {\n  width: calc(400% + 6px);\n}\n\n.ship.Length3.vertical {\n  height: calc(300% + 4px);\n}\n\n.ship.Length3.horizontal {\n  width: calc(300% + 4px);\n}\n\n.ship.Length2.vertical {\n  height: calc(200% + 2px);\n}\n\n.ship.Length2.horizontal {\n  width: calc(200% + 2px);\n}\n\n.hide {\n  display: none;\n}\n\n#opponent-board .space:hover {\n  border: 1px solid gold;\n}\n\n#ending-banner {\n  grid-row: 4;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,qBAAqB;EACrB,wBAAwB;EACxB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,8BAA8B;EAC9B,8CAA8C;EAC9C,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;EAGE,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;;EAEpB,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;;EAErB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;;EAEE,wBAAwB;EACxB,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;;EAEnC,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,0CAA0C;AAC5C;;AAEA;;EAEE,mCAAmC;AACrC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --ship-color: rgba(128, 128, 128, 1);\n  --ship-hit-color: red;\n  --miss-color: whitesmoke;\n  --ocean-color: lightblue;\n}\n\nbody {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n#header {\n  grid-row: 1;\n  width: 100vw;\n  text-align: center;\n  border-bottom: 2px solid black;\n  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);\n  margin-bottom: 1rem;\n}\n\n#start-form {\n  grid-row: 2;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 0.5fr;\n  gap: 3rem;\n}\n\n.player-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.form-item {\n  display: flex;\n  flex-direction: column;\n}\n\n#start-button,\n#place-button,\n#start-new-game {\n  grid-row: 2;\n  grid-column: 1 / -1;\n  align-self: center;\n  justify-self: center;\n\n  padding: 8px 16px;\n  margin-bottom: 1rem;\n  border: 1px solid black;\n  border-radius: 1000px;\n\n  cursor: pointer;\n}\n\n#main {\n  /* height: 100vh; */\n  grid-row: 3;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 3rem;\n}\n\n#player-board {\n  grid-column: 1;\n  grid-row: 1;\n  align-self: center;\n  justify-self: center;\n}\n\n#opponent-board {\n  grid-column: 2;\n  grid-row: 1;\n  align-self: center;\n  justify-self: center;\n}\n\n#player-board,\n#opponent-board {\n  height: min(60vh, 100vw);\n  width: min(60vh, 100vw);\n  border: 1px solid black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n\n  background-color: var(--ocean-color);\n}\n\n.space {\n  height: 100%;\n  width: 100%;\n  border: 1px solid black;\n  /* background-color: var(--ocean-color); */\n}\n\n.space.S,\n.ship {\n  background-color: var(--ship-color);\n}\n\n.space.H {\n  background-color: var(--ship-hit-color);\n}\n\n.space.M {\n  background-color: var(--miss-color);\n}\n\n.ship {\n  height: 100%;\n  width: 100%;\n}\n\n.ship.Length5.vertical {\n  height: calc(500% + 8px);\n}\n\n.ship.Length5.horizontal {\n  width: calc(500% + 8px);\n}\n\n.ship.Length4.vertical {\n  height: calc(400% + 6px);\n}\n\n.ship.Length4.horizontal {\n  width: calc(400% + 6px);\n}\n\n.ship.Length3.vertical {\n  height: calc(300% + 4px);\n}\n\n.ship.Length3.horizontal {\n  width: calc(300% + 4px);\n}\n\n.ship.Length2.vertical {\n  height: calc(200% + 2px);\n}\n\n.ship.Length2.horizontal {\n  width: calc(200% + 2px);\n}\n\n.hide {\n  display: none;\n}\n\n#opponent-board .space:hover {\n  border: 1px solid gold;\n}\n\n#ending-banner {\n  grid-row: 4;\n  text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display-controller.js":
/*!***********************************!*\
  !*** ./src/display-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayController = (() => {
  const createHeader = () => {
    const header = document.createElement('div');
    header.id = 'header';
    const logo = document.createElement('h1');
    logo.id = 'name';
    logo.textContent = 'Battleship';
    header.appendChild(logo);
    return header;
  };
  const createStartForm = () => {
    const form = document.createElement('div');
    form.id = 'start-form';

    for (let i = 1; i <= 2; i += 1) {
      const playerForm = document.createElement('div');
      playerForm.classList.add('player-form');
      const nameField = document.createElement('div');
      nameField.classList.add('form-item');
      const nameLabel = document.createElement('label');
      nameLabel.for = `name-player-${i}`;
      nameLabel.textContent = `Player ${i} Name`;
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.name = `name-player-${i}`;
      nameInput.id = `name-player-${i}`;
      if (i === 1) {
        nameInput.value = 'Player';
      } else {
        nameInput.value = 'AI';
      }
      nameField.appendChild(nameLabel);
      nameField.appendChild(nameInput);
      /* const aiField = document.createElement('div');
      aiField.classList.add('form-item');
      const aiLabel = document.createElement('label');
      aiLabel.for = `ai-player-${i}`;
      aiLabel.textContent = 'AI';
      const aiInput = document.createElement('input');
      aiInput.type = 'checkbox';
      aiInput.name = `ai-player-${i}`;
      aiInput.id = `ai-player-${i}`;
      aiField.appendChild(aiLabel);
      aiField.appendChild(aiInput);
      playerForm.appendChild(nameField);
      playerForm.appendChild(aiField); */
      playerForm.appendChild(nameField);

      form.appendChild(playerForm);
    }
    const startButton = document.createElement('div');
    startButton.id = 'start-button';
    startButton.textContent = 'START GAME';
    form.appendChild(startButton);
    return form;
  };
  const createBoard = (board) => {
    const playSpace = document.createElement('div');
    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
        const space = document.createElement('div');
        space.classList.add(`x${j}`, `y${i}`, board[j][i], 'space');
        playSpace.appendChild(space);
      }
    }

    return playSpace;
  };
  const createPage = () => {
    const body = document.querySelector('body');
    const header = createHeader();
    const form = createStartForm();
    const endingBanner = document.createElement('div');
    endingBanner.id = 'ending-banner';

    body.appendChild(header);
    body.appendChild(form);
    body.appendChild(endingBanner);
  };
  const removeForm = () => {
    const body = document.querySelector('body');
    const form = document.querySelector('#start-form');
    body.removeChild(form);
  };
  const fillShipSpaces = (ship, parent) => {
    const length = parseInt(ship.classList[1].slice(6), 10);
    const direction = ship.classList[2];
    if (direction === 'horizontal') {
      const startIndex = parseInt(parent.classList[0].slice(1), 10);
      const yIndex = parent.classList[1];
      for (let i = startIndex; i < startIndex + length; i += 1) {
        const space = document.querySelector(`#player-board .x${i}.${yIndex}`);
        space.classList.add(`${ship.id}-present`);
      }
    } else if (direction === 'vertical') {
      const startIndex = parseInt(parent.classList[1].slice(1), 10);
      const xIndex = parent.classList[0];
      for (let i = startIndex; i < startIndex + length; i += 1) {
        const space = document.querySelector(`#player-board .y${i}.${xIndex}`);
        space.classList.add(`${ship.id}-present`);
      }
    }
  };
  const removeShipSpaces = (ship) => {
    const oldSpaces = document.querySelectorAll(`.${ship.id}-present`);
    oldSpaces.forEach((space) => space.classList.remove(`${ship.id}-present`));
  };
  const createShipDraggable = (length) => {
    const ship = document.createElement('div');
    ship.draggable = true;
    ship.classList.add('ship', `Length${length}`, 'vertical');
    return ship;
  };
  const createBoards = (player) => {
    const body = document.querySelector('body');

    const startButton = document.createElement('div');
    startButton.id = 'place-button';
    startButton.textContent = 'PLACE SHIPS';
    body.appendChild(startButton);

    const main = document.createElement('div');
    main.id = 'main';
    body.appendChild(main);

    const playerBoard = createBoard(player.getBoard());
    playerBoard.id = 'player-board';
    main.appendChild(playerBoard);

    const carrier = createShipDraggable(5);
    carrier.id = 'carrier';
    const battleship = createShipDraggable(4);
    battleship.id = 'battleship';
    const destroyer = createShipDraggable(3);
    destroyer.id = 'destroyer';
    const submarine = createShipDraggable(3);
    submarine.id = 'submarine';
    const patrolBoat = createShipDraggable(2);
    patrolBoat.id = 'patrol-boat';

    const boatStart1 = document.querySelector('.x0.y0');
    const boatStart2 = document.querySelector('.x2.y0');
    const boatStart3 = document.querySelector('.x4.y0');
    const boatStart4 = document.querySelector('.x6.y0');
    const boatStart5 = document.querySelector('.x8.y0');

    boatStart1.appendChild(carrier);
    boatStart2.appendChild(battleship);
    boatStart3.appendChild(destroyer);
    boatStart4.appendChild(submarine);
    boatStart5.appendChild(patrolBoat);

    fillShipSpaces(carrier, carrier.parentElement);
    fillShipSpaces(battleship, battleship.parentElement);
    fillShipSpaces(destroyer, destroyer.parentElement);
    fillShipSpaces(submarine, submarine.parentElement);
    fillShipSpaces(patrolBoat, patrolBoat.parentElement);

    const oppenentBoard = createBoard(player.getMoveHistory());
    oppenentBoard.id = 'opponent-board';
    main.appendChild(oppenentBoard);
  };
  const getGameReady = (player) => {
    const body = document.querySelector('body');
    const main = document.querySelector('#main');

    const carrier = document.querySelector('#carrier');
    const battleship = document.querySelector('#battleship');
    const destroyer = document.querySelector('#destroyer');
    const submarine = document.querySelector('#submarine');
    const patrolBoat = document.querySelector('#patrol-boat');

    removeShipSpaces(carrier);
    carrier.parentElement.removeChild(carrier);
    removeShipSpaces(battleship);
    battleship.parentElement.removeChild(battleship);
    removeShipSpaces(destroyer);
    destroyer.parentElement.removeChild(destroyer);
    removeShipSpaces(submarine);
    submarine.parentElement.removeChild(submarine);
    removeShipSpaces(patrolBoat);
    patrolBoat.parentElement.removeChild(patrolBoat);

    const placeBtn = document.querySelector('#place-button');
    placeBtn.parentElement.removeChild(placeBtn);

    const newGameBtn = document.createElement('div');
    newGameBtn.id = 'start-new-game';
    newGameBtn.textContent = 'START NEW GAME';
    body.appendChild(newGameBtn);

    main.removeChild(document.querySelector('#player-board'));
    const playerBoard = createBoard(player.getBoard());
    playerBoard.id = 'player-board';
    main.appendChild(playerBoard);
  };
  const updateBoard = (playerBoard, xCoord, yCoord, board) => {
    try {
      let toUpdate;
      if (playerBoard && board[xCoord][yCoord] === 'H') {
        toUpdate = document.querySelector(`#player-board [class = 'x${xCoord} y${yCoord} S space']`);
      } else if (playerBoard) {
        toUpdate = document.querySelector(`#player-board [class = 'x${xCoord} y${yCoord} E space']`);
      } else {
        toUpdate = document.querySelector(`#opponent-board [class = 'x${xCoord} y${yCoord} E space']`);
      }
      toUpdate.classList.replace(toUpdate.classList[2], board[xCoord][yCoord]);
    } catch (err) {
      throw new Error(`${err} at move: (${xCoord}, ${yCoord}); board: ${board[xCoord][yCoord]}`);
    }
  };
  const endGame = (player) => {
    const endingBanner = document.querySelector('#ending-banner');
    endingBanner.textContent = `${player.getName()} wins!`;
  };
  const startNewGame = (player) => {
    const body = document.querySelector('body');
    const main = document.querySelector('#main');
    const startNewBtn = document.querySelector('#start-new-game');
    body.removeChild(main);
    body.removeChild(startNewBtn);
    document.querySelector('#ending-banner').textContent = '';
    createBoards(player);
  };

  return {
    createPage,
    removeForm,
    fillShipSpaces,
    removeShipSpaces,
    createBoards,
    getGameReady,
    updateBoard,
    endGame,
    startNewGame,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


const gameboard = (width, height) => {
  const board = [];
  const setBoard = () => {
    for (let i = 0; i < width; i += 1) {
      const col = [];
      for (let j = 0; j < height; j += 1) {
        col[j] = 'E';
      }
      board[i] = col;
    }
  };
  setBoard();

  const resetBoard = () => {
    for (let i = 0; i < board.length; i += 1) {
      board.pop();
    }
    setBoard();
  };
  const ships = [];
  const getBoard = () => board;
  const getShips = () => ships;
  const undoShipAdd = (xCoord, yCoord, index, direction) => {
    if (direction === 'horizontal') {
      for (let i = xCoord; i < index; i += 1) {
        board[i][yCoord] = 'E';
      }
    } else {
      for (let i = yCoord; i < index; i += 1) {
        board[xCoord][i] = 'E';
      }
    }
  };
  const placeShip = (xCoord, yCoord, length, direction) => {
    const piece = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
    if (direction === 'horizontal' && xCoord + length <= width) {
      for (let i = xCoord; i < xCoord + length; i += 1) {
        if (board[i][yCoord] === 'E') {
          board[i][yCoord] = 'S';
        } else {
          undoShipAdd(xCoord, yCoord, i, direction);
          break;
        }
      }
    } else if (direction === 'vertical' && yCoord + length <= height) {
      for (let i = yCoord; i < yCoord + length; i += 1) {
        if (board[xCoord][i] === 'E') {
          board[xCoord][i] = 'S';
        } else {
          undoShipAdd(xCoord, yCoord, i, direction);
          break;
        }
      }
    }
    ships.push({ ship: piece, xStart: xCoord, yStart: yCoord });
  };
  const hitShip = (xCoord, yCoord) => {
    for (let i = 0; i < ships.length; i += 1) {
      if (ships[i].xStart === parseInt(xCoord, 10)
          && (yCoord >= ships[i].yStart
          && yCoord < ships[i].yStart + ships[i].ship.getLength())) {
        ships[i].ship.hit(yCoord - ships[i].yStart);
      } else if (ships[i].yStart === parseInt(yCoord, 10)
          && (xCoord >= ships[i].xStart
          && xCoord < ships[i].xStart + ships[i].ship.getLength())) {
        ships[i].ship.hit(xCoord - ships[i].xStart);
      }
    }
  };
  const recieveAttack = (xCoord, yCoord) => {
    if ((xCoord >= 0 && xCoord < width) && (yCoord >= 0 && yCoord < height)) {
      if (board[xCoord][yCoord] === 'S') {
        board[xCoord][yCoord] = 'H';
        hitShip(xCoord, yCoord);
      } else if (board[xCoord][yCoord] === 'E') {
        board[xCoord][yCoord] = 'M';
      }
    }
  };
  const allSunk = () => {
    for (let i = 0; i < ships.length; i += 1) {
      if (!ships[i].ship.isSunk()) {
        return false;
      }
    }
    return true;
  };

  return {
    resetBoard, getBoard, getShips, placeShip, recieveAttack, allSunk,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const player = (name, boardSize, isAi = false) => {
  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(boardSize, boardSize);
  const moveHistory = [];
  let lastHitX = -1;
  let lastHitY = -1;
  let triedAllAdj = false;

  const setMoveHistory = () => {
    for (let i = 0; i < boardSize; i += 1) {
      const col = [];
      for (let j = 0; j < boardSize; j += 1) {
        col[j] = 'E';
      }
      moveHistory[i] = col;
    }
  };
  setMoveHistory();

  const resetBoard = () => {
    board.resetBoard();
  };
  const resetMoveHistory = () => {
    for (let i = 0; i < moveHistory.length; i += 1) {
      moveHistory.pop();
    }
    setMoveHistory();
  };
  const resetGame = () => {
    resetBoard();
    resetMoveHistory();
  };

  const getBoard = () => board.getBoard();
  const getMoveHistory = () => moveHistory;
  const getName = () => name;
  const placePiece = (xCoord, yCoord, length, direction) => {
    board.placeShip(xCoord, yCoord, length, direction);
  };
  const isLegalMove = (xCoord, yCoord) => {
    if ((xCoord >= 0 && xCoord < boardSize) && (yCoord >= 0 && yCoord < boardSize)) {
      return board.getBoard()[xCoord][yCoord] === 'E' || board.getBoard()[xCoord][yCoord] === 'S';
    }
    return false;
  };
  const isLegalAttack = (xCoord, yCoord) => {
    if ((xCoord >= 0 && xCoord < boardSize) && (yCoord >= 0 && yCoord < boardSize)) {
      return moveHistory[xCoord][yCoord] === 'E';
    }
    return false;
  };
  const attack = (enemy, xCoord, yCoord) => {
    if (isLegalAttack(xCoord, yCoord)) {
      enemy.recieveAttack(xCoord, yCoord);
      if (enemy.isHit(xCoord, yCoord)) {
        moveHistory[xCoord][yCoord] = 'H';
      } else if (enemy.isMiss(xCoord, yCoord)) {
        moveHistory[xCoord][yCoord] = 'M';
      }
    }
  };
  const recieveAttack = (xCoord, yCoord) => {
    if (isLegalMove(xCoord, yCoord)) {
      board.recieveAttack(xCoord, yCoord);
    }
  };
  const isMiss = (xCoord, yCoord) => board.getBoard()[xCoord][yCoord] === 'M';
  const isHit = (xCoord, yCoord) => board.getBoard()[xCoord][yCoord] === 'H';
  const hasLost = () => board.allSunk();
  const makeMove = (enemy, prevX = -1, prevY = -1) => {
    if (isAi) {
      let makingMove = true;
      while (makingMove) {
        if (prevX >= 0 && prevY >= 0) {
          lastHitX = prevX;
          lastHitY = prevY;
          triedAllAdj = false;
        }
        if (lastHitX >= 0 && lastHitY >= 0 && !triedAllAdj) {
          for (let i = 1; i < 6; i += 1) {
            if (isLegalAttack(lastHitX + i, lastHitY)) {
              attack(enemy, lastHitX + i, lastHitY);
              makingMove = false;
              return [lastHitX + i, lastHitY];
            }
            if (isLegalAttack(lastHitX - i, lastHitY)) {
              attack(enemy, lastHitX - i, lastHitY);
              makingMove = false;
              return [lastHitX - i, lastHitY];
            }
            if (isLegalAttack(lastHitX, lastHitY + i)) {
              attack(enemy, lastHitX, lastHitY + i);
              makingMove = false;
              return [lastHitX, lastHitY + i];
            }
            if (isLegalAttack(lastHitX, lastHitY - i)) {
              attack(enemy, lastHitX, lastHitY - i);
              makingMove = false;
              return [lastHitX, lastHitY - i];
            }
          }
          triedAllAdj = true;
        }

        const xRand = Math.floor(Math.random() * boardSize);
        const yRand = Math.floor(Math.random() * boardSize);
        if (isLegalAttack(xRand, yRand)) {
          attack(enemy, xRand, yRand);
          makingMove = false;
          return [xRand, yRand];
        }
      }
    }
    return null;
  };
  const randomShipPlacement = (length) => {
    let placingShip = true;
    while (placingShip) {
      const xRand = Math.floor(Math.random() * boardSize);
      const yRand = Math.floor(Math.random() * boardSize);
      // Randomize direction; 0 horizontal, 1 vertical
      const direction = Math.floor(Math.random() * 2);
      let foundLegalSpace = false;
      if (direction === 0) {
        if (xRand + length <= boardSize) {
          for (let i = xRand; i < xRand + length; i += 1) {
            if (board.getBoard()[i][yRand] !== 'E') {
              break;
            }
            if (i === xRand + length - 1) {
              foundLegalSpace = true;
            }
          }
        }
        if (foundLegalSpace) {
          placingShip = false;
          placePiece(xRand, yRand, length, 'horizontal');
        }
      } else if (direction === 1) {
        if (xRand + length <= boardSize) {
          for (let i = yRand; i < yRand + length; i += 1) {
            if (board.getBoard()[xRand][i] !== 'E') {
              break;
            }
            if (i === yRand + length - 1) {
              foundLegalSpace = true;
            }
          }
        }
        if (foundLegalSpace) {
          placingShip = false;
          placePiece(xRand, yRand, length, 'vertical');
        }
      }
    }
  };

  return {
    getBoard,
    getMoveHistory,
    getName,
    placePiece,
    isLegalMove,
    attack,
    recieveAttack,
    isMiss,
    isHit,
    hasLost,
    makeMove,
    randomShipPlacement,
    resetGame,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ship = (length) => {
  const health = new Array(length);
  const getHealth = () => health;
  const getLength = () => length;
  const hit = (target) => {
    if (target < length && target >= 0) {
      health[target] = 1;
    }
  };
  const isSunk = () => {
    for (let i = 0; i < length; i += 1) {
      if (health[i] !== 1) {
        return false;
      }
    }
    return true;
  };

  return {
    getHealth, getLength, hit, isSunk,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-controller */ "./src/display-controller.js");




let player1;
let player2;
let gameOver;

_display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].createPage();

function shipDragInterface() {
  function validRotationPosition(ship) {
    const length = parseInt(ship.classList[1].slice(6), 10);
    const direction = ship.classList[2];
    const startX = parseInt(ship.parentElement.classList[0].slice(1), 10);
    const startY = parseInt(ship.parentElement.classList[1].slice(1), 10);
    if (direction === 'vertical') {
      if (startX + length > 10) {
        return false;
      }
      for (let i = startX; i < startX + length; i += 1) {
        const space = document.querySelector(`#player-board .x${i}.y${startY}`);
        if ((space.classList.contains('carrier-present') && ship.id !== 'carrier')
            || (space.classList.contains('battleship-present') && ship.id !== 'battleship')
            || (space.classList.contains('destroyer-present') && ship.id !== 'destroyer')
            || (space.classList.contains('submarine-present') && ship.id !== 'submarine')
            || (space.classList.contains('patrol-boat-present') && ship.id !== 'patrol-boat')) {
          return false;
        }
      }
    } else if (direction === 'horizontal') {
      if (startY + length > 10) {
        return false;
      }
      for (let i = startY; i < startY + length; i += 1) {
        const space = document.querySelector(`#player-board .x${startX}.y${i}`);
        if ((space.classList.contains('carrier-present') && ship.id !== 'carrier')
            || (space.classList.contains('battleship-present') && ship.id !== 'battleship')
            || (space.classList.contains('destroyer-present') && ship.id !== 'destroyer')
            || (space.classList.contains('submarine-present') && ship.id !== 'submarine')
            || (space.classList.contains('patrol-boat-present') && ship.id !== 'patrol-boat')) {
          return false;
        }
      }
    } else {
      return false;
    }
    return true;
  }
  function validDrop(e) {
    const id = e.dataTransfer.getData('text/plain');
    const ship = document.getElementById(id);
    if (e.target.childNodes.length > 0 || e.target.classList.contains('ship')) {
      return false; // Ship present
    }
    const length = parseInt(ship.classList[1].slice(6), 10);
    const direction = ship.classList[2];
    const startX = parseInt(e.target.classList[0].slice(1), 10);
    const startY = parseInt(e.target.classList[1].slice(1), 10);
    if (direction === 'horizontal') {
      if (startX + length > 10) {
        return false;
      }
      for (let i = startX; i < startX + length; i += 1) {
        const space = document.querySelector(`#player-board .x${i}.y${startY}`);
        if ((space.classList.contains('carrier-present') && ship.id !== 'carrier')
            || (space.classList.contains('battleship-present') && ship.id !== 'battleship')
            || (space.classList.contains('destroyer-present') && ship.id !== 'destroyer')
            || (space.classList.contains('submarine-present') && ship.id !== 'submarine')
            || (space.classList.contains('patrol-boat-present') && ship.id !== 'patrol-boat')) {
          return false;
        }
      }
    } else if (direction === 'vertical') {
      if (startY + length > 10) {
        return false;
      }
      for (let i = startY; i < startY + length; i += 1) {
        const space = document.querySelector(`#player-board .x${startX}.y${i}`);
        if ((space.classList.contains('carrier-present') && ship.id !== 'carrier')
            || (space.classList.contains('battleship-present') && ship.id !== 'battleship')
            || (space.classList.contains('destroyer-present') && ship.id !== 'destroyer')
            || (space.classList.contains('submarine-present') && ship.id !== 'submarine')
            || (space.classList.contains('patrol-boat-present') && ship.id !== 'patrol-boat')) {
          return false;
        }
      }
    }
    return true;
  }
  function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  }
  function dragEnd(e) {
    e.target.classList.remove('hide');
  }
  function dragEnter(e) {
    e.preventDefault();
  }
  function dragOver(e) {
    e.preventDefault();
  }
  function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    draggable.classList.remove('hide');
    if (validDrop(e)) {
      e.target.appendChild(draggable);
      _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].removeShipSpaces(draggable);
      _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].fillShipSpaces(draggable, e.target);
    }
  }

  function rotateShip(e) {
    if (validRotationPosition(e.target)) {
      e.target.classList.toggle('vertical');
      e.target.classList.toggle('horizontal');
      _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].removeShipSpaces(e.target);
      _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].fillShipSpaces(e.target, e.target.parentElement);
    }
  }

  const ships = document.querySelectorAll('.ship');
  ships.forEach((ship) => {
    ship.addEventListener('dragstart', dragStart);
    ship.addEventListener('dragend', dragEnd);
    ship.addEventListener('click', rotateShip);
  });

  const spaces = document.querySelectorAll('#player-board .space');
  spaces.forEach((space) => {
    space.addEventListener('dragenter', dragEnter);
    space.addEventListener('dragover', dragOver);
    space.addEventListener('drop', drop);
  });
}

function aiAttack(lastMove = [-1, -1]) {
  const aiMove = player2.makeMove(player1, lastMove[0], lastMove[1]);
  _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].updateBoard(true, aiMove[0], aiMove[1], player1.getBoard());
  if (player1.hasLost()) {
    gameOver = true;
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].endGame(player2);
  } else if (player1.isHit(aiMove[0], aiMove[1])) {
    aiAttack(aiMove);
  }
}
function attack(xCoord, yCoord) {
  player1.attack(player2, xCoord, yCoord);
  _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].updateBoard(false, xCoord, yCoord, player1.getMoveHistory());
  if (player2.hasLost()) {
    gameOver = true;
    _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].endGame(player1);
  } else if (player2.isMiss(xCoord, yCoord)) {
    aiAttack();
  }
}

function startNewGame() {
  player1.resetGame();
  player2.resetGame();

  gameOver = false;

  _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].startNewGame(player1);

  shipDragInterface();

  const placeBtn = document.querySelector('#place-button');
  // eslint-disable-next-line no-use-before-define
  placeBtn.addEventListener('click', () => startPlaying());
}
function startPlaying() {
  const carrier = document.querySelector('#carrier');
  const battleship = document.querySelector('#battleship');
  const destroyer = document.querySelector('#destroyer');
  const submarine = document.querySelector('#submarine');
  const patrolBoat = document.querySelector('#patrol-boat');
  player1.placePiece(
    parseInt(carrier.parentElement.classList[0].slice(1), 10),
    parseInt(carrier.parentElement.classList[1].slice(1), 10),
    5,
    carrier.classList[2],
  );
  player1.placePiece(
    parseInt(battleship.parentElement.classList[0].slice(1), 10),
    parseInt(battleship.parentElement.classList[1].slice(1), 10),
    4,
    battleship.classList[2],
  );
  player1.placePiece(
    parseInt(destroyer.parentElement.classList[0].slice(1), 10),
    parseInt(destroyer.parentElement.classList[1].slice(1), 10),
    3,
    destroyer.classList[2],
  );
  player1.placePiece(
    parseInt(submarine.parentElement.classList[0].slice(1), 10),
    parseInt(submarine.parentElement.classList[1].slice(1), 10),
    3,
    submarine.classList[2],
  );
  player1.placePiece(
    parseInt(patrolBoat.parentElement.classList[0].slice(1), 10),
    parseInt(patrolBoat.parentElement.classList[1].slice(1), 10),
    2,
    patrolBoat.classList[2],
  );

  player2.randomShipPlacement(5);
  player2.randomShipPlacement(4);
  player2.randomShipPlacement(3);
  player2.randomShipPlacement(3);
  player2.randomShipPlacement(2);

  _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].getGameReady(player1);

  const spaces = document.querySelectorAll('#opponent-board .space');
  spaces.forEach((space) => space.addEventListener('click', () => {
    if (space.classList[2] === 'E' && !gameOver) {
      attack(space.classList[0].slice(1), space.classList[1].slice(1));
    }
  }));

  const startNewBtn = document.querySelector('#start-new-game');
  startNewBtn.addEventListener('click', () => startNewGame());
}
function startGame() {
  const player1Name = document.querySelector('#name-player-1').value;
  /* const player1Ai = document.querySelector('#ai-player-1').value; */
  const player2Name = document.querySelector('#name-player-2').value;
  /* const player2Ai = document.querySelector('#ai-player-1').value; */

  player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(player1Name, 10);
  player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(player2Name, 10, 1);

  gameOver = false;

  _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].removeForm();
  _display_controller__WEBPACK_IMPORTED_MODULE_2__["default"].createBoards(player1);

  shipDragInterface();

  const placeBtn = document.querySelector('#place-button');
  placeBtn.addEventListener('click', () => startPlaying());
}

const startBtn = document.querySelector('#start-button');
startBtn.addEventListener('click', () => startGame());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsd0VBQThCOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0EscUVBQXFFOztBQUVyRSxZQUFZLG1EQUFNO0FBQ2xCLFlBQVksbURBQU07O0FBRWxCOztBQUVBLEVBQUUsc0VBQTRCO0FBQzlCLEVBQUUsd0VBQThCOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXNoaXAtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMSk7XFxuICAtLXNoaXAtaGl0LWNvbG9yOiByZWQ7XFxuICAtLW1pc3MtY29sb3I6IHdoaXRlc21va2U7XFxuICAtLW9jZWFuLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBncmlkLXJvdzogMTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jc3RhcnQtZm9ybSB7XFxuICBncmlkLXJvdzogMjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmcjtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuLnBsYXllci1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc3RhcnQtYnV0dG9uLFxcbiNwbGFjZS1idXR0b24sXFxuI3N0YXJ0LW5ldy1nYW1lIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNtYWluIHtcXG4gIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICBncmlkLXJvdzogMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI29wcG9uZW50LWJvYXJkIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllci1ib2FyZCxcXG4jb3Bwb25lbnQtYm9hcmQge1xcbiAgaGVpZ2h0OiBtaW4oNjB2aCwgMTAwdncpO1xcbiAgd2lkdGg6IG1pbig2MHZoLCAxMDB2dyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2NlYW4tY29sb3IpO1xcbn1cXG5cXG4uc3BhY2Uge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWNvbG9yKTsgKi9cXG59XFxuXFxuLnNwYWNlLlMsXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5zcGFjZS5IIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtaGl0LWNvbG9yKTtcXG59XFxuXFxuLnNwYWNlLk0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcy1jb2xvcik7XFxufVxcblxcbi5zaGlwIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2hpcC5MZW5ndGg1LnZlcnRpY2FsIHtcXG4gIGhlaWdodDogY2FsYyg1MDAlICsgOHB4KTtcXG59XFxuXFxuLnNoaXAuTGVuZ3RoNS5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiBjYWxjKDUwMCUgKyA4cHgpO1xcbn1cXG5cXG4uc2hpcC5MZW5ndGg0LnZlcnRpY2FsIHtcXG4gIGhlaWdodDogY2FsYyg0MDAlICsgNnB4KTtcXG59XFxuXFxuLnNoaXAuTGVuZ3RoNC5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiBjYWxjKDQwMCUgKyA2cHgpO1xcbn1cXG5cXG4uc2hpcC5MZW5ndGgzLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogY2FsYygzMDAlICsgNHB4KTtcXG59XFxuXFxuLnNoaXAuTGVuZ3RoMy5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiBjYWxjKDMwMCUgKyA0cHgpO1xcbn1cXG5cXG4uc2hpcC5MZW5ndGgyLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogY2FsYygyMDAlICsgMnB4KTtcXG59XFxuXFxuLnNoaXAuTGVuZ3RoMi5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiBjYWxjKDIwMCUgKyAycHgpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jb3Bwb25lbnQtYm9hcmQgLnNwYWNlOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGQ7XFxufVxcblxcbiNlbmRpbmctYmFubmVyIHtcXG4gIGdyaWQtcm93OiA0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5Qiw4Q0FBOEM7RUFDOUMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9COztFQUVwQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQkFBcUI7O0VBRXJCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DOztFQUVuQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QiwwQ0FBMEM7QUFDNUM7O0FBRUE7O0VBRUUsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1zaGlwLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDEpO1xcbiAgLS1zaGlwLWhpdC1jb2xvcjogcmVkO1xcbiAgLS1taXNzLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgLS1vY2Vhbi1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI3N0YXJ0LWZvcm0ge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC41ZnI7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5wbGF5ZXItZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZvcm0taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3N0YXJ0LWJ1dHRvbixcXG4jcGxhY2UtYnV0dG9uLFxcbiNzdGFydC1uZXctZ2FtZSB7XFxuICBncmlkLXJvdzogMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuI3BsYXllci1ib2FyZCB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAxO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNvcHBvbmVudC1ib2FyZCB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAxO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsXFxuI29wcG9uZW50LWJvYXJkIHtcXG4gIGhlaWdodDogbWluKDYwdmgsIDEwMHZ3KTtcXG4gIHdpZHRoOiBtaW4oNjB2aCwgMTAwdncpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWNvbG9yKTtcXG59XFxuXFxuLnNwYWNlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1jb2xvcik7ICovXFxufVxcblxcbi5zcGFjZS5TLFxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uc3BhY2UuSCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWhpdC1jb2xvcik7XFxufVxcblxcbi5zcGFjZS5NIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNoaXAuTGVuZ3RoNS52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IGNhbGMoNTAwJSArIDhweCk7XFxufVxcblxcbi5zaGlwLkxlbmd0aDUuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogY2FsYyg1MDAlICsgOHB4KTtcXG59XFxuXFxuLnNoaXAuTGVuZ3RoNC52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IGNhbGMoNDAwJSArIDZweCk7XFxufVxcblxcbi5zaGlwLkxlbmd0aDQuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogY2FsYyg0MDAlICsgNnB4KTtcXG59XFxuXFxuLnNoaXAuTGVuZ3RoMy52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IGNhbGMoMzAwJSArIDRweCk7XFxufVxcblxcbi5zaGlwLkxlbmd0aDMuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogY2FsYygzMDAlICsgNHB4KTtcXG59XFxuXFxuLnNoaXAuTGVuZ3RoMi52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IGNhbGMoMjAwJSArIDJweCk7XFxufVxcblxcbi5zaGlwLkxlbmd0aDIuaG9yaXpvbnRhbCB7XFxuICB3aWR0aDogY2FsYygyMDAlICsgMnB4KTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI29wcG9uZW50LWJvYXJkIC5zcGFjZTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBnb2xkO1xcbn1cXG5cXG4jZW5kaW5nLWJhbm5lciB7XFxuICBncmlkLXJvdzogNDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBsb2dvLmlkID0gJ25hbWUnO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcCc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIHJldHVybiBoZWFkZXI7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVN0YXJ0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybS5pZCA9ICdzdGFydC1mb3JtJztcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDI7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcGxheWVyRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcGxheWVyRm9ybS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItZm9ybScpO1xuICAgICAgY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuYW1lRmllbGQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pdGVtJyk7XG4gICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgbmFtZUxhYmVsLmZvciA9IGBuYW1lLXBsYXllci0ke2l9YDtcbiAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IGBQbGF5ZXIgJHtpfSBOYW1lYDtcbiAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgIG5hbWVJbnB1dC5uYW1lID0gYG5hbWUtcGxheWVyLSR7aX1gO1xuICAgICAgbmFtZUlucHV0LmlkID0gYG5hbWUtcGxheWVyLSR7aX1gO1xuICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gJ1BsYXllcic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSAnQUknO1xuICAgICAgfVxuICAgICAgbmFtZUZpZWxkLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgICBuYW1lRmllbGQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICAgIC8qIGNvbnN0IGFpRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGFpRmllbGQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pdGVtJyk7XG4gICAgICBjb25zdCBhaUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIGFpTGFiZWwuZm9yID0gYGFpLXBsYXllci0ke2l9YDtcbiAgICAgIGFpTGFiZWwudGV4dENvbnRlbnQgPSAnQUknO1xuICAgICAgY29uc3QgYWlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBhaUlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgYWlJbnB1dC5uYW1lID0gYGFpLXBsYXllci0ke2l9YDtcbiAgICAgIGFpSW5wdXQuaWQgPSBgYWktcGxheWVyLSR7aX1gO1xuICAgICAgYWlGaWVsZC5hcHBlbmRDaGlsZChhaUxhYmVsKTtcbiAgICAgIGFpRmllbGQuYXBwZW5kQ2hpbGQoYWlJbnB1dCk7XG4gICAgICBwbGF5ZXJGb3JtLmFwcGVuZENoaWxkKG5hbWVGaWVsZCk7XG4gICAgICBwbGF5ZXJGb3JtLmFwcGVuZENoaWxkKGFpRmllbGQpOyAqL1xuICAgICAgcGxheWVyRm9ybS5hcHBlbmRDaGlsZChuYW1lRmllbGQpO1xuXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHBsYXllckZvcm0pO1xuICAgIH1cbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXJ0QnV0dG9uLmlkID0gJ3N0YXJ0LWJ1dHRvbic7XG4gICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnU1RBUlQgR0FNRSc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG4gICAgcmV0dXJuIGZvcm07XG4gIH07XG4gIGNvbnN0IGNyZWF0ZUJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgcGxheVNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKGB4JHtqfWAsIGB5JHtpfWAsIGJvYXJkW2pdW2ldLCAnc3BhY2UnKTtcbiAgICAgICAgcGxheVNwYWNlLmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGxheVNwYWNlO1xuICB9O1xuICBjb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVN0YXJ0Rm9ybSgpO1xuICAgIGNvbnN0IGVuZGluZ0Jhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVuZGluZ0Jhbm5lci5pZCA9ICdlbmRpbmctYmFubmVyJztcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZW5kaW5nQmFubmVyKTtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtZm9ybScpO1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gIH07XG4gIGNvbnN0IGZpbGxTaGlwU3BhY2VzID0gKHNoaXAsIHBhcmVudCkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHBhcnNlSW50KHNoaXAuY2xhc3NMaXN0WzFdLnNsaWNlKDYpLCAxMCk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gc2hpcC5jbGFzc0xpc3RbMl07XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBzdGFydEluZGV4ID0gcGFyc2VJbnQocGFyZW50LmNsYXNzTGlzdFswXS5zbGljZSgxKSwgMTApO1xuICAgICAgY29uc3QgeUluZGV4ID0gcGFyZW50LmNsYXNzTGlzdFsxXTtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgc3RhcnRJbmRleCArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllci1ib2FyZCAueCR7aX0uJHt5SW5kZXh9YCk7XG4gICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoYCR7c2hpcC5pZH0tcHJlc2VudGApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBzdGFydEluZGV4ID0gcGFyc2VJbnQocGFyZW50LmNsYXNzTGlzdFsxXS5zbGljZSgxKSwgMTApO1xuICAgICAgY29uc3QgeEluZGV4ID0gcGFyZW50LmNsYXNzTGlzdFswXTtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgc3RhcnRJbmRleCArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllci1ib2FyZCAueSR7aX0uJHt4SW5kZXh9YCk7XG4gICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoYCR7c2hpcC5pZH0tcHJlc2VudGApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVtb3ZlU2hpcFNwYWNlcyA9IChzaGlwKSA9PiB7XG4gICAgY29uc3Qgb2xkU3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7c2hpcC5pZH0tcHJlc2VudGApO1xuICAgIG9sZFNwYWNlcy5mb3JFYWNoKChzcGFjZSkgPT4gc3BhY2UuY2xhc3NMaXN0LnJlbW92ZShgJHtzaGlwLmlkfS1wcmVzZW50YCkpO1xuICB9O1xuICBjb25zdCBjcmVhdGVTaGlwRHJhZ2dhYmxlID0gKGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwJywgYExlbmd0aCR7bGVuZ3RofWAsICd2ZXJ0aWNhbCcpO1xuICAgIHJldHVybiBzaGlwO1xuICB9O1xuICBjb25zdCBjcmVhdGVCb2FyZHMgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhcnRCdXR0b24uaWQgPSAncGxhY2UtYnV0dG9uJztcbiAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdQTEFDRSBTSElQUyc7XG4gICAgYm9keS5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5pZCA9ICdtYWluJztcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBjcmVhdGVCb2FyZChwbGF5ZXIuZ2V0Qm9hcmQoKSk7XG4gICAgcGxheWVyQm9hcmQuaWQgPSAncGxheWVyLWJvYXJkJztcbiAgICBtYWluLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcblxuICAgIGNvbnN0IGNhcnJpZXIgPSBjcmVhdGVTaGlwRHJhZ2dhYmxlKDUpO1xuICAgIGNhcnJpZXIuaWQgPSAnY2Fycmllcic7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXBEcmFnZ2FibGUoNCk7XG4gICAgYmF0dGxlc2hpcC5pZCA9ICdiYXR0bGVzaGlwJztcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBjcmVhdGVTaGlwRHJhZ2dhYmxlKDMpO1xuICAgIGRlc3Ryb3llci5pZCA9ICdkZXN0cm95ZXInO1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IGNyZWF0ZVNoaXBEcmFnZ2FibGUoMyk7XG4gICAgc3VibWFyaW5lLmlkID0gJ3N1Ym1hcmluZSc7XG4gICAgY29uc3QgcGF0cm9sQm9hdCA9IGNyZWF0ZVNoaXBEcmFnZ2FibGUoMik7XG4gICAgcGF0cm9sQm9hdC5pZCA9ICdwYXRyb2wtYm9hdCc7XG5cbiAgICBjb25zdCBib2F0U3RhcnQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngwLnkwJyk7XG4gICAgY29uc3QgYm9hdFN0YXJ0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54Mi55MCcpO1xuICAgIGNvbnN0IGJvYXRTdGFydDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueDQueTAnKTtcbiAgICBjb25zdCBib2F0U3RhcnQ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLng2LnkwJyk7XG4gICAgY29uc3QgYm9hdFN0YXJ0NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54OC55MCcpO1xuXG4gICAgYm9hdFN0YXJ0MS5hcHBlbmRDaGlsZChjYXJyaWVyKTtcbiAgICBib2F0U3RhcnQyLmFwcGVuZENoaWxkKGJhdHRsZXNoaXApO1xuICAgIGJvYXRTdGFydDMuYXBwZW5kQ2hpbGQoZGVzdHJveWVyKTtcbiAgICBib2F0U3RhcnQ0LmFwcGVuZENoaWxkKHN1Ym1hcmluZSk7XG4gICAgYm9hdFN0YXJ0NS5hcHBlbmRDaGlsZChwYXRyb2xCb2F0KTtcblxuICAgIGZpbGxTaGlwU3BhY2VzKGNhcnJpZXIsIGNhcnJpZXIucGFyZW50RWxlbWVudCk7XG4gICAgZmlsbFNoaXBTcGFjZXMoYmF0dGxlc2hpcCwgYmF0dGxlc2hpcC5wYXJlbnRFbGVtZW50KTtcbiAgICBmaWxsU2hpcFNwYWNlcyhkZXN0cm95ZXIsIGRlc3Ryb3llci5wYXJlbnRFbGVtZW50KTtcbiAgICBmaWxsU2hpcFNwYWNlcyhzdWJtYXJpbmUsIHN1Ym1hcmluZS5wYXJlbnRFbGVtZW50KTtcbiAgICBmaWxsU2hpcFNwYWNlcyhwYXRyb2xCb2F0LCBwYXRyb2xCb2F0LnBhcmVudEVsZW1lbnQpO1xuXG4gICAgY29uc3Qgb3BwZW5lbnRCb2FyZCA9IGNyZWF0ZUJvYXJkKHBsYXllci5nZXRNb3ZlSGlzdG9yeSgpKTtcbiAgICBvcHBlbmVudEJvYXJkLmlkID0gJ29wcG9uZW50LWJvYXJkJztcbiAgICBtYWluLmFwcGVuZENoaWxkKG9wcGVuZW50Qm9hcmQpO1xuICB9O1xuICBjb25zdCBnZXRHYW1lUmVhZHkgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcblxuICAgIGNvbnN0IGNhcnJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FycmllcicpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmF0dGxlc2hpcCcpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXN0cm95ZXInKTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJyk7XG4gICAgY29uc3QgcGF0cm9sQm9hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXRyb2wtYm9hdCcpO1xuXG4gICAgcmVtb3ZlU2hpcFNwYWNlcyhjYXJyaWVyKTtcbiAgICBjYXJyaWVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2Fycmllcik7XG4gICAgcmVtb3ZlU2hpcFNwYWNlcyhiYXR0bGVzaGlwKTtcbiAgICBiYXR0bGVzaGlwLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYmF0dGxlc2hpcCk7XG4gICAgcmVtb3ZlU2hpcFNwYWNlcyhkZXN0cm95ZXIpO1xuICAgIGRlc3Ryb3llci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGRlc3Ryb3llcik7XG4gICAgcmVtb3ZlU2hpcFNwYWNlcyhzdWJtYXJpbmUpO1xuICAgIHN1Ym1hcmluZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHN1Ym1hcmluZSk7XG4gICAgcmVtb3ZlU2hpcFNwYWNlcyhwYXRyb2xCb2F0KTtcbiAgICBwYXRyb2xCb2F0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocGF0cm9sQm9hdCk7XG5cbiAgICBjb25zdCBwbGFjZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZS1idXR0b24nKTtcbiAgICBwbGFjZUJ0bi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHBsYWNlQnRuKTtcblxuICAgIGNvbnN0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdHYW1lQnRuLmlkID0gJ3N0YXJ0LW5ldy1nYW1lJztcbiAgICBuZXdHYW1lQnRuLnRleHRDb250ZW50ID0gJ1NUQVJUIE5FVyBHQU1FJztcbiAgICBib2R5LmFwcGVuZENoaWxkKG5ld0dhbWVCdG4pO1xuXG4gICAgbWFpbi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLWJvYXJkJykpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gY3JlYXRlQm9hcmQocGxheWVyLmdldEJvYXJkKCkpO1xuICAgIHBsYXllckJvYXJkLmlkID0gJ3BsYXllci1ib2FyZCc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZCk7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZUJvYXJkID0gKHBsYXllckJvYXJkLCB4Q29vcmQsIHlDb29yZCwgYm9hcmQpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IHRvVXBkYXRlO1xuICAgICAgaWYgKHBsYXllckJvYXJkICYmIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9PT0gJ0gnKSB7XG4gICAgICAgIHRvVXBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllci1ib2FyZCBbY2xhc3MgPSAneCR7eENvb3JkfSB5JHt5Q29vcmR9IFMgc3BhY2UnXWApO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZCkge1xuICAgICAgICB0b1VwZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXItYm9hcmQgW2NsYXNzID0gJ3gke3hDb29yZH0geSR7eUNvb3JkfSBFIHNwYWNlJ11gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvVXBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI29wcG9uZW50LWJvYXJkIFtjbGFzcyA9ICd4JHt4Q29vcmR9IHkke3lDb29yZH0gRSBzcGFjZSddYCk7XG4gICAgICB9XG4gICAgICB0b1VwZGF0ZS5jbGFzc0xpc3QucmVwbGFjZSh0b1VwZGF0ZS5jbGFzc0xpc3RbMl0sIGJvYXJkW3hDb29yZF1beUNvb3JkXSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZXJyfSBhdCBtb3ZlOiAoJHt4Q29vcmR9LCAke3lDb29yZH0pOyBib2FyZDogJHtib2FyZFt4Q29vcmRdW3lDb29yZF19YCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBlbmRHYW1lID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGVuZGluZ0Jhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmRpbmctYmFubmVyJyk7XG4gICAgZW5kaW5nQmFubmVyLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmdldE5hbWUoKX0gd2lucyFgO1xuICB9O1xuICBjb25zdCBzdGFydE5ld0dhbWUgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbiAgICBjb25zdCBzdGFydE5ld0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1uZXctZ2FtZScpO1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQobWFpbik7XG4gICAgYm9keS5yZW1vdmVDaGlsZChzdGFydE5ld0J0bik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZGluZy1iYW5uZXInKS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNyZWF0ZUJvYXJkcyhwbGF5ZXIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUGFnZSxcbiAgICByZW1vdmVGb3JtLFxuICAgIGZpbGxTaGlwU3BhY2VzLFxuICAgIHJlbW92ZVNoaXBTcGFjZXMsXG4gICAgY3JlYXRlQm9hcmRzLFxuICAgIGdldEdhbWVSZWFkeSxcbiAgICB1cGRhdGVCb2FyZCxcbiAgICBlbmRHYW1lLFxuICAgIHN0YXJ0TmV3R2FtZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyO1xuIiwiaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwJztcblxuY29uc3QgZ2FtZWJvYXJkID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgY29uc3Qgc2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb2wgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqICs9IDEpIHtcbiAgICAgICAgY29sW2pdID0gJ0UnO1xuICAgICAgfVxuICAgICAgYm9hcmRbaV0gPSBjb2w7XG4gICAgfVxuICB9O1xuICBzZXRCb2FyZCgpO1xuXG4gIGNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgYm9hcmQucG9wKCk7XG4gICAgfVxuICAgIHNldEJvYXJkKCk7XG4gIH07XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG4gIGNvbnN0IGdldFNoaXBzID0gKCkgPT4gc2hpcHM7XG4gIGNvbnN0IHVuZG9TaGlwQWRkID0gKHhDb29yZCwgeUNvb3JkLCBpbmRleCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0geENvb3JkOyBpIDwgaW5kZXg7IGkgKz0gMSkge1xuICAgICAgICBib2FyZFtpXVt5Q29vcmRdID0gJ0UnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0geUNvb3JkOyBpIDwgaW5kZXg7IGkgKz0gMSkge1xuICAgICAgICBib2FyZFt4Q29vcmRdW2ldID0gJ0UnO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcGxhY2VTaGlwID0gKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIGRpcmVjdGlvbikgPT4ge1xuICAgIGNvbnN0IHBpZWNlID0gc2hpcChsZW5ndGgpO1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiB4Q29vcmQgKyBsZW5ndGggPD0gd2lkdGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSB4Q29vcmQ7IGkgPCB4Q29vcmQgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYm9hcmRbaV1beUNvb3JkXSA9PT0gJ0UnKSB7XG4gICAgICAgICAgYm9hcmRbaV1beUNvb3JkXSA9ICdTJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmRvU2hpcEFkZCh4Q29vcmQsIHlDb29yZCwgaSwgZGlyZWN0aW9uKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnICYmIHlDb29yZCArIGxlbmd0aCA8PSBoZWlnaHQpIHtcbiAgICAgIGZvciAobGV0IGkgPSB5Q29vcmQ7IGkgPCB5Q29vcmQgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYm9hcmRbeENvb3JkXVtpXSA9PT0gJ0UnKSB7XG4gICAgICAgICAgYm9hcmRbeENvb3JkXVtpXSA9ICdTJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmRvU2hpcEFkZCh4Q29vcmQsIHlDb29yZCwgaSwgZGlyZWN0aW9uKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzaGlwcy5wdXNoKHsgc2hpcDogcGllY2UsIHhTdGFydDogeENvb3JkLCB5U3RhcnQ6IHlDb29yZCB9KTtcbiAgfTtcbiAgY29uc3QgaGl0U2hpcCA9ICh4Q29vcmQsIHlDb29yZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzaGlwc1tpXS54U3RhcnQgPT09IHBhcnNlSW50KHhDb29yZCwgMTApXG4gICAgICAgICAgJiYgKHlDb29yZCA+PSBzaGlwc1tpXS55U3RhcnRcbiAgICAgICAgICAmJiB5Q29vcmQgPCBzaGlwc1tpXS55U3RhcnQgKyBzaGlwc1tpXS5zaGlwLmdldExlbmd0aCgpKSkge1xuICAgICAgICBzaGlwc1tpXS5zaGlwLmhpdCh5Q29vcmQgLSBzaGlwc1tpXS55U3RhcnQpO1xuICAgICAgfSBlbHNlIGlmIChzaGlwc1tpXS55U3RhcnQgPT09IHBhcnNlSW50KHlDb29yZCwgMTApXG4gICAgICAgICAgJiYgKHhDb29yZCA+PSBzaGlwc1tpXS54U3RhcnRcbiAgICAgICAgICAmJiB4Q29vcmQgPCBzaGlwc1tpXS54U3RhcnQgKyBzaGlwc1tpXS5zaGlwLmdldExlbmd0aCgpKSkge1xuICAgICAgICBzaGlwc1tpXS5zaGlwLmhpdCh4Q29vcmQgLSBzaGlwc1tpXS54U3RhcnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9ICh4Q29vcmQsIHlDb29yZCkgPT4ge1xuICAgIGlmICgoeENvb3JkID49IDAgJiYgeENvb3JkIDwgd2lkdGgpICYmICh5Q29vcmQgPj0gMCAmJiB5Q29vcmQgPCBoZWlnaHQpKSB7XG4gICAgICBpZiAoYm9hcmRbeENvb3JkXVt5Q29vcmRdID09PSAnUycpIHtcbiAgICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdID0gJ0gnO1xuICAgICAgICBoaXRTaGlwKHhDb29yZCwgeUNvb3JkKTtcbiAgICAgIH0gZWxzZSBpZiAoYm9hcmRbeENvb3JkXVt5Q29vcmRdID09PSAnRScpIHtcbiAgICAgICAgYm9hcmRbeENvb3JkXVt5Q29vcmRdID0gJ00nO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoIXNoaXBzW2ldLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlc2V0Qm9hcmQsIGdldEJvYXJkLCBnZXRTaGlwcywgcGxhY2VTaGlwLCByZWNpZXZlQXR0YWNrLCBhbGxTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkO1xuIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5cbmNvbnN0IHBsYXllciA9IChuYW1lLCBib2FyZFNpemUsIGlzQWkgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBib2FyZCA9IGdhbWVib2FyZChib2FyZFNpemUsIGJvYXJkU2l6ZSk7XG4gIGNvbnN0IG1vdmVIaXN0b3J5ID0gW107XG4gIGxldCBsYXN0SGl0WCA9IC0xO1xuICBsZXQgbGFzdEhpdFkgPSAtMTtcbiAgbGV0IHRyaWVkQWxsQWRqID0gZmFsc2U7XG5cbiAgY29uc3Qgc2V0TW92ZUhpc3RvcnkgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZFNpemU7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY29sID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkU2l6ZTsgaiArPSAxKSB7XG4gICAgICAgIGNvbFtqXSA9ICdFJztcbiAgICAgIH1cbiAgICAgIG1vdmVIaXN0b3J5W2ldID0gY29sO1xuICAgIH1cbiAgfTtcbiAgc2V0TW92ZUhpc3RvcnkoKTtcblxuICBjb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xuICAgIGJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgfTtcbiAgY29uc3QgcmVzZXRNb3ZlSGlzdG9yeSA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVIaXN0b3J5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBtb3ZlSGlzdG9yeS5wb3AoKTtcbiAgICB9XG4gICAgc2V0TW92ZUhpc3RvcnkoKTtcbiAgfTtcbiAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIHJlc2V0Qm9hcmQoKTtcbiAgICByZXNldE1vdmVIaXN0b3J5KCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZC5nZXRCb2FyZCgpO1xuICBjb25zdCBnZXRNb3ZlSGlzdG9yeSA9ICgpID0+IG1vdmVIaXN0b3J5O1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3QgcGxhY2VQaWVjZSA9ICh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBkaXJlY3Rpb24pID0+IHtcbiAgICBib2FyZC5wbGFjZVNoaXAoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgZGlyZWN0aW9uKTtcbiAgfTtcbiAgY29uc3QgaXNMZWdhbE1vdmUgPSAoeENvb3JkLCB5Q29vcmQpID0+IHtcbiAgICBpZiAoKHhDb29yZCA+PSAwICYmIHhDb29yZCA8IGJvYXJkU2l6ZSkgJiYgKHlDb29yZCA+PSAwICYmIHlDb29yZCA8IGJvYXJkU2l6ZSkpIHtcbiAgICAgIHJldHVybiBib2FyZC5nZXRCb2FyZCgpW3hDb29yZF1beUNvb3JkXSA9PT0gJ0UnIHx8IGJvYXJkLmdldEJvYXJkKClbeENvb3JkXVt5Q29vcmRdID09PSAnUyc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgaXNMZWdhbEF0dGFjayA9ICh4Q29vcmQsIHlDb29yZCkgPT4ge1xuICAgIGlmICgoeENvb3JkID49IDAgJiYgeENvb3JkIDwgYm9hcmRTaXplKSAmJiAoeUNvb3JkID49IDAgJiYgeUNvb3JkIDwgYm9hcmRTaXplKSkge1xuICAgICAgcmV0dXJuIG1vdmVIaXN0b3J5W3hDb29yZF1beUNvb3JkXSA9PT0gJ0UnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGF0dGFjayA9IChlbmVteSwgeENvb3JkLCB5Q29vcmQpID0+IHtcbiAgICBpZiAoaXNMZWdhbEF0dGFjayh4Q29vcmQsIHlDb29yZCkpIHtcbiAgICAgIGVuZW15LnJlY2lldmVBdHRhY2soeENvb3JkLCB5Q29vcmQpO1xuICAgICAgaWYgKGVuZW15LmlzSGl0KHhDb29yZCwgeUNvb3JkKSkge1xuICAgICAgICBtb3ZlSGlzdG9yeVt4Q29vcmRdW3lDb29yZF0gPSAnSCc7XG4gICAgICB9IGVsc2UgaWYgKGVuZW15LmlzTWlzcyh4Q29vcmQsIHlDb29yZCkpIHtcbiAgICAgICAgbW92ZUhpc3RvcnlbeENvb3JkXVt5Q29vcmRdID0gJ00nO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9ICh4Q29vcmQsIHlDb29yZCkgPT4ge1xuICAgIGlmIChpc0xlZ2FsTW92ZSh4Q29vcmQsIHlDb29yZCkpIHtcbiAgICAgIGJvYXJkLnJlY2lldmVBdHRhY2soeENvb3JkLCB5Q29vcmQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaXNNaXNzID0gKHhDb29yZCwgeUNvb3JkKSA9PiBib2FyZC5nZXRCb2FyZCgpW3hDb29yZF1beUNvb3JkXSA9PT0gJ00nO1xuICBjb25zdCBpc0hpdCA9ICh4Q29vcmQsIHlDb29yZCkgPT4gYm9hcmQuZ2V0Qm9hcmQoKVt4Q29vcmRdW3lDb29yZF0gPT09ICdIJztcbiAgY29uc3QgaGFzTG9zdCA9ICgpID0+IGJvYXJkLmFsbFN1bmsoKTtcbiAgY29uc3QgbWFrZU1vdmUgPSAoZW5lbXksIHByZXZYID0gLTEsIHByZXZZID0gLTEpID0+IHtcbiAgICBpZiAoaXNBaSkge1xuICAgICAgbGV0IG1ha2luZ01vdmUgPSB0cnVlO1xuICAgICAgd2hpbGUgKG1ha2luZ01vdmUpIHtcbiAgICAgICAgaWYgKHByZXZYID49IDAgJiYgcHJldlkgPj0gMCkge1xuICAgICAgICAgIGxhc3RIaXRYID0gcHJldlg7XG4gICAgICAgICAgbGFzdEhpdFkgPSBwcmV2WTtcbiAgICAgICAgICB0cmllZEFsbEFkaiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0SGl0WCA+PSAwICYmIGxhc3RIaXRZID49IDAgJiYgIXRyaWVkQWxsQWRqKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA2OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChpc0xlZ2FsQXR0YWNrKGxhc3RIaXRYICsgaSwgbGFzdEhpdFkpKSB7XG4gICAgICAgICAgICAgIGF0dGFjayhlbmVteSwgbGFzdEhpdFggKyBpLCBsYXN0SGl0WSk7XG4gICAgICAgICAgICAgIG1ha2luZ01vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIFtsYXN0SGl0WCArIGksIGxhc3RIaXRZXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0xlZ2FsQXR0YWNrKGxhc3RIaXRYIC0gaSwgbGFzdEhpdFkpKSB7XG4gICAgICAgICAgICAgIGF0dGFjayhlbmVteSwgbGFzdEhpdFggLSBpLCBsYXN0SGl0WSk7XG4gICAgICAgICAgICAgIG1ha2luZ01vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIFtsYXN0SGl0WCAtIGksIGxhc3RIaXRZXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0xlZ2FsQXR0YWNrKGxhc3RIaXRYLCBsYXN0SGl0WSArIGkpKSB7XG4gICAgICAgICAgICAgIGF0dGFjayhlbmVteSwgbGFzdEhpdFgsIGxhc3RIaXRZICsgaSk7XG4gICAgICAgICAgICAgIG1ha2luZ01vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIFtsYXN0SGl0WCwgbGFzdEhpdFkgKyBpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0xlZ2FsQXR0YWNrKGxhc3RIaXRYLCBsYXN0SGl0WSAtIGkpKSB7XG4gICAgICAgICAgICAgIGF0dGFjayhlbmVteSwgbGFzdEhpdFgsIGxhc3RIaXRZIC0gaSk7XG4gICAgICAgICAgICAgIG1ha2luZ01vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIFtsYXN0SGl0WCwgbGFzdEhpdFkgLSBpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdHJpZWRBbGxBZGogPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeFJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgICBjb25zdCB5UmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgICAgIGlmIChpc0xlZ2FsQXR0YWNrKHhSYW5kLCB5UmFuZCkpIHtcbiAgICAgICAgICBhdHRhY2soZW5lbXksIHhSYW5kLCB5UmFuZCk7XG4gICAgICAgICAgbWFraW5nTW92ZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBbeFJhbmQsIHlSYW5kXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgY29uc3QgcmFuZG9tU2hpcFBsYWNlbWVudCA9IChsZW5ndGgpID0+IHtcbiAgICBsZXQgcGxhY2luZ1NoaXAgPSB0cnVlO1xuICAgIHdoaWxlIChwbGFjaW5nU2hpcCkge1xuICAgICAgY29uc3QgeFJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgY29uc3QgeVJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgLy8gUmFuZG9taXplIGRpcmVjdGlvbjsgMCBob3Jpem9udGFsLCAxIHZlcnRpY2FsXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgIGxldCBmb3VuZExlZ2FsU3BhY2UgPSBmYWxzZTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgaWYgKHhSYW5kICsgbGVuZ3RoIDw9IGJvYXJkU2l6ZSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSB4UmFuZDsgaSA8IHhSYW5kICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChib2FyZC5nZXRCb2FyZCgpW2ldW3lSYW5kXSAhPT0gJ0UnKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgPT09IHhSYW5kICsgbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICBmb3VuZExlZ2FsU3BhY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZm91bmRMZWdhbFNwYWNlKSB7XG4gICAgICAgICAgcGxhY2luZ1NoaXAgPSBmYWxzZTtcbiAgICAgICAgICBwbGFjZVBpZWNlKHhSYW5kLCB5UmFuZCwgbGVuZ3RoLCAnaG9yaXpvbnRhbCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICBpZiAoeFJhbmQgKyBsZW5ndGggPD0gYm9hcmRTaXplKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IHlSYW5kOyBpIDwgeVJhbmQgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbeFJhbmRdW2ldICE9PSAnRScpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSA9PT0geVJhbmQgKyBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIGZvdW5kTGVnYWxTcGFjZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmb3VuZExlZ2FsU3BhY2UpIHtcbiAgICAgICAgICBwbGFjaW5nU2hpcCA9IGZhbHNlO1xuICAgICAgICAgIHBsYWNlUGllY2UoeFJhbmQsIHlSYW5kLCBsZW5ndGgsICd2ZXJ0aWNhbCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQsXG4gICAgZ2V0TW92ZUhpc3RvcnksXG4gICAgZ2V0TmFtZSxcbiAgICBwbGFjZVBpZWNlLFxuICAgIGlzTGVnYWxNb3ZlLFxuICAgIGF0dGFjayxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGlzTWlzcyxcbiAgICBpc0hpdCxcbiAgICBoYXNMb3N0LFxuICAgIG1ha2VNb3ZlLFxuICAgIHJhbmRvbVNoaXBQbGFjZW1lbnQsXG4gICAgcmVzZXRHYW1lLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyO1xuIiwiY29uc3Qgc2hpcCA9IChsZW5ndGgpID0+IHtcbiAgY29uc3QgaGVhbHRoID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gIGNvbnN0IGdldEhlYWx0aCA9ICgpID0+IGhlYWx0aDtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICBjb25zdCBoaXQgPSAodGFyZ2V0KSA9PiB7XG4gICAgaWYgKHRhcmdldCA8IGxlbmd0aCAmJiB0YXJnZXQgPj0gMCkge1xuICAgICAgaGVhbHRoW3RhcmdldF0gPSAxO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChoZWFsdGhbaV0gIT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldEhlYWx0aCwgZ2V0TGVuZ3RoLCBoaXQsIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBwbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gJy4vZGlzcGxheS1jb250cm9sbGVyJztcblxubGV0IHBsYXllcjE7XG5sZXQgcGxheWVyMjtcbmxldCBnYW1lT3ZlcjtcblxuZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlUGFnZSgpO1xuXG5mdW5jdGlvbiBzaGlwRHJhZ0ludGVyZmFjZSgpIHtcbiAgZnVuY3Rpb24gdmFsaWRSb3RhdGlvblBvc2l0aW9uKHNoaXApIHtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJzZUludChzaGlwLmNsYXNzTGlzdFsxXS5zbGljZSg2KSwgMTApO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHNoaXAuY2xhc3NMaXN0WzJdO1xuICAgIGNvbnN0IHN0YXJ0WCA9IHBhcnNlSW50KHNoaXAucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMF0uc2xpY2UoMSksIDEwKTtcbiAgICBjb25zdCBzdGFydFkgPSBwYXJzZUludChzaGlwLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdLnNsaWNlKDEpLCAxMCk7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKHN0YXJ0WCArIGxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFg7IGkgPCBzdGFydFggKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXItYm9hcmQgLngke2l9Lnkke3N0YXJ0WX1gKTtcbiAgICAgICAgaWYgKChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnJpZXItcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdjYXJyaWVyJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2JhdHRsZXNoaXAtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdiYXR0bGVzaGlwJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rlc3Ryb3llci1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ2Rlc3Ryb3llcicpXG4gICAgICAgICAgICB8fCAoc3BhY2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtYXJpbmUtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdzdWJtYXJpbmUnKVxuICAgICAgICAgICAgfHwgKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucygncGF0cm9sLWJvYXQtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdwYXRyb2wtYm9hdCcpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKHN0YXJ0WSArIGxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFk7IGkgPCBzdGFydFkgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXItYm9hcmQgLngke3N0YXJ0WH0ueSR7aX1gKTtcbiAgICAgICAgaWYgKChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnJpZXItcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdjYXJyaWVyJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2JhdHRsZXNoaXAtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdiYXR0bGVzaGlwJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rlc3Ryb3llci1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ2Rlc3Ryb3llcicpXG4gICAgICAgICAgICB8fCAoc3BhY2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtYXJpbmUtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdzdWJtYXJpbmUnKVxuICAgICAgICAgICAgfHwgKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucygncGF0cm9sLWJvYXQtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdwYXRyb2wtYm9hdCcpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gdmFsaWREcm9wKGUpIHtcbiAgICBjb25zdCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmIChlLnRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aCA+IDAgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gU2hpcCBwcmVzZW50XG4gICAgfVxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcnNlSW50KHNoaXAuY2xhc3NMaXN0WzFdLnNsaWNlKDYpLCAxMCk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gc2hpcC5jbGFzc0xpc3RbMl07XG4gICAgY29uc3Qgc3RhcnRYID0gcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NMaXN0WzBdLnNsaWNlKDEpLCAxMCk7XG4gICAgY29uc3Qgc3RhcnRZID0gcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NMaXN0WzFdLnNsaWNlKDEpLCAxMCk7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoc3RhcnRYICsgbGVuZ3RoID4gMTApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0WDsgaSA8IHN0YXJ0WCArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllci1ib2FyZCAueCR7aX0ueSR7c3RhcnRZfWApO1xuICAgICAgICBpZiAoKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucygnY2Fycmllci1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ2NhcnJpZXInKVxuICAgICAgICAgICAgfHwgKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucygnYmF0dGxlc2hpcC1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ2JhdHRsZXNoaXAnKVxuICAgICAgICAgICAgfHwgKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucygnZGVzdHJveWVyLXByZXNlbnQnKSAmJiBzaGlwLmlkICE9PSAnZGVzdHJveWVyJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Ym1hcmluZS1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ3N1Ym1hcmluZScpXG4gICAgICAgICAgICB8fCAoc3BhY2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXRyb2wtYm9hdC1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ3BhdHJvbC1ib2F0JykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKHN0YXJ0WSArIGxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFk7IGkgPCBzdGFydFkgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXItYm9hcmQgLngke3N0YXJ0WH0ueSR7aX1gKTtcbiAgICAgICAgaWYgKChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnJpZXItcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdjYXJyaWVyJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2JhdHRsZXNoaXAtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdiYXR0bGVzaGlwJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rlc3Ryb3llci1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ2Rlc3Ryb3llcicpXG4gICAgICAgICAgICB8fCAoc3BhY2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtYXJpbmUtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdzdWJtYXJpbmUnKVxuICAgICAgICAgICAgfHwgKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucygncGF0cm9sLWJvYXQtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdwYXRyb2wtYm9hdCcpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmlkKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9LCAwKTtcbiAgfVxuICBmdW5jdGlvbiBkcmFnRW5kKGUpIHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH1cbiAgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBmdW5jdGlvbiBkcm9wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gICAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgaWYgKHZhbGlkRHJvcChlKSkge1xuICAgICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlKTtcbiAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbW92ZVNoaXBTcGFjZXMoZHJhZ2dhYmxlKTtcbiAgICAgIGRpc3BsYXlDb250cm9sbGVyLmZpbGxTaGlwU3BhY2VzKGRyYWdnYWJsZSwgZS50YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJvdGF0ZVNoaXAoZSkge1xuICAgIGlmICh2YWxpZFJvdGF0aW9uUG9zaXRpb24oZS50YXJnZXQpKSB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCd2ZXJ0aWNhbCcpO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaG9yaXpvbnRhbCcpO1xuICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVtb3ZlU2hpcFNwYWNlcyhlLnRhcmdldCk7XG4gICAgICBkaXNwbGF5Q29udHJvbGxlci5maWxsU2hpcFNwYWNlcyhlLnRhcmdldCwgZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWdFbmQpO1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcbiAgfSk7XG5cbiAgY29uc3Qgc3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllci1ib2FyZCAuc3BhY2UnKTtcbiAgc3BhY2VzLmZvckVhY2goKHNwYWNlKSA9PiB7XG4gICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhaUF0dGFjayhsYXN0TW92ZSA9IFstMSwgLTFdKSB7XG4gIGNvbnN0IGFpTW92ZSA9IHBsYXllcjIubWFrZU1vdmUocGxheWVyMSwgbGFzdE1vdmVbMF0sIGxhc3RNb3ZlWzFdKTtcbiAgZGlzcGxheUNvbnRyb2xsZXIudXBkYXRlQm9hcmQodHJ1ZSwgYWlNb3ZlWzBdLCBhaU1vdmVbMV0sIHBsYXllcjEuZ2V0Qm9hcmQoKSk7XG4gIGlmIChwbGF5ZXIxLmhhc0xvc3QoKSkge1xuICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5lbmRHYW1lKHBsYXllcjIpO1xuICB9IGVsc2UgaWYgKHBsYXllcjEuaXNIaXQoYWlNb3ZlWzBdLCBhaU1vdmVbMV0pKSB7XG4gICAgYWlBdHRhY2soYWlNb3ZlKTtcbiAgfVxufVxuZnVuY3Rpb24gYXR0YWNrKHhDb29yZCwgeUNvb3JkKSB7XG4gIHBsYXllcjEuYXR0YWNrKHBsYXllcjIsIHhDb29yZCwgeUNvb3JkKTtcbiAgZGlzcGxheUNvbnRyb2xsZXIudXBkYXRlQm9hcmQoZmFsc2UsIHhDb29yZCwgeUNvb3JkLCBwbGF5ZXIxLmdldE1vdmVIaXN0b3J5KCkpO1xuICBpZiAocGxheWVyMi5oYXNMb3N0KCkpIHtcbiAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuZW5kR2FtZShwbGF5ZXIxKTtcbiAgfSBlbHNlIGlmIChwbGF5ZXIyLmlzTWlzcyh4Q29vcmQsIHlDb29yZCkpIHtcbiAgICBhaUF0dGFjaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0TmV3R2FtZSgpIHtcbiAgcGxheWVyMS5yZXNldEdhbWUoKTtcbiAgcGxheWVyMi5yZXNldEdhbWUoKTtcblxuICBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIGRpc3BsYXlDb250cm9sbGVyLnN0YXJ0TmV3R2FtZShwbGF5ZXIxKTtcblxuICBzaGlwRHJhZ0ludGVyZmFjZSgpO1xuXG4gIGNvbnN0IHBsYWNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLWJ1dHRvbicpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgcGxhY2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdGFydFBsYXlpbmcoKSk7XG59XG5mdW5jdGlvbiBzdGFydFBsYXlpbmcoKSB7XG4gIGNvbnN0IGNhcnJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FycmllcicpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhdHRsZXNoaXAnKTtcbiAgY29uc3QgZGVzdHJveWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc3Ryb3llcicpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJyk7XG4gIGNvbnN0IHBhdHJvbEJvYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGF0cm9sLWJvYXQnKTtcbiAgcGxheWVyMS5wbGFjZVBpZWNlKFxuICAgIHBhcnNlSW50KGNhcnJpZXIucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMF0uc2xpY2UoMSksIDEwKSxcbiAgICBwYXJzZUludChjYXJyaWVyLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdLnNsaWNlKDEpLCAxMCksXG4gICAgNSxcbiAgICBjYXJyaWVyLmNsYXNzTGlzdFsyXSxcbiAgKTtcbiAgcGxheWVyMS5wbGFjZVBpZWNlKFxuICAgIHBhcnNlSW50KGJhdHRsZXNoaXAucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMF0uc2xpY2UoMSksIDEwKSxcbiAgICBwYXJzZUludChiYXR0bGVzaGlwLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdLnNsaWNlKDEpLCAxMCksXG4gICAgNCxcbiAgICBiYXR0bGVzaGlwLmNsYXNzTGlzdFsyXSxcbiAgKTtcbiAgcGxheWVyMS5wbGFjZVBpZWNlKFxuICAgIHBhcnNlSW50KGRlc3Ryb3llci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFswXS5zbGljZSgxKSwgMTApLFxuICAgIHBhcnNlSW50KGRlc3Ryb3llci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXS5zbGljZSgxKSwgMTApLFxuICAgIDMsXG4gICAgZGVzdHJveWVyLmNsYXNzTGlzdFsyXSxcbiAgKTtcbiAgcGxheWVyMS5wbGFjZVBpZWNlKFxuICAgIHBhcnNlSW50KHN1Ym1hcmluZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFswXS5zbGljZSgxKSwgMTApLFxuICAgIHBhcnNlSW50KHN1Ym1hcmluZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXS5zbGljZSgxKSwgMTApLFxuICAgIDMsXG4gICAgc3VibWFyaW5lLmNsYXNzTGlzdFsyXSxcbiAgKTtcbiAgcGxheWVyMS5wbGFjZVBpZWNlKFxuICAgIHBhcnNlSW50KHBhdHJvbEJvYXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMF0uc2xpY2UoMSksIDEwKSxcbiAgICBwYXJzZUludChwYXRyb2xCb2F0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdLnNsaWNlKDEpLCAxMCksXG4gICAgMixcbiAgICBwYXRyb2xCb2F0LmNsYXNzTGlzdFsyXSxcbiAgKTtcblxuICBwbGF5ZXIyLnJhbmRvbVNoaXBQbGFjZW1lbnQoNSk7XG4gIHBsYXllcjIucmFuZG9tU2hpcFBsYWNlbWVudCg0KTtcbiAgcGxheWVyMi5yYW5kb21TaGlwUGxhY2VtZW50KDMpO1xuICBwbGF5ZXIyLnJhbmRvbVNoaXBQbGFjZW1lbnQoMyk7XG4gIHBsYXllcjIucmFuZG9tU2hpcFBsYWNlbWVudCgyKTtcblxuICBkaXNwbGF5Q29udHJvbGxlci5nZXRHYW1lUmVhZHkocGxheWVyMSk7XG5cbiAgY29uc3Qgc3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI29wcG9uZW50LWJvYXJkIC5zcGFjZScpO1xuICBzcGFjZXMuZm9yRWFjaCgoc3BhY2UpID0+IHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChzcGFjZS5jbGFzc0xpc3RbMl0gPT09ICdFJyAmJiAhZ2FtZU92ZXIpIHtcbiAgICAgIGF0dGFjayhzcGFjZS5jbGFzc0xpc3RbMF0uc2xpY2UoMSksIHNwYWNlLmNsYXNzTGlzdFsxXS5zbGljZSgxKSk7XG4gICAgfVxuICB9KSk7XG5cbiAgY29uc3Qgc3RhcnROZXdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtbmV3LWdhbWUnKTtcbiAgc3RhcnROZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdGFydE5ld0dhbWUoKSk7XG59XG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGNvbnN0IHBsYXllcjFOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtcGxheWVyLTEnKS52YWx1ZTtcbiAgLyogY29uc3QgcGxheWVyMUFpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FpLXBsYXllci0xJykudmFsdWU7ICovXG4gIGNvbnN0IHBsYXllcjJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtcGxheWVyLTInKS52YWx1ZTtcbiAgLyogY29uc3QgcGxheWVyMkFpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FpLXBsYXllci0xJykudmFsdWU7ICovXG5cbiAgcGxheWVyMSA9IHBsYXllcihwbGF5ZXIxTmFtZSwgMTApO1xuICBwbGF5ZXIyID0gcGxheWVyKHBsYXllcjJOYW1lLCAxMCwgMSk7XG5cbiAgZ2FtZU92ZXIgPSBmYWxzZTtcblxuICBkaXNwbGF5Q29udHJvbGxlci5yZW1vdmVGb3JtKCk7XG4gIGRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZUJvYXJkcyhwbGF5ZXIxKTtcblxuICBzaGlwRHJhZ0ludGVyZmFjZSgpO1xuXG4gIGNvbnN0IHBsYWNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLWJ1dHRvbicpO1xuICBwbGFjZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN0YXJ0UGxheWluZygpKTtcbn1cblxuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtYnV0dG9uJyk7XG5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN0YXJ0R2FtZSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==