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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Akshar&family=Oswald:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --ship-color: #353946;\n  --ship-hit-color: #9A031E;\n  --miss-color: #FAFAFF;\n  --ocean-color: #38AECC;\n  --select-color: gold;\n\n  --hue: 226;\n  --saturation: 14%;\n  --light: 24%;\n  --hue-change: 70;\n  --light-change: 30%;\n}\n\nbody {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n\n  background-color: hsl(\n    var(--hue),\n    var(--saturation),\n    calc(var(--light) + var(--light-change))\n  );\n  color: var(--miss-color);\n\n  font-family: 'Akshar', sans-serif;\n}\n\n#header {\n  grid-row: 1;\n  grid-column: 1 / -1;\n  min-width: 100vw;\n  text-align: center;\n  border-bottom: 2px solid black;\n  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);\n  margin-bottom: 1rem;\n  padding: 1rem;\n\n  background-color: hsl(\n    calc(var(--hue) + var(--hue-change)),\n    var(--saturation),\n    calc(var(--light))\n  );\n}\n\n#name {\n  font-size: 3.5rem;\n  font-family: 'Oswald', sans-serif;\n}\n\n#start-form {\n  grid-row: 2;\n  min-width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n}\n\n.player-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.form-item {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.3rem;\n}\n\n.form-item label,\n.form-item input {\n  padding-left: 1rem;\n}\n\n.form-item input {\n  border-style: none;\n  border: 1px solid black;\n  border-radius: 1000px;\n  font-size: 1.2rem;\n}\n\n#start-button,\n#place-button,\n#start-new-game {\n  grid-row: 2;\n  grid-column: 1 / -1;\n  align-self: center;\n  justify-self: center;\n\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid black;\n  border-radius: 1000px;\n  font-size: 1.3rem;\n\n  cursor: pointer;\n\n  background-color: hsl(\n    calc(var(--hue) + var(--hue-change)),\n    var(--saturation),\n    calc(var(--light))\n  );\n}\n\n#main {\n  grid-row: 3;\n  grid-column: 1 / -1;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, calc(min(60vh, 100vw)));\n  gap: 3rem;\n\n  justify-content: center;\n}\n\n#player-board,\n#opponent-board {\n  align-self: center;\n  justify-self: center;\n\n  height: min(60vh, 100vw);\n  width: min(60vh, 100vw);\n  border: 8px double black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n\n  background-color: var(--ocean-color);\n}\n\n.space {\n  height: 100%;\n  width: 100%;\n  border: 1px solid black;\n}\n\n.space.S,\n.ship {\n  background-color: var(--ship-color);\n}\n\n.space.H {\n  background-color: var(--ship-hit-color);\n}\n\n.space.M {\n  background-color: var(--miss-color);\n}\n\n.ship {\n  height: 100%;\n  width: 100%;\n  border: 2px solid var(--select-color);\n}\n\n.ship.Length5.vertical {\n  height: calc(500% + 8px);\n}\n\n.ship.Length5.horizontal {\n  width: calc(500% + 8px);\n}\n\n.ship.Length4.vertical {\n  height: calc(400% + 6px);\n}\n\n.ship.Length4.horizontal {\n  width: calc(400% + 6px);\n}\n\n.ship.Length3.vertical {\n  height: calc(300% + 4px);\n}\n\n.ship.Length3.horizontal {\n  width: calc(300% + 4px);\n}\n\n.ship.Length2.vertical {\n  height: calc(200% + 2px);\n}\n\n.ship.Length2.horizontal {\n  width: calc(200% + 2px);\n}\n\n.hide {\n  display: none;\n}\n\n#opponent-board .space:hover {\n  border: 1px solid var(--select-color);\n}\n\n#ending-banner {\n  grid-row: 4;\n  text-align: center;\n  padding: 1rem;\n\n  font-size: 2.5rem;\n  font-weight: bold;\n  font-family: 'Oswald', sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,qBAAqB;EACrB,sBAAsB;EACtB,oBAAoB;;EAEpB,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB;;;;GAIC;EACD,wBAAwB;;EAExB,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,8BAA8B;EAC9B,8CAA8C;EAC9C,mBAAmB;EACnB,aAAa;;EAEb;;;;GAIC;AACH;;AAEA;EACE,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;;;EAGE,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;;EAEpB,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;;EAEjB,eAAe;;EAEf;;;;GAIC;AACH;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,gEAAgE;EAChE,SAAS;;EAET,uBAAuB;AACzB;;AAEA;;EAEE,kBAAkB;EAClB,oBAAoB;;EAEpB,wBAAwB;EACxB,uBAAuB;EACvB,wBAAwB;EACxB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;;EAEnC,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;AACzB;;AAEA;;EAEE,mCAAmC;AACrC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,qCAAqC;AACvC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;;EAEb,iBAAiB;EACjB,iBAAiB;EACjB,iCAAiC;AACnC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Akshar&family=Oswald:wght@700&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --ship-color: #353946;\n  --ship-hit-color: #9A031E;\n  --miss-color: #FAFAFF;\n  --ocean-color: #38AECC;\n  --select-color: gold;\n\n  --hue: 226;\n  --saturation: 14%;\n  --light: 24%;\n  --hue-change: 70;\n  --light-change: 30%;\n}\n\nbody {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n\n  background-color: hsl(\n    var(--hue),\n    var(--saturation),\n    calc(var(--light) + var(--light-change))\n  );\n  color: var(--miss-color);\n\n  font-family: 'Akshar', sans-serif;\n}\n\n#header {\n  grid-row: 1;\n  grid-column: 1 / -1;\n  min-width: 100vw;\n  text-align: center;\n  border-bottom: 2px solid black;\n  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);\n  margin-bottom: 1rem;\n  padding: 1rem;\n\n  background-color: hsl(\n    calc(var(--hue) + var(--hue-change)),\n    var(--saturation),\n    calc(var(--light))\n  );\n}\n\n#name {\n  font-size: 3.5rem;\n  font-family: 'Oswald', sans-serif;\n}\n\n#start-form {\n  grid-row: 2;\n  min-width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 3rem;\n}\n\n.player-form {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.form-item {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.3rem;\n}\n\n.form-item label,\n.form-item input {\n  padding-left: 1rem;\n}\n\n.form-item input {\n  border-style: none;\n  border: 1px solid black;\n  border-radius: 1000px;\n  font-size: 1.2rem;\n}\n\n#start-button,\n#place-button,\n#start-new-game {\n  grid-row: 2;\n  grid-column: 1 / -1;\n  align-self: center;\n  justify-self: center;\n\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid black;\n  border-radius: 1000px;\n  font-size: 1.3rem;\n\n  cursor: pointer;\n\n  background-color: hsl(\n    calc(var(--hue) + var(--hue-change)),\n    var(--saturation),\n    calc(var(--light))\n  );\n}\n\n#main {\n  grid-row: 3;\n  grid-column: 1 / -1;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, calc(min(60vh, 100vw)));\n  gap: 3rem;\n\n  justify-content: center;\n}\n\n#player-board,\n#opponent-board {\n  align-self: center;\n  justify-self: center;\n\n  height: min(60vh, 100vw);\n  width: min(60vh, 100vw);\n  border: 8px double black;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n\n  background-color: var(--ocean-color);\n}\n\n.space {\n  height: 100%;\n  width: 100%;\n  border: 1px solid black;\n}\n\n.space.S,\n.ship {\n  background-color: var(--ship-color);\n}\n\n.space.H {\n  background-color: var(--ship-hit-color);\n}\n\n.space.M {\n  background-color: var(--miss-color);\n}\n\n.ship {\n  height: 100%;\n  width: 100%;\n  border: 2px solid var(--select-color);\n}\n\n.ship.Length5.vertical {\n  height: calc(500% + 8px);\n}\n\n.ship.Length5.horizontal {\n  width: calc(500% + 8px);\n}\n\n.ship.Length4.vertical {\n  height: calc(400% + 6px);\n}\n\n.ship.Length4.horizontal {\n  width: calc(400% + 6px);\n}\n\n.ship.Length3.vertical {\n  height: calc(300% + 4px);\n}\n\n.ship.Length3.horizontal {\n  width: calc(300% + 4px);\n}\n\n.ship.Length2.vertical {\n  height: calc(200% + 2px);\n}\n\n.ship.Length2.horizontal {\n  width: calc(200% + 2px);\n}\n\n.hide {\n  display: none;\n}\n\n#opponent-board .space:hover {\n  border: 1px solid var(--select-color);\n}\n\n#ending-banner {\n  grid-row: 4;\n  text-align: center;\n  padding: 1rem;\n\n  font-size: 2.5rem;\n  font-weight: bold;\n  font-family: 'Oswald', sans-serif;\n}"],"sourceRoot":""}]);
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
    logo.textContent = 'BATTLESHIP';
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
    const oppenentBoard = document.querySelector('#opponent-board');
    main.insertBefore(playerBoard, oppenentBoard);
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
  const ships = [];
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
    const boardLength = board.length;
    const shipsLength = ships.length;
    for (let i = 0; i <= boardLength; i += 1) {
      board.pop();
    }
    for (let i = 0; i <= shipsLength; i += 1) {
      ships.pop();
    }
    setBoard();
  };
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
    const moveHistoryLength = moveHistory.length;
    for (let i = 0; i < moveHistoryLength; i += 1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ba3NoYXImZmFtaWx5PU9zd2FsZDp3Z2h0QDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXNoaXAtY29sb3I6ICMzNTM5NDY7XFxuICAtLXNoaXAtaGl0LWNvbG9yOiAjOUEwMzFFO1xcbiAgLS1taXNzLWNvbG9yOiAjRkFGQUZGO1xcbiAgLS1vY2Vhbi1jb2xvcjogIzM4QUVDQztcXG4gIC0tc2VsZWN0LWNvbG9yOiBnb2xkO1xcblxcbiAgLS1odWU6IDIyNjtcXG4gIC0tc2F0dXJhdGlvbjogMTQlO1xcbiAgLS1saWdodDogMjQlO1xcbiAgLS1odWUtY2hhbmdlOiA3MDtcXG4gIC0tbGlnaHQtY2hhbmdlOiAzMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbChcXG4gICAgdmFyKC0taHVlKSxcXG4gICAgdmFyKC0tc2F0dXJhdGlvbiksXFxuICAgIGNhbGModmFyKC0tbGlnaHQpICsgdmFyKC0tbGlnaHQtY2hhbmdlKSlcXG4gICk7XFxuICBjb2xvcjogdmFyKC0tbWlzcy1jb2xvcik7XFxuXFxuICBmb250LWZhbWlseTogJ0Frc2hhcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbChcXG4gICAgY2FsYyh2YXIoLS1odWUpICsgdmFyKC0taHVlLWNoYW5nZSkpLFxcbiAgICB2YXIoLS1zYXR1cmF0aW9uKSxcXG4gICAgY2FsYyh2YXIoLS1saWdodCkpXFxuICApO1xcbn1cXG5cXG4jbmFtZSB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI3N0YXJ0LWZvcm0ge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5wbGF5ZXItZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZvcm0taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uZm9ybS1pdGVtIGxhYmVsLFxcbi5mb3JtLWl0ZW0gaW5wdXQge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1pdGVtIGlucHV0IHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNzdGFydC1idXR0b24sXFxuI3BsYWNlLWJ1dHRvbixcXG4jc3RhcnQtbmV3LWdhbWUge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKFxcbiAgICBjYWxjKHZhcigtLWh1ZSkgKyB2YXIoLS1odWUtY2hhbmdlKSksXFxuICAgIHZhcigtLXNhdHVyYXRpb24pLFxcbiAgICBjYWxjKHZhcigtLWxpZ2h0KSlcXG4gICk7XFxufVxcblxcbiNtYWluIHtcXG4gIGdyaWQtcm93OiAzO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIGNhbGMobWluKDYwdmgsIDEwMHZ3KSkpO1xcbiAgZ2FwOiAzcmVtO1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQsXFxuI29wcG9uZW50LWJvYXJkIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiBtaW4oNjB2aCwgMTAwdncpO1xcbiAgd2lkdGg6IG1pbig2MHZoLCAxMDB2dyk7XFxuICBib3JkZXI6IDhweCBkb3VibGUgYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuLWNvbG9yKTtcXG59XFxuXFxuLnNwYWNlIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zcGFjZS5TLFxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uc3BhY2UuSCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWhpdC1jb2xvcik7XFxufVxcblxcbi5zcGFjZS5NIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlbGVjdC1jb2xvcik7XFxufVxcblxcbi5zaGlwLkxlbmd0aDUudmVydGljYWwge1xcbiAgaGVpZ2h0OiBjYWxjKDUwMCUgKyA4cHgpO1xcbn1cXG5cXG4uc2hpcC5MZW5ndGg1Lmhvcml6b250YWwge1xcbiAgd2lkdGg6IGNhbGMoNTAwJSArIDhweCk7XFxufVxcblxcbi5zaGlwLkxlbmd0aDQudmVydGljYWwge1xcbiAgaGVpZ2h0OiBjYWxjKDQwMCUgKyA2cHgpO1xcbn1cXG5cXG4uc2hpcC5MZW5ndGg0Lmhvcml6b250YWwge1xcbiAgd2lkdGg6IGNhbGMoNDAwJSArIDZweCk7XFxufVxcblxcbi5zaGlwLkxlbmd0aDMudmVydGljYWwge1xcbiAgaGVpZ2h0OiBjYWxjKDMwMCUgKyA0cHgpO1xcbn1cXG5cXG4uc2hpcC5MZW5ndGgzLmhvcml6b250YWwge1xcbiAgd2lkdGg6IGNhbGMoMzAwJSArIDRweCk7XFxufVxcblxcbi5zaGlwLkxlbmd0aDIudmVydGljYWwge1xcbiAgaGVpZ2h0OiBjYWxjKDIwMCUgKyAycHgpO1xcbn1cXG5cXG4uc2hpcC5MZW5ndGgyLmhvcml6b250YWwge1xcbiAgd2lkdGg6IGNhbGMoMjAwJSArIDJweCk7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNvcHBvbmVudC1ib2FyZCAuc3BhY2U6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2VsZWN0LWNvbG9yKTtcXG59XFxuXFxuI2VuZGluZy1iYW5uZXIge1xcbiAgZ3JpZC1yb3c6IDQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG9CQUFvQjs7RUFFcEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCOztFQUV2Qjs7OztHQUlDO0VBQ0Qsd0JBQXdCOztFQUV4QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLDhDQUE4QztFQUM5QyxtQkFBbUI7RUFDbkIsYUFBYTs7RUFFYjs7OztHQUlDO0FBQ0g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9COztFQUVwQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsaUJBQWlCOztFQUVqQixlQUFlOztFQUVmOzs7O0dBSUM7QUFDSDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdFQUFnRTtFQUNoRSxTQUFTOztFQUVULHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsb0JBQW9COztFQUVwQix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQzs7RUFFbkMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7O0VBRWIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQ0FBaUM7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWtzaGFyJmZhbWlseT1Pc3dhbGQ6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1zaGlwLWNvbG9yOiAjMzUzOTQ2O1xcbiAgLS1zaGlwLWhpdC1jb2xvcjogIzlBMDMxRTtcXG4gIC0tbWlzcy1jb2xvcjogI0ZBRkFGRjtcXG4gIC0tb2NlYW4tY29sb3I6ICMzOEFFQ0M7XFxuICAtLXNlbGVjdC1jb2xvcjogZ29sZDtcXG5cXG4gIC0taHVlOiAyMjY7XFxuICAtLXNhdHVyYXRpb246IDE0JTtcXG4gIC0tbGlnaHQ6IDI0JTtcXG4gIC0taHVlLWNoYW5nZTogNzA7XFxuICAtLWxpZ2h0LWNoYW5nZTogMzAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woXFxuICAgIHZhcigtLWh1ZSksXFxuICAgIHZhcigtLXNhdHVyYXRpb24pLFxcbiAgICBjYWxjKHZhcigtLWxpZ2h0KSArIHZhcigtLWxpZ2h0LWNoYW5nZSkpXFxuICApO1xcbiAgY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcblxcbiAgZm9udC1mYW1pbHk6ICdBa3NoYXInLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woXFxuICAgIGNhbGModmFyKC0taHVlKSArIHZhcigtLWh1ZS1jaGFuZ2UpKSxcXG4gICAgdmFyKC0tc2F0dXJhdGlvbiksXFxuICAgIGNhbGModmFyKC0tbGlnaHQpKVxcbiAgKTtcXG59XFxuXFxuI25hbWUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNzdGFydC1mb3JtIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4ucGxheWVyLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JtLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmZvcm0taXRlbSBsYWJlbCxcXG4uZm9ybS1pdGVtIGlucHV0IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLmZvcm0taXRlbSBpbnB1dCB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4jc3RhcnQtYnV0dG9uLFxcbiNwbGFjZS1idXR0b24sXFxuI3N0YXJ0LW5ldy1nYW1lIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbChcXG4gICAgY2FsYyh2YXIoLS1odWUpICsgdmFyKC0taHVlLWNoYW5nZSkpLFxcbiAgICB2YXIoLS1zYXR1cmF0aW9uKSxcXG4gICAgY2FsYyh2YXIoLS1saWdodCkpXFxuICApO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBncmlkLXJvdzogMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBjYWxjKG1pbig2MHZoLCAxMDB2dykpKTtcXG4gIGdhcDogM3JlbTtcXG5cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJkLFxcbiNvcHBvbmVudC1ib2FyZCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogbWluKDYwdmgsIDEwMHZ3KTtcXG4gIHdpZHRoOiBtaW4oNjB2aCwgMTAwdncpO1xcbiAgYm9yZGVyOiA4cHggZG91YmxlIGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbi1jb2xvcik7XFxufVxcblxcbi5zcGFjZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3BhY2UuUyxcXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLnNwYWNlLkgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1oaXQtY29sb3IpO1xcbn1cXG5cXG4uc3BhY2UuTSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXG59XFxuXFxuLnNoaXAge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWxlY3QtY29sb3IpO1xcbn1cXG5cXG4uc2hpcC5MZW5ndGg1LnZlcnRpY2FsIHtcXG4gIGhlaWdodDogY2FsYyg1MDAlICsgOHB4KTtcXG59XFxuXFxuLnNoaXAuTGVuZ3RoNS5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiBjYWxjKDUwMCUgKyA4cHgpO1xcbn1cXG5cXG4uc2hpcC5MZW5ndGg0LnZlcnRpY2FsIHtcXG4gIGhlaWdodDogY2FsYyg0MDAlICsgNnB4KTtcXG59XFxuXFxuLnNoaXAuTGVuZ3RoNC5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiBjYWxjKDQwMCUgKyA2cHgpO1xcbn1cXG5cXG4uc2hpcC5MZW5ndGgzLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogY2FsYygzMDAlICsgNHB4KTtcXG59XFxuXFxuLnNoaXAuTGVuZ3RoMy5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiBjYWxjKDMwMCUgKyA0cHgpO1xcbn1cXG5cXG4uc2hpcC5MZW5ndGgyLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogY2FsYygyMDAlICsgMnB4KTtcXG59XFxuXFxuLnNoaXAuTGVuZ3RoMi5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiBjYWxjKDIwMCUgKyAycHgpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jb3Bwb25lbnQtYm9hcmQgLnNwYWNlOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlbGVjdC1jb2xvcik7XFxufVxcblxcbiNlbmRpbmctYmFubmVyIHtcXG4gIGdyaWQtcm93OiA0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbG9nby5pZCA9ICduYW1lJztcbiAgICBsb2dvLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICByZXR1cm4gaGVhZGVyO1xuICB9O1xuICBjb25zdCBjcmVhdGVTdGFydEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm0uaWQgPSAnc3RhcnQtZm9ybSc7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHBsYXllckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBsYXllckZvcm0uY2xhc3NMaXN0LmFkZCgncGxheWVyLWZvcm0nKTtcbiAgICAgIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbmFtZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taXRlbScpO1xuICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIG5hbWVMYWJlbC5mb3IgPSBgbmFtZS1wbGF5ZXItJHtpfWA7XG4gICAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBgUGxheWVyICR7aX0gTmFtZWA7XG4gICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICBuYW1lSW5wdXQubmFtZSA9IGBuYW1lLXBsYXllci0ke2l9YDtcbiAgICAgIG5hbWVJbnB1dC5pZCA9IGBuYW1lLXBsYXllci0ke2l9YDtcbiAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9ICdQbGF5ZXInO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gJ0FJJztcbiAgICAgIH1cbiAgICAgIG5hbWVGaWVsZC5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgICAgbmFtZUZpZWxkLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgICAvKiBjb25zdCBhaUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBhaUZpZWxkLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taXRlbScpO1xuICAgICAgY29uc3QgYWlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICBhaUxhYmVsLmZvciA9IGBhaS1wbGF5ZXItJHtpfWA7XG4gICAgICBhaUxhYmVsLnRleHRDb250ZW50ID0gJ0FJJztcbiAgICAgIGNvbnN0IGFpSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgYWlJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgIGFpSW5wdXQubmFtZSA9IGBhaS1wbGF5ZXItJHtpfWA7XG4gICAgICBhaUlucHV0LmlkID0gYGFpLXBsYXllci0ke2l9YDtcbiAgICAgIGFpRmllbGQuYXBwZW5kQ2hpbGQoYWlMYWJlbCk7XG4gICAgICBhaUZpZWxkLmFwcGVuZENoaWxkKGFpSW5wdXQpO1xuICAgICAgcGxheWVyRm9ybS5hcHBlbmRDaGlsZChuYW1lRmllbGQpO1xuICAgICAgcGxheWVyRm9ybS5hcHBlbmRDaGlsZChhaUZpZWxkKTsgKi9cbiAgICAgIHBsYXllckZvcm0uYXBwZW5kQ2hpbGQobmFtZUZpZWxkKTtcblxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChwbGF5ZXJGb3JtKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGFydEJ1dHRvbi5pZCA9ICdzdGFydC1idXR0b24nO1xuICAgIHN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ1NUQVJUIEdBTUUnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgIHJldHVybiBmb3JtO1xuICB9O1xuICBjb25zdCBjcmVhdGVCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IHBsYXlTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZChgeCR7an1gLCBgeSR7aX1gLCBib2FyZFtqXVtpXSwgJ3NwYWNlJyk7XG4gICAgICAgIHBsYXlTcGFjZS5hcHBlbmRDaGlsZChzcGFjZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYXlTcGFjZTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVTdGFydEZvcm0oKTtcbiAgICBjb25zdCBlbmRpbmdCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbmRpbmdCYW5uZXIuaWQgPSAnZW5kaW5nLWJhbm5lcic7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGVuZGluZ0Jhbm5lcik7XG4gIH07XG4gIGNvbnN0IHJlbW92ZUZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0LWZvcm0nKTtcbiAgICBib2R5LnJlbW92ZUNoaWxkKGZvcm0pO1xuICB9O1xuICBjb25zdCBmaWxsU2hpcFNwYWNlcyA9IChzaGlwLCBwYXJlbnQpID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJzZUludChzaGlwLmNsYXNzTGlzdFsxXS5zbGljZSg2KSwgMTApO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHNoaXAuY2xhc3NMaXN0WzJdO1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHBhcnNlSW50KHBhcmVudC5jbGFzc0xpc3RbMF0uc2xpY2UoMSksIDEwKTtcbiAgICAgIGNvbnN0IHlJbmRleCA9IHBhcmVudC5jbGFzc0xpc3RbMV07XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IHN0YXJ0SW5kZXggKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXItYm9hcmQgLngke2l9LiR7eUluZGV4fWApO1xuICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKGAke3NoaXAuaWR9LXByZXNlbnRgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHBhcnNlSW50KHBhcmVudC5jbGFzc0xpc3RbMV0uc2xpY2UoMSksIDEwKTtcbiAgICAgIGNvbnN0IHhJbmRleCA9IHBhcmVudC5jbGFzc0xpc3RbMF07XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IHN0YXJ0SW5kZXggKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXItYm9hcmQgLnkke2l9LiR7eEluZGV4fWApO1xuICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKGAke3NoaXAuaWR9LXByZXNlbnRgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbW92ZVNoaXBTcGFjZXMgPSAoc2hpcCkgPT4ge1xuICAgIGNvbnN0IG9sZFNwYWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3NoaXAuaWR9LXByZXNlbnRgKTtcbiAgICBvbGRTcGFjZXMuZm9yRWFjaCgoc3BhY2UpID0+IHNwYWNlLmNsYXNzTGlzdC5yZW1vdmUoYCR7c2hpcC5pZH0tcHJlc2VudGApKTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlU2hpcERyYWdnYWJsZSA9IChsZW5ndGgpID0+IHtcbiAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcCcsIGBMZW5ndGgke2xlbmd0aH1gLCAndmVydGljYWwnKTtcbiAgICByZXR1cm4gc2hpcDtcbiAgfTtcbiAgY29uc3QgY3JlYXRlQm9hcmRzID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXJ0QnV0dG9uLmlkID0gJ3BsYWNlLWJ1dHRvbic7XG4gICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnUExBQ0UgU0hJUFMnO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uaWQgPSAnbWFpbic7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcblxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gY3JlYXRlQm9hcmQocGxheWVyLmdldEJvYXJkKCkpO1xuICAgIHBsYXllckJvYXJkLmlkID0gJ3BsYXllci1ib2FyZCc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZCk7XG5cbiAgICBjb25zdCBjYXJyaWVyID0gY3JlYXRlU2hpcERyYWdnYWJsZSg1KTtcbiAgICBjYXJyaWVyLmlkID0gJ2NhcnJpZXInO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBjcmVhdGVTaGlwRHJhZ2dhYmxlKDQpO1xuICAgIGJhdHRsZXNoaXAuaWQgPSAnYmF0dGxlc2hpcCc7XG4gICAgY29uc3QgZGVzdHJveWVyID0gY3JlYXRlU2hpcERyYWdnYWJsZSgzKTtcbiAgICBkZXN0cm95ZXIuaWQgPSAnZGVzdHJveWVyJztcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBjcmVhdGVTaGlwRHJhZ2dhYmxlKDMpO1xuICAgIHN1Ym1hcmluZS5pZCA9ICdzdWJtYXJpbmUnO1xuICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBjcmVhdGVTaGlwRHJhZ2dhYmxlKDIpO1xuICAgIHBhdHJvbEJvYXQuaWQgPSAncGF0cm9sLWJvYXQnO1xuXG4gICAgY29uc3QgYm9hdFN0YXJ0MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54MC55MCcpO1xuICAgIGNvbnN0IGJvYXRTdGFydDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueDIueTAnKTtcbiAgICBjb25zdCBib2F0U3RhcnQzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLng0LnkwJyk7XG4gICAgY29uc3QgYm9hdFN0YXJ0NCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54Ni55MCcpO1xuICAgIGNvbnN0IGJvYXRTdGFydDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueDgueTAnKTtcblxuICAgIGJvYXRTdGFydDEuYXBwZW5kQ2hpbGQoY2Fycmllcik7XG4gICAgYm9hdFN0YXJ0Mi5hcHBlbmRDaGlsZChiYXR0bGVzaGlwKTtcbiAgICBib2F0U3RhcnQzLmFwcGVuZENoaWxkKGRlc3Ryb3llcik7XG4gICAgYm9hdFN0YXJ0NC5hcHBlbmRDaGlsZChzdWJtYXJpbmUpO1xuICAgIGJvYXRTdGFydDUuYXBwZW5kQ2hpbGQocGF0cm9sQm9hdCk7XG5cbiAgICBmaWxsU2hpcFNwYWNlcyhjYXJyaWVyLCBjYXJyaWVyLnBhcmVudEVsZW1lbnQpO1xuICAgIGZpbGxTaGlwU3BhY2VzKGJhdHRsZXNoaXAsIGJhdHRsZXNoaXAucGFyZW50RWxlbWVudCk7XG4gICAgZmlsbFNoaXBTcGFjZXMoZGVzdHJveWVyLCBkZXN0cm95ZXIucGFyZW50RWxlbWVudCk7XG4gICAgZmlsbFNoaXBTcGFjZXMoc3VibWFyaW5lLCBzdWJtYXJpbmUucGFyZW50RWxlbWVudCk7XG4gICAgZmlsbFNoaXBTcGFjZXMocGF0cm9sQm9hdCwgcGF0cm9sQm9hdC5wYXJlbnRFbGVtZW50KTtcblxuICAgIGNvbnN0IG9wcGVuZW50Qm9hcmQgPSBjcmVhdGVCb2FyZChwbGF5ZXIuZ2V0TW92ZUhpc3RvcnkoKSk7XG4gICAgb3BwZW5lbnRCb2FyZC5pZCA9ICdvcHBvbmVudC1ib2FyZCc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChvcHBlbmVudEJvYXJkKTtcbiAgfTtcbiAgY29uc3QgZ2V0R2FtZVJlYWR5ID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG5cbiAgICBjb25zdCBjYXJyaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcnJpZXInKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhdHRsZXNoaXAnKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzdHJveWVyJyk7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1hcmluZScpO1xuICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGF0cm9sLWJvYXQnKTtcblxuICAgIHJlbW92ZVNoaXBTcGFjZXMoY2Fycmllcik7XG4gICAgY2Fycmllci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNhcnJpZXIpO1xuICAgIHJlbW92ZVNoaXBTcGFjZXMoYmF0dGxlc2hpcCk7XG4gICAgYmF0dGxlc2hpcC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGJhdHRsZXNoaXApO1xuICAgIHJlbW92ZVNoaXBTcGFjZXMoZGVzdHJveWVyKTtcbiAgICBkZXN0cm95ZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChkZXN0cm95ZXIpO1xuICAgIHJlbW92ZVNoaXBTcGFjZXMoc3VibWFyaW5lKTtcbiAgICBzdWJtYXJpbmUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChzdWJtYXJpbmUpO1xuICAgIHJlbW92ZVNoaXBTcGFjZXMocGF0cm9sQm9hdCk7XG4gICAgcGF0cm9sQm9hdC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHBhdHJvbEJvYXQpO1xuXG4gICAgY29uc3QgcGxhY2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhY2UtYnV0dG9uJyk7XG4gICAgcGxhY2VCdG4ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwbGFjZUJ0bik7XG5cbiAgICBjb25zdCBuZXdHYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3R2FtZUJ0bi5pZCA9ICdzdGFydC1uZXctZ2FtZSc7XG4gICAgbmV3R2FtZUJ0bi50ZXh0Q29udGVudCA9ICdTVEFSVCBORVcgR0FNRSc7XG4gICAgYm9keS5hcHBlbmRDaGlsZChuZXdHYW1lQnRuKTtcblxuICAgIG1haW4ucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci1ib2FyZCcpKTtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUJvYXJkKHBsYXllci5nZXRCb2FyZCgpKTtcbiAgICBwbGF5ZXJCb2FyZC5pZCA9ICdwbGF5ZXItYm9hcmQnO1xuICAgIGNvbnN0IG9wcGVuZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Bwb25lbnQtYm9hcmQnKTtcbiAgICBtYWluLmluc2VydEJlZm9yZShwbGF5ZXJCb2FyZCwgb3BwZW5lbnRCb2FyZCk7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZUJvYXJkID0gKHBsYXllckJvYXJkLCB4Q29vcmQsIHlDb29yZCwgYm9hcmQpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IHRvVXBkYXRlO1xuICAgICAgaWYgKHBsYXllckJvYXJkICYmIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9PT0gJ0gnKSB7XG4gICAgICAgIHRvVXBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllci1ib2FyZCBbY2xhc3MgPSAneCR7eENvb3JkfSB5JHt5Q29vcmR9IFMgc3BhY2UnXWApO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZCkge1xuICAgICAgICB0b1VwZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXItYm9hcmQgW2NsYXNzID0gJ3gke3hDb29yZH0geSR7eUNvb3JkfSBFIHNwYWNlJ11gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvVXBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI29wcG9uZW50LWJvYXJkIFtjbGFzcyA9ICd4JHt4Q29vcmR9IHkke3lDb29yZH0gRSBzcGFjZSddYCk7XG4gICAgICB9XG4gICAgICB0b1VwZGF0ZS5jbGFzc0xpc3QucmVwbGFjZSh0b1VwZGF0ZS5jbGFzc0xpc3RbMl0sIGJvYXJkW3hDb29yZF1beUNvb3JkXSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZXJyfSBhdCBtb3ZlOiAoJHt4Q29vcmR9LCAke3lDb29yZH0pOyBib2FyZDogJHtib2FyZFt4Q29vcmRdW3lDb29yZF19YCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBlbmRHYW1lID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGVuZGluZ0Jhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmRpbmctYmFubmVyJyk7XG4gICAgZW5kaW5nQmFubmVyLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmdldE5hbWUoKX0gd2lucyFgO1xuICB9O1xuICBjb25zdCBzdGFydE5ld0dhbWUgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbiAgICBjb25zdCBzdGFydE5ld0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1uZXctZ2FtZScpO1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQobWFpbik7XG4gICAgYm9keS5yZW1vdmVDaGlsZChzdGFydE5ld0J0bik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZGluZy1iYW5uZXInKS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNyZWF0ZUJvYXJkcyhwbGF5ZXIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUGFnZSxcbiAgICByZW1vdmVGb3JtLFxuICAgIGZpbGxTaGlwU3BhY2VzLFxuICAgIHJlbW92ZVNoaXBTcGFjZXMsXG4gICAgY3JlYXRlQm9hcmRzLFxuICAgIGdldEdhbWVSZWFkeSxcbiAgICB1cGRhdGVCb2FyZCxcbiAgICBlbmRHYW1lLFxuICAgIHN0YXJ0TmV3R2FtZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyO1xuIiwiaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwJztcblxuY29uc3QgZ2FtZWJvYXJkID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3Qgc2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb2wgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqICs9IDEpIHtcbiAgICAgICAgY29sW2pdID0gJ0UnO1xuICAgICAgfVxuICAgICAgYm9hcmRbaV0gPSBjb2w7XG4gICAgfVxuICB9O1xuICBzZXRCb2FyZCgpO1xuXG4gIGNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmRMZW5ndGggPSBib2FyZC5sZW5ndGg7XG4gICAgY29uc3Qgc2hpcHNMZW5ndGggPSBzaGlwcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYm9hcmRMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgYm9hcmQucG9wKCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHNoaXBzTGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHNoaXBzLnBvcCgpO1xuICAgIH1cbiAgICBzZXRCb2FyZCgpO1xuICB9O1xuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHNoaXBzO1xuICBjb25zdCB1bmRvU2hpcEFkZCA9ICh4Q29vcmQsIHlDb29yZCwgaW5kZXgsIGRpcmVjdGlvbikgPT4ge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChsZXQgaSA9IHhDb29yZDsgaSA8IGluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgYm9hcmRbaV1beUNvb3JkXSA9ICdFJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IHlDb29yZDsgaSA8IGluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgYm9hcmRbeENvb3JkXVtpXSA9ICdFJztcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBkaXJlY3Rpb24pID0+IHtcbiAgICBjb25zdCBwaWVjZSA9IHNoaXAobGVuZ3RoKTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgeENvb3JkICsgbGVuZ3RoIDw9IHdpZHRoKSB7XG4gICAgICBmb3IgKGxldCBpID0geENvb3JkOyBpIDwgeENvb3JkICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW3lDb29yZF0gPT09ICdFJykge1xuICAgICAgICAgIGJvYXJkW2ldW3lDb29yZF0gPSAnUyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5kb1NoaXBBZGQoeENvb3JkLCB5Q29vcmQsIGksIGRpcmVjdGlvbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiB5Q29vcmQgKyBsZW5ndGggPD0gaGVpZ2h0KSB7XG4gICAgICBmb3IgKGxldCBpID0geUNvb3JkOyBpIDwgeUNvb3JkICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGJvYXJkW3hDb29yZF1baV0gPT09ICdFJykge1xuICAgICAgICAgIGJvYXJkW3hDb29yZF1baV0gPSAnUyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5kb1NoaXBBZGQoeENvb3JkLCB5Q29vcmQsIGksIGRpcmVjdGlvbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc2hpcHMucHVzaCh7IHNoaXA6IHBpZWNlLCB4U3RhcnQ6IHhDb29yZCwgeVN0YXJ0OiB5Q29vcmQgfSk7XG4gIH07XG4gIGNvbnN0IGhpdFNoaXAgPSAoeENvb3JkLCB5Q29vcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2hpcHNbaV0ueFN0YXJ0ID09PSBwYXJzZUludCh4Q29vcmQsIDEwKVxuICAgICAgICAgICYmICh5Q29vcmQgPj0gc2hpcHNbaV0ueVN0YXJ0XG4gICAgICAgICAgJiYgeUNvb3JkIDwgc2hpcHNbaV0ueVN0YXJ0ICsgc2hpcHNbaV0uc2hpcC5nZXRMZW5ndGgoKSkpIHtcbiAgICAgICAgc2hpcHNbaV0uc2hpcC5oaXQoeUNvb3JkIC0gc2hpcHNbaV0ueVN0YXJ0KTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcHNbaV0ueVN0YXJ0ID09PSBwYXJzZUludCh5Q29vcmQsIDEwKVxuICAgICAgICAgICYmICh4Q29vcmQgPj0gc2hpcHNbaV0ueFN0YXJ0XG4gICAgICAgICAgJiYgeENvb3JkIDwgc2hpcHNbaV0ueFN0YXJ0ICsgc2hpcHNbaV0uc2hpcC5nZXRMZW5ndGgoKSkpIHtcbiAgICAgICAgc2hpcHNbaV0uc2hpcC5oaXQoeENvb3JkIC0gc2hpcHNbaV0ueFN0YXJ0KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoeENvb3JkLCB5Q29vcmQpID0+IHtcbiAgICBpZiAoKHhDb29yZCA+PSAwICYmIHhDb29yZCA8IHdpZHRoKSAmJiAoeUNvb3JkID49IDAgJiYgeUNvb3JkIDwgaGVpZ2h0KSkge1xuICAgICAgaWYgKGJvYXJkW3hDb29yZF1beUNvb3JkXSA9PT0gJ1MnKSB7XG4gICAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9ICdIJztcbiAgICAgICAgaGl0U2hpcCh4Q29vcmQsIHlDb29yZCk7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkW3hDb29yZF1beUNvb3JkXSA9PT0gJ0UnKSB7XG4gICAgICAgIGJvYXJkW3hDb29yZF1beUNvb3JkXSA9ICdNJztcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKCFzaGlwc1tpXS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZXNldEJvYXJkLCBnZXRCb2FyZCwgZ2V0U2hpcHMsIHBsYWNlU2hpcCwgcmVjaWV2ZUF0dGFjaywgYWxsU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDtcbiIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5jb25zdCBwbGF5ZXIgPSAobmFtZSwgYm9hcmRTaXplLCBpc0FpID0gZmFsc2UpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQoYm9hcmRTaXplLCBib2FyZFNpemUpO1xuICBjb25zdCBtb3ZlSGlzdG9yeSA9IFtdO1xuICBsZXQgbGFzdEhpdFggPSAtMTtcbiAgbGV0IGxhc3RIaXRZID0gLTE7XG4gIGxldCB0cmllZEFsbEFkaiA9IGZhbHNlO1xuXG4gIGNvbnN0IHNldE1vdmVIaXN0b3J5ID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRTaXplOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbCA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFNpemU7IGogKz0gMSkge1xuICAgICAgICBjb2xbal0gPSAnRSc7XG4gICAgICB9XG4gICAgICBtb3ZlSGlzdG9yeVtpXSA9IGNvbDtcbiAgICB9XG4gIH07XG4gIHNldE1vdmVIaXN0b3J5KCk7XG5cbiAgY29uc3QgcmVzZXRCb2FyZCA9ICgpID0+IHtcbiAgICBib2FyZC5yZXNldEJvYXJkKCk7XG4gIH07XG4gIGNvbnN0IHJlc2V0TW92ZUhpc3RvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgbW92ZUhpc3RvcnlMZW5ndGggPSBtb3ZlSGlzdG9yeS5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3ZlSGlzdG9yeUxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBtb3ZlSGlzdG9yeS5wb3AoKTtcbiAgICB9XG4gICAgc2V0TW92ZUhpc3RvcnkoKTtcbiAgfTtcbiAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIHJlc2V0Qm9hcmQoKTtcbiAgICByZXNldE1vdmVIaXN0b3J5KCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZC5nZXRCb2FyZCgpO1xuICBjb25zdCBnZXRNb3ZlSGlzdG9yeSA9ICgpID0+IG1vdmVIaXN0b3J5O1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3QgcGxhY2VQaWVjZSA9ICh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBkaXJlY3Rpb24pID0+IHtcbiAgICBib2FyZC5wbGFjZVNoaXAoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgZGlyZWN0aW9uKTtcbiAgfTtcbiAgY29uc3QgaXNMZWdhbE1vdmUgPSAoeENvb3JkLCB5Q29vcmQpID0+IHtcbiAgICBpZiAoKHhDb29yZCA+PSAwICYmIHhDb29yZCA8IGJvYXJkU2l6ZSkgJiYgKHlDb29yZCA+PSAwICYmIHlDb29yZCA8IGJvYXJkU2l6ZSkpIHtcbiAgICAgIHJldHVybiBib2FyZC5nZXRCb2FyZCgpW3hDb29yZF1beUNvb3JkXSA9PT0gJ0UnIHx8IGJvYXJkLmdldEJvYXJkKClbeENvb3JkXVt5Q29vcmRdID09PSAnUyc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgaXNMZWdhbEF0dGFjayA9ICh4Q29vcmQsIHlDb29yZCkgPT4ge1xuICAgIGlmICgoeENvb3JkID49IDAgJiYgeENvb3JkIDwgYm9hcmRTaXplKSAmJiAoeUNvb3JkID49IDAgJiYgeUNvb3JkIDwgYm9hcmRTaXplKSkge1xuICAgICAgcmV0dXJuIG1vdmVIaXN0b3J5W3hDb29yZF1beUNvb3JkXSA9PT0gJ0UnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGF0dGFjayA9IChlbmVteSwgeENvb3JkLCB5Q29vcmQpID0+IHtcbiAgICBpZiAoaXNMZWdhbEF0dGFjayh4Q29vcmQsIHlDb29yZCkpIHtcbiAgICAgIGVuZW15LnJlY2lldmVBdHRhY2soeENvb3JkLCB5Q29vcmQpO1xuICAgICAgaWYgKGVuZW15LmlzSGl0KHhDb29yZCwgeUNvb3JkKSkge1xuICAgICAgICBtb3ZlSGlzdG9yeVt4Q29vcmRdW3lDb29yZF0gPSAnSCc7XG4gICAgICB9IGVsc2UgaWYgKGVuZW15LmlzTWlzcyh4Q29vcmQsIHlDb29yZCkpIHtcbiAgICAgICAgbW92ZUhpc3RvcnlbeENvb3JkXVt5Q29vcmRdID0gJ00nO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9ICh4Q29vcmQsIHlDb29yZCkgPT4ge1xuICAgIGlmIChpc0xlZ2FsTW92ZSh4Q29vcmQsIHlDb29yZCkpIHtcbiAgICAgIGJvYXJkLnJlY2lldmVBdHRhY2soeENvb3JkLCB5Q29vcmQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaXNNaXNzID0gKHhDb29yZCwgeUNvb3JkKSA9PiBib2FyZC5nZXRCb2FyZCgpW3hDb29yZF1beUNvb3JkXSA9PT0gJ00nO1xuICBjb25zdCBpc0hpdCA9ICh4Q29vcmQsIHlDb29yZCkgPT4gYm9hcmQuZ2V0Qm9hcmQoKVt4Q29vcmRdW3lDb29yZF0gPT09ICdIJztcbiAgY29uc3QgaGFzTG9zdCA9ICgpID0+IGJvYXJkLmFsbFN1bmsoKTtcbiAgY29uc3QgbWFrZU1vdmUgPSAoZW5lbXksIHByZXZYID0gLTEsIHByZXZZID0gLTEpID0+IHtcbiAgICBpZiAoaXNBaSkge1xuICAgICAgbGV0IG1ha2luZ01vdmUgPSB0cnVlO1xuICAgICAgd2hpbGUgKG1ha2luZ01vdmUpIHtcbiAgICAgICAgaWYgKHByZXZYID49IDAgJiYgcHJldlkgPj0gMCkge1xuICAgICAgICAgIGxhc3RIaXRYID0gcHJldlg7XG4gICAgICAgICAgbGFzdEhpdFkgPSBwcmV2WTtcbiAgICAgICAgICB0cmllZEFsbEFkaiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0SGl0WCA+PSAwICYmIGxhc3RIaXRZID49IDAgJiYgIXRyaWVkQWxsQWRqKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA2OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChpc0xlZ2FsQXR0YWNrKGxhc3RIaXRYICsgaSwgbGFzdEhpdFkpKSB7XG4gICAgICAgICAgICAgIGF0dGFjayhlbmVteSwgbGFzdEhpdFggKyBpLCBsYXN0SGl0WSk7XG4gICAgICAgICAgICAgIG1ha2luZ01vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIFtsYXN0SGl0WCArIGksIGxhc3RIaXRZXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0xlZ2FsQXR0YWNrKGxhc3RIaXRYIC0gaSwgbGFzdEhpdFkpKSB7XG4gICAgICAgICAgICAgIGF0dGFjayhlbmVteSwgbGFzdEhpdFggLSBpLCBsYXN0SGl0WSk7XG4gICAgICAgICAgICAgIG1ha2luZ01vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIFtsYXN0SGl0WCAtIGksIGxhc3RIaXRZXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0xlZ2FsQXR0YWNrKGxhc3RIaXRYLCBsYXN0SGl0WSArIGkpKSB7XG4gICAgICAgICAgICAgIGF0dGFjayhlbmVteSwgbGFzdEhpdFgsIGxhc3RIaXRZICsgaSk7XG4gICAgICAgICAgICAgIG1ha2luZ01vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIFtsYXN0SGl0WCwgbGFzdEhpdFkgKyBpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0xlZ2FsQXR0YWNrKGxhc3RIaXRYLCBsYXN0SGl0WSAtIGkpKSB7XG4gICAgICAgICAgICAgIGF0dGFjayhlbmVteSwgbGFzdEhpdFgsIGxhc3RIaXRZIC0gaSk7XG4gICAgICAgICAgICAgIG1ha2luZ01vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIFtsYXN0SGl0WCwgbGFzdEhpdFkgLSBpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdHJpZWRBbGxBZGogPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeFJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgICBjb25zdCB5UmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkU2l6ZSk7XG4gICAgICAgIGlmIChpc0xlZ2FsQXR0YWNrKHhSYW5kLCB5UmFuZCkpIHtcbiAgICAgICAgICBhdHRhY2soZW5lbXksIHhSYW5kLCB5UmFuZCk7XG4gICAgICAgICAgbWFraW5nTW92ZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBbeFJhbmQsIHlSYW5kXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgY29uc3QgcmFuZG9tU2hpcFBsYWNlbWVudCA9IChsZW5ndGgpID0+IHtcbiAgICBsZXQgcGxhY2luZ1NoaXAgPSB0cnVlO1xuICAgIHdoaWxlIChwbGFjaW5nU2hpcCkge1xuICAgICAgY29uc3QgeFJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgY29uc3QgeVJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZFNpemUpO1xuICAgICAgLy8gUmFuZG9taXplIGRpcmVjdGlvbjsgMCBob3Jpem9udGFsLCAxIHZlcnRpY2FsXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgIGxldCBmb3VuZExlZ2FsU3BhY2UgPSBmYWxzZTtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgaWYgKHhSYW5kICsgbGVuZ3RoIDw9IGJvYXJkU2l6ZSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSB4UmFuZDsgaSA8IHhSYW5kICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChib2FyZC5nZXRCb2FyZCgpW2ldW3lSYW5kXSAhPT0gJ0UnKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgPT09IHhSYW5kICsgbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICBmb3VuZExlZ2FsU3BhY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZm91bmRMZWdhbFNwYWNlKSB7XG4gICAgICAgICAgcGxhY2luZ1NoaXAgPSBmYWxzZTtcbiAgICAgICAgICBwbGFjZVBpZWNlKHhSYW5kLCB5UmFuZCwgbGVuZ3RoLCAnaG9yaXpvbnRhbCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgICBpZiAoeFJhbmQgKyBsZW5ndGggPD0gYm9hcmRTaXplKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IHlSYW5kOyBpIDwgeVJhbmQgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbeFJhbmRdW2ldICE9PSAnRScpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSA9PT0geVJhbmQgKyBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIGZvdW5kTGVnYWxTcGFjZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmb3VuZExlZ2FsU3BhY2UpIHtcbiAgICAgICAgICBwbGFjaW5nU2hpcCA9IGZhbHNlO1xuICAgICAgICAgIHBsYWNlUGllY2UoeFJhbmQsIHlSYW5kLCBsZW5ndGgsICd2ZXJ0aWNhbCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQsXG4gICAgZ2V0TW92ZUhpc3RvcnksXG4gICAgZ2V0TmFtZSxcbiAgICBwbGFjZVBpZWNlLFxuICAgIGlzTGVnYWxNb3ZlLFxuICAgIGF0dGFjayxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGlzTWlzcyxcbiAgICBpc0hpdCxcbiAgICBoYXNMb3N0LFxuICAgIG1ha2VNb3ZlLFxuICAgIHJhbmRvbVNoaXBQbGFjZW1lbnQsXG4gICAgcmVzZXRHYW1lLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyO1xuIiwiY29uc3Qgc2hpcCA9IChsZW5ndGgpID0+IHtcbiAgY29uc3QgaGVhbHRoID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gIGNvbnN0IGdldEhlYWx0aCA9ICgpID0+IGhlYWx0aDtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICBjb25zdCBoaXQgPSAodGFyZ2V0KSA9PiB7XG4gICAgaWYgKHRhcmdldCA8IGxlbmd0aCAmJiB0YXJnZXQgPj0gMCkge1xuICAgICAgaGVhbHRoW3RhcmdldF0gPSAxO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChoZWFsdGhbaV0gIT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldEhlYWx0aCwgZ2V0TGVuZ3RoLCBoaXQsIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBwbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IGRpc3BsYXlDb250cm9sbGVyIGZyb20gJy4vZGlzcGxheS1jb250cm9sbGVyJztcblxubGV0IHBsYXllcjE7XG5sZXQgcGxheWVyMjtcbmxldCBnYW1lT3ZlcjtcblxuZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlUGFnZSgpO1xuXG5mdW5jdGlvbiBzaGlwRHJhZ0ludGVyZmFjZSgpIHtcbiAgZnVuY3Rpb24gdmFsaWRSb3RhdGlvblBvc2l0aW9uKHNoaXApIHtcbiAgICBjb25zdCBsZW5ndGggPSBwYXJzZUludChzaGlwLmNsYXNzTGlzdFsxXS5zbGljZSg2KSwgMTApO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHNoaXAuY2xhc3NMaXN0WzJdO1xuICAgIGNvbnN0IHN0YXJ0WCA9IHBhcnNlSW50KHNoaXAucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMF0uc2xpY2UoMSksIDEwKTtcbiAgICBjb25zdCBzdGFydFkgPSBwYXJzZUludChzaGlwLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdLnNsaWNlKDEpLCAxMCk7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKHN0YXJ0WCArIGxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFg7IGkgPCBzdGFydFggKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXItYm9hcmQgLngke2l9Lnkke3N0YXJ0WX1gKTtcbiAgICAgICAgaWYgKChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnJpZXItcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdjYXJyaWVyJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2JhdHRsZXNoaXAtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdiYXR0bGVzaGlwJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rlc3Ryb3llci1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ2Rlc3Ryb3llcicpXG4gICAgICAgICAgICB8fCAoc3BhY2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtYXJpbmUtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdzdWJtYXJpbmUnKVxuICAgICAgICAgICAgfHwgKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucygncGF0cm9sLWJvYXQtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdwYXRyb2wtYm9hdCcpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKHN0YXJ0WSArIGxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFk7IGkgPCBzdGFydFkgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXItYm9hcmQgLngke3N0YXJ0WH0ueSR7aX1gKTtcbiAgICAgICAgaWYgKChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnJpZXItcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdjYXJyaWVyJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2JhdHRsZXNoaXAtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdiYXR0bGVzaGlwJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rlc3Ryb3llci1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ2Rlc3Ryb3llcicpXG4gICAgICAgICAgICB8fCAoc3BhY2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtYXJpbmUtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdzdWJtYXJpbmUnKVxuICAgICAgICAgICAgfHwgKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucygncGF0cm9sLWJvYXQtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdwYXRyb2wtYm9hdCcpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gdmFsaWREcm9wKGUpIHtcbiAgICBjb25zdCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmIChlLnRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aCA+IDAgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gU2hpcCBwcmVzZW50XG4gICAgfVxuICAgIGNvbnN0IGxlbmd0aCA9IHBhcnNlSW50KHNoaXAuY2xhc3NMaXN0WzFdLnNsaWNlKDYpLCAxMCk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gc2hpcC5jbGFzc0xpc3RbMl07XG4gICAgY29uc3Qgc3RhcnRYID0gcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NMaXN0WzBdLnNsaWNlKDEpLCAxMCk7XG4gICAgY29uc3Qgc3RhcnRZID0gcGFyc2VJbnQoZS50YXJnZXQuY2xhc3NMaXN0WzFdLnNsaWNlKDEpLCAxMCk7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoc3RhcnRYICsgbGVuZ3RoID4gMTApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0WDsgaSA8IHN0YXJ0WCArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BsYXllci1ib2FyZCAueCR7aX0ueSR7c3RhcnRZfWApO1xuICAgICAgICBpZiAoKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucygnY2Fycmllci1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ2NhcnJpZXInKVxuICAgICAgICAgICAgfHwgKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucygnYmF0dGxlc2hpcC1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ2JhdHRsZXNoaXAnKVxuICAgICAgICAgICAgfHwgKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucygnZGVzdHJveWVyLXByZXNlbnQnKSAmJiBzaGlwLmlkICE9PSAnZGVzdHJveWVyJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Ym1hcmluZS1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ3N1Ym1hcmluZScpXG4gICAgICAgICAgICB8fCAoc3BhY2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXRyb2wtYm9hdC1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ3BhdHJvbC1ib2F0JykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKHN0YXJ0WSArIGxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFk7IGkgPCBzdGFydFkgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXItYm9hcmQgLngke3N0YXJ0WH0ueSR7aX1gKTtcbiAgICAgICAgaWYgKChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnJpZXItcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdjYXJyaWVyJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2JhdHRsZXNoaXAtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdiYXR0bGVzaGlwJylcbiAgICAgICAgICAgIHx8IChzcGFjZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rlc3Ryb3llci1wcmVzZW50JykgJiYgc2hpcC5pZCAhPT0gJ2Rlc3Ryb3llcicpXG4gICAgICAgICAgICB8fCAoc3BhY2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtYXJpbmUtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdzdWJtYXJpbmUnKVxuICAgICAgICAgICAgfHwgKHNwYWNlLmNsYXNzTGlzdC5jb250YWlucygncGF0cm9sLWJvYXQtcHJlc2VudCcpICYmIHNoaXAuaWQgIT09ICdwYXRyb2wtYm9hdCcpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmlkKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9LCAwKTtcbiAgfVxuICBmdW5jdGlvbiBkcmFnRW5kKGUpIHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH1cbiAgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBmdW5jdGlvbiBkcm9wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gICAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgaWYgKHZhbGlkRHJvcChlKSkge1xuICAgICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlKTtcbiAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbW92ZVNoaXBTcGFjZXMoZHJhZ2dhYmxlKTtcbiAgICAgIGRpc3BsYXlDb250cm9sbGVyLmZpbGxTaGlwU3BhY2VzKGRyYWdnYWJsZSwgZS50YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJvdGF0ZVNoaXAoZSkge1xuICAgIGlmICh2YWxpZFJvdGF0aW9uUG9zaXRpb24oZS50YXJnZXQpKSB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCd2ZXJ0aWNhbCcpO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaG9yaXpvbnRhbCcpO1xuICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVtb3ZlU2hpcFNwYWNlcyhlLnRhcmdldCk7XG4gICAgICBkaXNwbGF5Q29udHJvbGxlci5maWxsU2hpcFNwYWNlcyhlLnRhcmdldCwgZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWdFbmQpO1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcbiAgfSk7XG5cbiAgY29uc3Qgc3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllci1ib2FyZCAuc3BhY2UnKTtcbiAgc3BhY2VzLmZvckVhY2goKHNwYWNlKSA9PiB7XG4gICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICBzcGFjZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhaUF0dGFjayhsYXN0TW92ZSA9IFstMSwgLTFdKSB7XG4gIGNvbnN0IGFpTW92ZSA9IHBsYXllcjIubWFrZU1vdmUocGxheWVyMSwgbGFzdE1vdmVbMF0sIGxhc3RNb3ZlWzFdKTtcbiAgZGlzcGxheUNvbnRyb2xsZXIudXBkYXRlQm9hcmQodHJ1ZSwgYWlNb3ZlWzBdLCBhaU1vdmVbMV0sIHBsYXllcjEuZ2V0Qm9hcmQoKSk7XG4gIGlmIChwbGF5ZXIxLmhhc0xvc3QoKSkge1xuICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICBkaXNwbGF5Q29udHJvbGxlci5lbmRHYW1lKHBsYXllcjIpO1xuICB9IGVsc2UgaWYgKHBsYXllcjEuaXNIaXQoYWlNb3ZlWzBdLCBhaU1vdmVbMV0pKSB7XG4gICAgYWlBdHRhY2soYWlNb3ZlKTtcbiAgfVxufVxuZnVuY3Rpb24gYXR0YWNrKHhDb29yZCwgeUNvb3JkKSB7XG4gIHBsYXllcjEuYXR0YWNrKHBsYXllcjIsIHhDb29yZCwgeUNvb3JkKTtcbiAgZGlzcGxheUNvbnRyb2xsZXIudXBkYXRlQm9hcmQoZmFsc2UsIHhDb29yZCwgeUNvb3JkLCBwbGF5ZXIxLmdldE1vdmVIaXN0b3J5KCkpO1xuICBpZiAocGxheWVyMi5oYXNMb3N0KCkpIHtcbiAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgZGlzcGxheUNvbnRyb2xsZXIuZW5kR2FtZShwbGF5ZXIxKTtcbiAgfSBlbHNlIGlmIChwbGF5ZXIyLmlzTWlzcyh4Q29vcmQsIHlDb29yZCkpIHtcbiAgICBhaUF0dGFjaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0TmV3R2FtZSgpIHtcbiAgcGxheWVyMS5yZXNldEdhbWUoKTtcbiAgcGxheWVyMi5yZXNldEdhbWUoKTtcblxuICBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIGRpc3BsYXlDb250cm9sbGVyLnN0YXJ0TmV3R2FtZShwbGF5ZXIxKTtcblxuICBzaGlwRHJhZ0ludGVyZmFjZSgpO1xuXG4gIGNvbnN0IHBsYWNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLWJ1dHRvbicpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgcGxhY2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdGFydFBsYXlpbmcoKSk7XG59XG5mdW5jdGlvbiBzdGFydFBsYXlpbmcoKSB7XG4gIGNvbnN0IGNhcnJpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FycmllcicpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhdHRsZXNoaXAnKTtcbiAgY29uc3QgZGVzdHJveWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc3Ryb3llcicpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJyk7XG4gIGNvbnN0IHBhdHJvbEJvYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGF0cm9sLWJvYXQnKTtcbiAgcGxheWVyMS5wbGFjZVBpZWNlKFxuICAgIHBhcnNlSW50KGNhcnJpZXIucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMF0uc2xpY2UoMSksIDEwKSxcbiAgICBwYXJzZUludChjYXJyaWVyLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdLnNsaWNlKDEpLCAxMCksXG4gICAgNSxcbiAgICBjYXJyaWVyLmNsYXNzTGlzdFsyXSxcbiAgKTtcbiAgcGxheWVyMS5wbGFjZVBpZWNlKFxuICAgIHBhcnNlSW50KGJhdHRsZXNoaXAucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMF0uc2xpY2UoMSksIDEwKSxcbiAgICBwYXJzZUludChiYXR0bGVzaGlwLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdLnNsaWNlKDEpLCAxMCksXG4gICAgNCxcbiAgICBiYXR0bGVzaGlwLmNsYXNzTGlzdFsyXSxcbiAgKTtcbiAgcGxheWVyMS5wbGFjZVBpZWNlKFxuICAgIHBhcnNlSW50KGRlc3Ryb3llci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFswXS5zbGljZSgxKSwgMTApLFxuICAgIHBhcnNlSW50KGRlc3Ryb3llci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXS5zbGljZSgxKSwgMTApLFxuICAgIDMsXG4gICAgZGVzdHJveWVyLmNsYXNzTGlzdFsyXSxcbiAgKTtcbiAgcGxheWVyMS5wbGFjZVBpZWNlKFxuICAgIHBhcnNlSW50KHN1Ym1hcmluZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFswXS5zbGljZSgxKSwgMTApLFxuICAgIHBhcnNlSW50KHN1Ym1hcmluZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXS5zbGljZSgxKSwgMTApLFxuICAgIDMsXG4gICAgc3VibWFyaW5lLmNsYXNzTGlzdFsyXSxcbiAgKTtcbiAgcGxheWVyMS5wbGFjZVBpZWNlKFxuICAgIHBhcnNlSW50KHBhdHJvbEJvYXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbMF0uc2xpY2UoMSksIDEwKSxcbiAgICBwYXJzZUludChwYXRyb2xCb2F0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdLnNsaWNlKDEpLCAxMCksXG4gICAgMixcbiAgICBwYXRyb2xCb2F0LmNsYXNzTGlzdFsyXSxcbiAgKTtcblxuICBwbGF5ZXIyLnJhbmRvbVNoaXBQbGFjZW1lbnQoNSk7XG4gIHBsYXllcjIucmFuZG9tU2hpcFBsYWNlbWVudCg0KTtcbiAgcGxheWVyMi5yYW5kb21TaGlwUGxhY2VtZW50KDMpO1xuICBwbGF5ZXIyLnJhbmRvbVNoaXBQbGFjZW1lbnQoMyk7XG4gIHBsYXllcjIucmFuZG9tU2hpcFBsYWNlbWVudCgyKTtcblxuICBkaXNwbGF5Q29udHJvbGxlci5nZXRHYW1lUmVhZHkocGxheWVyMSk7XG5cbiAgY29uc3Qgc3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI29wcG9uZW50LWJvYXJkIC5zcGFjZScpO1xuICBzcGFjZXMuZm9yRWFjaCgoc3BhY2UpID0+IHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChzcGFjZS5jbGFzc0xpc3RbMl0gPT09ICdFJyAmJiAhZ2FtZU92ZXIpIHtcbiAgICAgIGF0dGFjayhzcGFjZS5jbGFzc0xpc3RbMF0uc2xpY2UoMSksIHNwYWNlLmNsYXNzTGlzdFsxXS5zbGljZSgxKSk7XG4gICAgfVxuICB9KSk7XG5cbiAgY29uc3Qgc3RhcnROZXdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtbmV3LWdhbWUnKTtcbiAgc3RhcnROZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdGFydE5ld0dhbWUoKSk7XG59XG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGNvbnN0IHBsYXllcjFOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtcGxheWVyLTEnKS52YWx1ZTtcbiAgLyogY29uc3QgcGxheWVyMUFpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FpLXBsYXllci0xJykudmFsdWU7ICovXG4gIGNvbnN0IHBsYXllcjJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtcGxheWVyLTInKS52YWx1ZTtcbiAgLyogY29uc3QgcGxheWVyMkFpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FpLXBsYXllci0xJykudmFsdWU7ICovXG5cbiAgcGxheWVyMSA9IHBsYXllcihwbGF5ZXIxTmFtZSwgMTApO1xuICBwbGF5ZXIyID0gcGxheWVyKHBsYXllcjJOYW1lLCAxMCwgMSk7XG5cbiAgZ2FtZU92ZXIgPSBmYWxzZTtcblxuICBkaXNwbGF5Q29udHJvbGxlci5yZW1vdmVGb3JtKCk7XG4gIGRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZUJvYXJkcyhwbGF5ZXIxKTtcblxuICBzaGlwRHJhZ0ludGVyZmFjZSgpO1xuXG4gIGNvbnN0IHBsYWNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlLWJ1dHRvbicpO1xuICBwbGFjZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN0YXJ0UGxheWluZygpKTtcbn1cblxuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtYnV0dG9uJyk7XG5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN0YXJ0R2FtZSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==