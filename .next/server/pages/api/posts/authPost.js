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
exports.id = "pages/api/posts/authPost";
exports.ids = ["pages/api/posts/authPost"];
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

/***/ "(api)/./pages/api/posts/authPost.tsx":
/*!**************************************!*\
  !*** ./pages/api/posts/authPost.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../prisma/client */ \"(api)/./prisma/client.tsx\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(req, res, _auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session) {\n            return res.status(401).json({\n                message: \"Please signin in\"\n            });\n        }\n        //Get auth users posts\n        try {\n            const data = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n                where: {\n                    email: session.user?.email\n                },\n                include: {\n                    Post: {\n                        orderBy: {\n                            createAt: \"desc\"\n                        },\n                        include: {\n                            Comment: true\n                        }\n                    }\n                }\n            });\n            res.status(200).json(data);\n        } catch (err) {\n            res.status(403).json({\n                err: \"Error has occured while making a post\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvYXV0aFBvc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBQ007QUFDRTtBQUdyQyxlQUFlRyxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTUMsVUFBVSxNQUFNTixnRUFBZ0JBLENBQUNHLEtBQUtDLEtBQUtILHdEQUFXQTtRQUM1RCxJQUFJLENBQUNLLFNBQVM7WUFDWixPQUFPRixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQW1CO1FBQzVELENBQUM7UUFFRCxzQkFBc0I7UUFDdEIsSUFBSTtZQUNGLE1BQU1DLE9BQU8sTUFBTVgsc0VBQXNCLENBQUM7Z0JBQ3hDYyxPQUFPO29CQUNMQyxPQUFPUixRQUFRSyxJQUFJLEVBQUVHO2dCQUN2QjtnQkFDQUMsU0FBUztvQkFDUEMsTUFBTTt3QkFDSkMsU0FBUzs0QkFDUEMsVUFBVTt3QkFDWjt3QkFDQUgsU0FBUzs0QkFDUEksU0FBUyxJQUFJO3dCQUNmO29CQUNGO2dCQUNGO1lBQ0Y7WUFDQWYsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0U7UUFDdkIsRUFBRSxPQUFPVSxLQUFLO1lBQ1poQixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFWSxLQUFLO1lBQXdDO1FBQ3RFO0lBQ0YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3N0aXQvLi9wYWdlcy9hcGkvcG9zdHMvYXV0aFBvc3QudHN4P2VmMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4uL2F1dGgvWy4uLm5leHRhdXRoXVwiO1xyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihyZXEsIHJlcywgYXV0aE9wdGlvbnMpO1xyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiUGxlYXNlIHNpZ25pbiBpblwiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IGF1dGggdXNlcnMgcG9zdHNcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgZW1haWw6IHNlc3Npb24udXNlcj8uZW1haWwgYXMgc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgUG9zdDoge1xyXG4gICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgY3JlYXRlQXQ6IFwiZGVzY1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgICAgQ29tbWVudDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgZXJyOiBcIkVycm9yIGhhcyBvY2N1cmVkIHdoaWxlIG1ha2luZyBhIHBvc3RcIiB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXNzaW9uIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJkYXRhIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImVtYWlsIiwiaW5jbHVkZSIsIlBvc3QiLCJvcmRlckJ5IiwiY3JlYXRlQXQiLCJDb21tZW50IiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/authPost.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/authPost.tsx"));
module.exports = __webpack_exports__;

})();