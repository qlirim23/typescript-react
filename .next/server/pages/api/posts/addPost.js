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
exports.id = "pages/api/posts/addPost";
exports.ids = ["pages/api/posts/addPost"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../prisma/client */ \"(api)/./prisma/client.tsx\");\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_prisma_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUN1QjtBQUNFO0FBQ2Q7QUFHcEMsTUFBTUksY0FBYztJQUN2QkMsU0FBU0gsd0VBQWFBLENBQUNDLHNEQUFNQTtJQUM3QkcsV0FBVztRQUNQTCxpRUFBY0EsQ0FBQztZQUNYTSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDbEQ7S0FDSDtBQUNMLEVBQUM7QUFFRCxpRUFBZVosZ0RBQVFBLENBQUNJLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3N0aXQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcclxuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCJcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvY2xpZW50J1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICAgIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgICAgfSksXHJcbiAgICBdLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucykiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/posts/addPost.tsx":
/*!*************************************!*\
  !*** ./pages/api/posts/addPost.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../prisma/client */ \"(api)/./prisma/client.tsx\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(req, res, _auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session) {\n            return res.status(401).json({\n                message: \"Please signin to create a post.\"\n            });\n        }\n        const title = req.body.title;\n        //Get User\n        const prismaUser = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                email: session?.user?.email\n            }\n        });\n        //Check title\n        if (title.length > 300) {\n            return res.status(403).json({\n                message: \"Please write a shorter post\"\n            });\n        }\n        if (!title.length) {\n            return res.status(403).json({\n                message: \"Please write something before we can post it.\"\n            });\n        }\n        //Create Post\n        try {\n            const result = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.create({\n                data: {\n                    title,\n                    userId: prismaUser.id\n                }\n            });\n            res.status(200).json(result);\n        } catch (err) {\n            res.status(403).json({\n                err: \"Error has occured while making a post\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvYWRkUG9zdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFDTTtBQUNFO0FBR3JDLGVBQWVHLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNQyxVQUFVLE1BQU1OLGdFQUFnQkEsQ0FBQ0csS0FBS0MsS0FBS0gsd0RBQVdBO1FBQzVELElBQUksQ0FBQ0ssU0FBUztZQUNaLE9BQU9GLElBQ0pHLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBa0M7UUFDdkQsQ0FBQztRQUVELE1BQU1DLFFBQWdCUCxJQUFJUSxJQUFJLENBQUNELEtBQUs7UUFFcEMsVUFBVTtRQUNWLE1BQU1FLGFBQWEsTUFBTWIsc0VBQXNCLENBQUM7WUFDOUNnQixPQUFPO2dCQUFFQyxPQUFPVixTQUFTTyxNQUFNRztZQUFNO1FBQ3ZDO1FBQ0EsYUFBYTtRQUNiLElBQUlOLE1BQU1PLE1BQU0sR0FBRyxLQUFLO1lBQ3RCLE9BQU9iLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBOEI7UUFDdkUsQ0FBQztRQUVELElBQUksQ0FBQ0MsTUFBTU8sTUFBTSxFQUFFO1lBQ2pCLE9BQU9iLElBQ0pHLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBZ0Q7UUFDckUsQ0FBQztRQUVELGFBQWE7UUFDYixJQUFJO1lBQ0YsTUFBTVMsU0FBUyxNQUFNbkIsa0VBQWtCLENBQUM7Z0JBQ3RDc0IsTUFBTTtvQkFDSlg7b0JBQ0FZLFFBQVFWLFdBQVdXLEVBQUU7Z0JBQ3ZCO1lBQ0Y7WUFDQW5CLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNVO1FBQ3ZCLEVBQUUsT0FBT00sS0FBSztZQUNacEIsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRWdCLEtBQUs7WUFBd0M7UUFDdEU7SUFDRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bvc3RpdC8uL3BhZ2VzL2FwaS9wb3N0cy9hZGRQb3N0LnRzeD85NjcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL3ByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuLi9hdXRoL1suLi5uZXh0YXV0aF1cIjtcclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHJlcSwgcmVzLCBhdXRoT3B0aW9ucyk7XHJcbiAgICBpZiAoIXNlc3Npb24pIHtcclxuICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgIC5zdGF0dXMoNDAxKVxyXG4gICAgICAgIC5qc29uKHsgbWVzc2FnZTogXCJQbGVhc2Ugc2lnbmluIHRvIGNyZWF0ZSBhIHBvc3QuXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGl0bGU6IHN0cmluZyA9IHJlcS5ib2R5LnRpdGxlO1xyXG5cclxuICAgIC8vR2V0IFVzZXJcclxuICAgIGNvbnN0IHByaXNtYVVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24/LnVzZXI/LmVtYWlsIH0sXHJcbiAgICB9KTtcclxuICAgIC8vQ2hlY2sgdGl0bGVcclxuICAgIGlmICh0aXRsZS5sZW5ndGggPiAzMDApIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogXCJQbGVhc2Ugd3JpdGUgYSBzaG9ydGVyIHBvc3RcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRpdGxlLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgLnN0YXR1cyg0MDMpXHJcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIlBsZWFzZSB3cml0ZSBzb21ldGhpbmcgYmVmb3JlIHdlIGNhbiBwb3N0IGl0LlwiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQ3JlYXRlIFBvc3RcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5wb3N0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICB1c2VySWQ6IHByaXNtYVVzZXIuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBlcnI6IFwiRXJyb3IgaGFzIG9jY3VyZWQgd2hpbGUgbWFraW5nIGEgcG9zdFwiIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInRpdGxlIiwiYm9keSIsInByaXNtYVVzZXIiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZW1haWwiLCJsZW5ndGgiLCJyZXN1bHQiLCJwb3N0IiwiY3JlYXRlIiwiZGF0YSIsInVzZXJJZCIsImlkIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/addPost.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/addPost.tsx"));
module.exports = __webpack_exports__;

})();