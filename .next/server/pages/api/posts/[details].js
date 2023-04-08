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
exports.id = "pages/api/posts/[details]";
exports.ids = ["pages/api/posts/[details]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/posts/[details].ts":
/*!**************************************!*\
  !*** ./pages/api/posts/[details].ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../prisma/client */ \"(api)/./prisma/client.tsx\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        //Get auth users posts\n        try {\n            console.log(req.query);\n            const data = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findUnique({\n                where: {\n                    id: req.query.details\n                },\n                include: {\n                    user: true,\n                    Comment: {\n                        orderBy: {\n                            createAt: \"desc\"\n                        },\n                        include: {\n                            user: true\n                        }\n                    }\n                }\n            });\n            return res.status(200).json(data);\n        } catch (err) {\n            res.status(403).json({\n                err: \"Error has occured while making a post\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvW2RldGFpbHNdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBRzdCLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixzQkFBc0I7UUFDdEIsSUFBSTtZQUNGQyxRQUFRQyxHQUFHLENBQUNKLElBQUlLLEtBQUs7WUFDckIsTUFBTUMsT0FBTyxNQUFNUixzRUFBc0IsQ0FBQztnQkFDeENXLE9BQU87b0JBQ0xDLElBQUlWLElBQUlLLEtBQUssQ0FBQ00sT0FBTztnQkFDdkI7Z0JBQ0FDLFNBQVM7b0JBQ1BDLE1BQU0sSUFBSTtvQkFDVkMsU0FBUzt3QkFDUEMsU0FBUzs0QkFDUEMsVUFBVTt3QkFDWjt3QkFDQUosU0FBUzs0QkFDUEMsTUFBTSxJQUFJO3dCQUNaO29CQUNGO2dCQUNGO1lBQ0Y7WUFDQSxPQUFPWixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1o7UUFDOUIsRUFBRSxPQUFPYSxLQUFLO1lBQ1psQixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsS0FBSztZQUF3QztRQUN0RTtJQUNGLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9zdGl0Ly4vcGFnZXMvYXBpL3Bvc3RzL1tkZXRhaWxzXS50cz85NTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL3ByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgLy9HZXQgYXV0aCB1c2VycyBwb3N0c1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2cocmVxLnF1ZXJ5KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHByaXNtYS5wb3N0LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICBpZDogcmVxLnF1ZXJ5LmRldGFpbHMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgICAgQ29tbWVudDoge1xyXG4gICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgY3JlYXRlQXQ6IFwiZGVzY1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgICAgdXNlcjogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7IGVycjogXCJFcnJvciBoYXMgb2NjdXJlZCB3aGlsZSBtYWtpbmcgYSBwb3N0XCIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiZGF0YSIsInBvc3QiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsImRldGFpbHMiLCJpbmNsdWRlIiwidXNlciIsIkNvbW1lbnQiLCJvcmRlckJ5IiwiY3JlYXRlQXQiLCJzdGF0dXMiLCJqc29uIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/[details].ts\n");

/***/ }),

/***/ "(api)/./prisma/client.tsx":
/*!***************************!*\
  !*** ./prisma/client.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma); // const client = globalThis.prisma || new PrismaClient();\n // if (process.env.NODE_ENV !== \"producion\") globalThis.prisma = client;\n // export default client;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wcmlzbWEvY2xpZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFjOUMsTUFBTUMsU0FBU0MsT0FBT0QsTUFBTSxJQUFJLElBQUlELHdEQUFZQTtBQUVoRCxJQUFJRyxJQUFzQyxFQUFFRCxPQUFPRCxNQUFNLEdBQUdBO0FBRTVELGlFQUFlQSxNQUFNQSxFQUFDLENBRXRCLDBEQUEwRDtDQUUxRCx3RUFBd0U7Q0FFeEUseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9zdGl0Ly4vcHJpc21hL2NsaWVudC50c3g/MTMxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBuYW1lc3BhY2UgTm9kZUpTIHtcclxuICAgIGludGVyZmFjZSBHbG9iYWwge31cclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBDdXN0b21Ob2RlSnNHbG9iYWwgZXh0ZW5kcyBOb2RlSlMuR2xvYmFsIHtcclxuICBwcmlzbWE6IFByaXNtYUNsaWVudDtcclxufVxyXG5cclxuZGVjbGFyZSBjb25zdCBnbG9iYWw6IEN1c3RvbU5vZGVKc0dsb2JhbDtcclxuXHJcbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XHJcblxyXG4vLyBjb25zdCBjbGllbnQgPSBnbG9iYWxUaGlzLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG4vLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjaW9uXCIpIGdsb2JhbFRoaXMucHJpc21hID0gY2xpZW50O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./prisma/client.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/[details].ts"));
module.exports = __webpack_exports__;

})();