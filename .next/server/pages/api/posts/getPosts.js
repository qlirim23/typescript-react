"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/posts/getPosts";
exports.ids = ["pages/api/posts/getPosts"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/posts/getPosts.tsx":
/*!**************************************!*\
  !*** ./pages/api/posts/getPosts.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../prisma/client */ \"(api)/./prisma/client.tsx\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        //Fetc Post\n        try {\n            const data = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findMany({\n                include: {\n                    user: true,\n                    Comment: true\n                },\n                orderBy: {\n                    createAt: \"desc\"\n                }\n            });\n            res.status(200).json(data);\n        } catch (err) {\n            res.status(403).json({\n                err: \"Error has occured while making a post\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvZ2V0UG9zdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzRDO0FBRTdCLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixXQUFXO1FBQ1gsSUFBSTtZQUNGLE1BQU1DLE9BQU8sTUFBTUwsb0VBQW9CLENBQUM7Z0JBQ3RDUSxTQUFTO29CQUNQQyxNQUFNLElBQUk7b0JBQ1ZDLFNBQVMsSUFBSTtnQkFDZjtnQkFDQUMsU0FBUztvQkFDUEMsVUFBVTtnQkFDWjtZQUNGO1lBQ0FULElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNUO1FBQ3ZCLEVBQUUsT0FBT1UsS0FBSztZQUNaWixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLO1lBQXdDO1FBQ3RFO0lBQ0YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3N0aXQvLi9wYWdlcy9hcGkvcG9zdHMvZ2V0UG9zdHMudHN4P2Q4MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vcHJpc21hL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICAvL0ZldGMgUG9zdFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5wb3N0LmZpbmRNYW55KHtcclxuICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgICAgQ29tbWVudDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9yZGVyQnk6IHtcclxuICAgICAgICAgIGNyZWF0ZUF0OiBcImRlc2NcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBlcnI6IFwiRXJyb3IgaGFzIG9jY3VyZWQgd2hpbGUgbWFraW5nIGEgcG9zdFwiIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJwb3N0IiwiZmluZE1hbnkiLCJpbmNsdWRlIiwidXNlciIsIkNvbW1lbnQiLCJvcmRlckJ5IiwiY3JlYXRlQXQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/getPosts.tsx\n");

/***/ }),

/***/ "(api)/./prisma/client.tsx":
/*!***************************!*\
  !*** ./prisma/client.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wcmlzbWEvY2xpZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFjOUMsTUFBTUMsU0FBU0MsT0FBT0QsTUFBTSxJQUFJLElBQUlELHdEQUFZQTtBQUVoRCxJQUFJRyxJQUFzQyxFQUFFRCxPQUFPRCxNQUFNLEdBQUdBO0FBRTVELGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9zdGl0Ly4vcHJpc21hL2NsaWVudC50c3g/MTMxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBuYW1lc3BhY2UgTm9kZUpTIHtcclxuICAgIGludGVyZmFjZSBHbG9iYWwge31cclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBDdXN0b21Ob2RlSnNHbG9iYWwgZXh0ZW5kcyBOb2RlSlMuR2xvYmFsIHtcclxuICBwcmlzbWE6IFByaXNtYUNsaWVudDtcclxufVxyXG5cclxuZGVjbGFyZSBjb25zdCBnbG9iYWw6IEN1c3RvbU5vZGVKc0dsb2JhbDtcclxuXHJcbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./prisma/client.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/getPosts.tsx"));
module.exports = __webpack_exports__;

})();