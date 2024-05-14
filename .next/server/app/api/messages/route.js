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
exports.id = "app/api/messages/route";
exports.ids = ["app/api/messages/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2Froute&page=%2Fapi%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2Froute.js&appDir=C%3A%5CUsers%5Clordm%5COneDrive%5CDesktop%5CCWB%5CGitlab%5Cachat%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Clordm%5COneDrive%5CDesktop%5CCWB%5CGitlab%5Cachat&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2Froute&page=%2Fapi%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2Froute.js&appDir=C%3A%5CUsers%5Clordm%5COneDrive%5CDesktop%5CCWB%5CGitlab%5Cachat%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Clordm%5COneDrive%5CDesktop%5CCWB%5CGitlab%5Cachat&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_lordm_OneDrive_Desktop_CWB_Gitlab_achat_app_api_messages_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/messages/route.js */ \"(rsc)/./app/api/messages/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/messages/route\",\n        pathname: \"/api/messages\",\n        filename: \"route\",\n        bundlePath: \"app/api/messages/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\lordm\\\\OneDrive\\\\Desktop\\\\CWB\\\\Gitlab\\\\achat\\\\app\\\\api\\\\messages\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_lordm_OneDrive_Desktop_CWB_Gitlab_achat_app_api_messages_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/messages/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZXNzYWdlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbWVzc2FnZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZtZXNzYWdlcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNsb3JkbSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0NXQiU1Q0dpdGxhYiU1Q2FjaGF0JTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNsb3JkbSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0NXQiU1Q0dpdGxhYiU1Q2FjaGF0JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNxQztBQUNsSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2F5dXNoY2hhdC8/MTcwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxsb3JkbVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXENXQlxcXFxHaXRsYWJcXFxcYWNoYXRcXFxcYXBwXFxcXGFwaVxcXFxtZXNzYWdlc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbWVzc2FnZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9tZXNzYWdlc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbWVzc2FnZXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxsb3JkbVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXENXQlxcXFxHaXRsYWJcXFxcYWNoYXRcXFxcYXBwXFxcXGFwaVxcXFxtZXNzYWdlc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbWVzc2FnZXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2Froute&page=%2Fapi%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2Froute.js&appDir=C%3A%5CUsers%5Clordm%5COneDrive%5CDesktop%5CCWB%5CGitlab%5Cachat%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Clordm%5COneDrive%5CDesktop%5CCWB%5CGitlab%5Cachat&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/messages/route.js":
/*!***********************************!*\
  !*** ./app/api/messages/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_pusher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/pusher */ \"(rsc)/./lib/pusher.js\");\n/* harmony import */ var _models_Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/Chat */ \"(rsc)/./models/Chat.js\");\n/* harmony import */ var _models_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/Message */ \"(rsc)/./models/Message.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/User */ \"(rsc)/./models/User.js\");\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mongodb */ \"(rsc)/./mongodb/index.js\");\n\n\n\n\n\nconst POST = async (req)=>{\n    try {\n        await (0,_mongodb__WEBPACK_IMPORTED_MODULE_4__.connectToDB)();\n        const body = await req.json();\n        const { chatId, currentUserId, text, photo } = body;\n        const currentUser = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(currentUserId);\n        const newMessage = await _models_Message__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n            chat: chatId,\n            sender: currentUser,\n            text,\n            photo,\n            seenBy: currentUserId\n        });\n        const updatedChat = await _models_Chat__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(chatId, {\n            $push: {\n                messages: newMessage._id\n            },\n            $set: {\n                lastMessageAt: newMessage.createdAt\n            }\n        }, {\n            new: true\n        }).populate({\n            path: \"messages\",\n            model: _models_Message__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            populate: {\n                path: \"sender seenBy\",\n                model: \"User\"\n            }\n        }).populate({\n            path: \"members\",\n            model: \"User\"\n        }).exec();\n        /* Trigger a Pusher event for a specific chat about the new message */ await _lib_pusher__WEBPACK_IMPORTED_MODULE_0__.pusherServer.trigger(chatId, \"new-message\", newMessage);\n        /* Triggers a Pusher event for each member of the chat about the chat update with the latest message */ const lastMessage = updatedChat.messages[updatedChat.messages.length - 1];\n        updatedChat.members.forEach(async (member)=>{\n            try {\n                await _lib_pusher__WEBPACK_IMPORTED_MODULE_0__.pusherServer.trigger(member._id.toString(), \"update-chat\", {\n                    id: chatId,\n                    messages: [\n                        lastMessage\n                    ]\n                });\n            } catch (err) {\n                console.error(`Failed to trigger update-chat event`);\n            }\n        });\n        return new Response(JSON.stringify(newMessage), {\n            status: 200\n        });\n    } catch (err) {\n        console.log(err);\n        return new Response(\"Failed to create new message\", {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21lc3NhZ2VzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNYO0FBQ007QUFDTjtBQUNPO0FBRWhDLE1BQU1LLE9BQU8sT0FBT0M7SUFDekIsSUFBSTtRQUNGLE1BQU1GLHFEQUFXQTtRQUVqQixNQUFNRyxPQUFPLE1BQU1ELElBQUlFLElBQUk7UUFFM0IsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLGFBQWEsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0w7UUFFL0MsTUFBTU0sY0FBYyxNQUFNVixvREFBSUEsQ0FBQ1csUUFBUSxDQUFDSjtRQUV4QyxNQUFNSyxhQUFhLE1BQU1iLHVEQUFPQSxDQUFDYyxNQUFNLENBQUM7WUFDdENDLE1BQU1SO1lBQ05TLFFBQVFMO1lBQ1JGO1lBQ0FDO1lBQ0FPLFFBQVFUO1FBQ1Y7UUFFQSxNQUFNVSxjQUFjLE1BQU1uQixvREFBSUEsQ0FBQ29CLGlCQUFpQixDQUM5Q1osUUFDQTtZQUNFYSxPQUFPO2dCQUFFQyxVQUFVUixXQUFXUyxHQUFHO1lBQUM7WUFDbENDLE1BQU07Z0JBQUVDLGVBQWVYLFdBQVdZLFNBQVM7WUFBQztRQUM5QyxHQUNBO1lBQUVDLEtBQUs7UUFBSyxHQUVYQyxRQUFRLENBQUM7WUFDUkMsTUFBTTtZQUNOQyxPQUFPN0IsdURBQU9BO1lBQ2QyQixVQUFVO2dCQUFFQyxNQUFNO2dCQUFpQkMsT0FBTztZQUFPO1FBQ25ELEdBQ0NGLFFBQVEsQ0FBQztZQUNSQyxNQUFNO1lBQ05DLE9BQU87UUFDVCxHQUNDQyxJQUFJO1FBRVAsb0VBQW9FLEdBQ3BFLE1BQU1oQyxxREFBWUEsQ0FBQ2lDLE9BQU8sQ0FBQ3hCLFFBQVEsZUFBZU07UUFFbEQscUdBQXFHLEdBQ3JHLE1BQU1tQixjQUFjZCxZQUFZRyxRQUFRLENBQUNILFlBQVlHLFFBQVEsQ0FBQ1ksTUFBTSxHQUFHLEVBQUU7UUFDekVmLFlBQVlnQixPQUFPLENBQUNDLE9BQU8sQ0FBQyxPQUFPQztZQUNqQyxJQUFJO2dCQUNGLE1BQU10QyxxREFBWUEsQ0FBQ2lDLE9BQU8sQ0FBQ0ssT0FBT2QsR0FBRyxDQUFDZSxRQUFRLElBQUksZUFBZTtvQkFDL0RDLElBQUkvQjtvQkFDSmMsVUFBVTt3QkFBQ1c7cUJBQVk7Z0JBQ3pCO1lBQ0YsRUFBRSxPQUFPTyxLQUFLO2dCQUNaQyxRQUFRQyxLQUFLLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQztZQUNyRDtRQUNGO1FBR0EsT0FBTyxJQUFJQyxTQUFTQyxLQUFLQyxTQUFTLENBQUMvQixhQUFhO1lBQUVnQyxRQUFRO1FBQUk7SUFDaEUsRUFBRSxPQUFPTixLQUFLO1FBQ1pDLFFBQVFNLEdBQUcsQ0FBQ1A7UUFDWixPQUFPLElBQUlHLFNBQVMsZ0NBQWdDO1lBQUVHLFFBQVE7UUFBSTtJQUNwRTtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heXVzaGNoYXQvLi9hcHAvYXBpL21lc3NhZ2VzL3JvdXRlLmpzPzU4MzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHVzaGVyU2VydmVyIH0gZnJvbSBcIkBsaWIvcHVzaGVyXCI7XHJcbmltcG9ydCBDaGF0IGZyb20gXCJAbW9kZWxzL0NoYXRcIjtcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIkBtb2RlbHMvTWVzc2FnZVwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiQG1vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RCIH0gZnJvbSBcIkBtb25nb2RiXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUE9TVCA9IGFzeW5jIChyZXEpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgY29ubmVjdFRvREIoKTtcclxuXHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCB7IGNoYXRJZCwgY3VycmVudFVzZXJJZCwgdGV4dCwgcGhvdG8gfSA9IGJvZHk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKGN1cnJlbnRVc2VySWQpO1xyXG5cclxuICAgIGNvbnN0IG5ld01lc3NhZ2UgPSBhd2FpdCBNZXNzYWdlLmNyZWF0ZSh7XHJcbiAgICAgIGNoYXQ6IGNoYXRJZCxcclxuICAgICAgc2VuZGVyOiBjdXJyZW50VXNlcixcclxuICAgICAgdGV4dCxcclxuICAgICAgcGhvdG8sXHJcbiAgICAgIHNlZW5CeTogY3VycmVudFVzZXJJZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWRDaGF0ID0gYXdhaXQgQ2hhdC5maW5kQnlJZEFuZFVwZGF0ZShcclxuICAgICAgY2hhdElkLFxyXG4gICAgICB7XHJcbiAgICAgICAgJHB1c2g6IHsgbWVzc2FnZXM6IG5ld01lc3NhZ2UuX2lkIH0sXHJcbiAgICAgICAgJHNldDogeyBsYXN0TWVzc2FnZUF0OiBuZXdNZXNzYWdlLmNyZWF0ZWRBdCB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7IG5ldzogdHJ1ZSB9XHJcbiAgICApXHJcbiAgICAgIC5wb3B1bGF0ZSh7XHJcbiAgICAgICAgcGF0aDogXCJtZXNzYWdlc1wiLFxyXG4gICAgICAgIG1vZGVsOiBNZXNzYWdlLFxyXG4gICAgICAgIHBvcHVsYXRlOiB7IHBhdGg6IFwic2VuZGVyIHNlZW5CeVwiLCBtb2RlbDogXCJVc2VyXCIgfSxcclxuICAgICAgfSlcclxuICAgICAgLnBvcHVsYXRlKHtcclxuICAgICAgICBwYXRoOiBcIm1lbWJlcnNcIixcclxuICAgICAgICBtb2RlbDogXCJVc2VyXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5leGVjKCk7XHJcblxyXG4gICAgLyogVHJpZ2dlciBhIFB1c2hlciBldmVudCBmb3IgYSBzcGVjaWZpYyBjaGF0IGFib3V0IHRoZSBuZXcgbWVzc2FnZSAqL1xyXG4gICAgYXdhaXQgcHVzaGVyU2VydmVyLnRyaWdnZXIoY2hhdElkLCBcIm5ldy1tZXNzYWdlXCIsIG5ld01lc3NhZ2UpXHJcblxyXG4gICAgLyogVHJpZ2dlcnMgYSBQdXNoZXIgZXZlbnQgZm9yIGVhY2ggbWVtYmVyIG9mIHRoZSBjaGF0IGFib3V0IHRoZSBjaGF0IHVwZGF0ZSB3aXRoIHRoZSBsYXRlc3QgbWVzc2FnZSAqL1xyXG4gICAgY29uc3QgbGFzdE1lc3NhZ2UgPSB1cGRhdGVkQ2hhdC5tZXNzYWdlc1t1cGRhdGVkQ2hhdC5tZXNzYWdlcy5sZW5ndGggLSAxXTtcclxuICAgIHVwZGF0ZWRDaGF0Lm1lbWJlcnMuZm9yRWFjaChhc3luYyAobWVtYmVyKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgcHVzaGVyU2VydmVyLnRyaWdnZXIobWVtYmVyLl9pZC50b1N0cmluZygpLCBcInVwZGF0ZS1jaGF0XCIsIHtcclxuICAgICAgICAgIGlkOiBjaGF0SWQsXHJcbiAgICAgICAgICBtZXNzYWdlczogW2xhc3RNZXNzYWdlXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gdHJpZ2dlciB1cGRhdGUtY2hhdCBldmVudGApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShuZXdNZXNzYWdlKSwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiRmFpbGVkIHRvIGNyZWF0ZSBuZXcgbWVzc2FnZVwiLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufTsiXSwibmFtZXMiOlsicHVzaGVyU2VydmVyIiwiQ2hhdCIsIk1lc3NhZ2UiLCJVc2VyIiwiY29ubmVjdFRvREIiLCJQT1NUIiwicmVxIiwiYm9keSIsImpzb24iLCJjaGF0SWQiLCJjdXJyZW50VXNlcklkIiwidGV4dCIsInBob3RvIiwiY3VycmVudFVzZXIiLCJmaW5kQnlJZCIsIm5ld01lc3NhZ2UiLCJjcmVhdGUiLCJjaGF0Iiwic2VuZGVyIiwic2VlbkJ5IiwidXBkYXRlZENoYXQiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIiRwdXNoIiwibWVzc2FnZXMiLCJfaWQiLCIkc2V0IiwibGFzdE1lc3NhZ2VBdCIsImNyZWF0ZWRBdCIsIm5ldyIsInBvcHVsYXRlIiwicGF0aCIsIm1vZGVsIiwiZXhlYyIsInRyaWdnZXIiLCJsYXN0TWVzc2FnZSIsImxlbmd0aCIsIm1lbWJlcnMiLCJmb3JFYWNoIiwibWVtYmVyIiwidG9TdHJpbmciLCJpZCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/messages/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/pusher.js":
/*!***********************!*\
  !*** ./lib/pusher.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pusherClient: () => (/* binding */ pusherClient),\n/* harmony export */   pusherServer: () => (/* binding */ pusherServer)\n/* harmony export */ });\n/* harmony import */ var pusher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pusher */ \"(rsc)/./node_modules/pusher/lib/pusher.js\");\n/* harmony import */ var pusher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pusher__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pusher-js */ \"(rsc)/./node_modules/pusher-js/dist/node/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst pusherServer = new (pusher__WEBPACK_IMPORTED_MODULE_0___default())({\n    appId: process.env.PUSHER_APP_ID,\n    key: \"e140ac0134ae6d2a29f5\",\n    secret: process.env.PUSHER_SECRET,\n    cluster: \"ap2\",\n    useTLS: true\n});\nconst pusherClient = new (pusher_js__WEBPACK_IMPORTED_MODULE_1___default())(\"e140ac0134ae6d2a29f5\", {\n    cluster: \"ap2\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHVzaGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrQztBQUNHO0FBRTlCLE1BQU1FLGVBQWUsSUFBSUYsK0NBQVlBLENBQUM7SUFDM0NHLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtJQUNoQ0MsS0FBS0gsc0JBQXNDO0lBQzNDSyxRQUFRTCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7SUFDakNDLFNBQVM7SUFDVEMsUUFBUTtBQUNWLEdBQUc7QUFFSSxNQUFNQyxlQUFlLElBQUlaLGtEQUFZQSxDQUMxQ0csc0JBQXNDLEVBQ3RDO0lBQ0VPLFNBQVM7QUFDWCxHQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXl1c2hjaGF0Ly4vbGliL3B1c2hlci5qcz8wYWQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQdXNoZXJTZXJ2ZXIgZnJvbSBcInB1c2hlclwiO1xyXG5pbXBvcnQgUHVzaGVyQ2xpZW50IGZyb20gXCJwdXNoZXItanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwdXNoZXJTZXJ2ZXIgPSBuZXcgUHVzaGVyU2VydmVyKHtcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuUFVTSEVSX0FQUF9JRCxcclxuICBrZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BVU0hFUl9BUFBfS0VZLFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuUFVTSEVSX1NFQ1JFVCxcclxuICBjbHVzdGVyOiBcImFwMlwiLFxyXG4gIHVzZVRMUzogdHJ1ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcHVzaGVyQ2xpZW50ID0gbmV3IFB1c2hlckNsaWVudChcclxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QVVNIRVJfQVBQX0tFWSxcclxuICB7XHJcbiAgICBjbHVzdGVyOiBcImFwMlwiLFxyXG4gIH1cclxuKTsiXSwibmFtZXMiOlsiUHVzaGVyU2VydmVyIiwiUHVzaGVyQ2xpZW50IiwicHVzaGVyU2VydmVyIiwiYXBwSWQiLCJwcm9jZXNzIiwiZW52IiwiUFVTSEVSX0FQUF9JRCIsImtleSIsIk5FWFRfUFVCTElDX1BVU0hFUl9BUFBfS0VZIiwic2VjcmV0IiwiUFVTSEVSX1NFQ1JFVCIsImNsdXN0ZXIiLCJ1c2VUTFMiLCJwdXNoZXJDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/pusher.js\n");

/***/ }),

/***/ "(rsc)/./models/Chat.js":
/*!************************!*\
  !*** ./models/Chat.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ChatSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    members: {\n        type: [\n            {\n                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                ref: \"User\"\n            }\n        ],\n        default: []\n    },\n    messages: {\n        type: [\n            {\n                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                ref: \"Message\"\n            }\n        ],\n        default: []\n    },\n    isGroup: {\n        type: Boolean,\n        default: false\n    },\n    name: {\n        type: String,\n        default: \"\"\n    },\n    groupPhoto: {\n        type: String,\n        default: \"\"\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    },\n    lastMessageAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst Chat = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Chat || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Chat\", ChatSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvQ2hhdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxTQUFTO1FBQ1BDLE1BQU07WUFBQztnQkFBRUEsTUFBTUosd0RBQWUsQ0FBQ0ssS0FBSyxDQUFDQyxRQUFRO2dCQUFFQyxLQUFLO1lBQU07U0FBRTtRQUM1REMsU0FBUyxFQUFFO0lBQ2I7SUFDQUMsVUFBVTtRQUNSTCxNQUFNO1lBQUM7Z0JBQUVBLE1BQU1KLHdEQUFlLENBQUNLLEtBQUssQ0FBQ0MsUUFBUTtnQkFBRUMsS0FBSztZQUFTO1NBQUU7UUFDL0RDLFNBQVMsRUFBRTtJQUNiO0lBQ0FFLFNBQVM7UUFDUE4sTUFBTU87UUFDTkgsU0FBUztJQUNYO0lBQ0FJLE1BQU07UUFDSlIsTUFBTVM7UUFDTkwsU0FBUztJQUNYO0lBQ0FNLFlBQVk7UUFDVlYsTUFBTVM7UUFDTkwsU0FBUztJQUNYO0lBQ0FPLFdBQVc7UUFDVFgsTUFBTVk7UUFDTlIsU0FBU1EsS0FBS0MsR0FBRztJQUNuQjtJQUNBQyxlQUFlO1FBQ2JkLE1BQU1ZO1FBQ05SLFNBQVNRLEtBQUtDLEdBQUc7SUFDbkI7QUFDRjtBQUVBLE1BQU1FLE9BQU9uQix3REFBZSxDQUFDbUIsSUFBSSxJQUFJbkIscURBQWMsQ0FBQyxRQUFRQztBQUU1RCxpRUFBZWtCLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heXVzaGNoYXQvLi9tb2RlbHMvQ2hhdC5qcz84ZjFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxyXG5cclxuY29uc3QgQ2hhdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIG1lbWJlcnM6IHtcclxuICAgIHR5cGU6IFt7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnVXNlcid9XSxcclxuICAgIGRlZmF1bHQ6IFtdXHJcbiAgfSxcclxuICBtZXNzYWdlczoge1xyXG4gICAgdHlwZTogW3sgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdNZXNzYWdlJ31dLFxyXG4gICAgZGVmYXVsdDogW11cclxuICB9LFxyXG4gIGlzR3JvdXA6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiBmYWxzZVxyXG4gIH0sXHJcbiAgbmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogJydcclxuICB9LFxyXG4gIGdyb3VwUGhvdG86IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6ICcnXHJcbiAgfSxcclxuICBjcmVhdGVkQXQ6IHtcclxuICAgIHR5cGU6IERhdGUsXHJcbiAgICBkZWZhdWx0OiBEYXRlLm5vd1xyXG4gIH0sXHJcbiAgbGFzdE1lc3NhZ2VBdDoge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGRlZmF1bHQ6IERhdGUubm93XHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgQ2hhdCA9IG1vbmdvb3NlLm1vZGVscy5DaGF0IHx8IG1vbmdvb3NlLm1vZGVsKCdDaGF0JywgQ2hhdFNjaGVtYSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJDaGF0U2NoZW1hIiwiU2NoZW1hIiwibWVtYmVycyIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiZGVmYXVsdCIsIm1lc3NhZ2VzIiwiaXNHcm91cCIsIkJvb2xlYW4iLCJuYW1lIiwiU3RyaW5nIiwiZ3JvdXBQaG90byIsImNyZWF0ZWRBdCIsIkRhdGUiLCJub3ciLCJsYXN0TWVzc2FnZUF0IiwiQ2hhdCIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/Chat.js\n");

/***/ }),

/***/ "(rsc)/./models/Message.js":
/*!***************************!*\
  !*** ./models/Message.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MessageSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    chat: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"Chat\"\n    },\n    sender: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"User\"\n    },\n    text: {\n        type: String,\n        default: \"\"\n    },\n    photo: {\n        type: String,\n        default: \"\"\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    },\n    seenBy: {\n        type: [\n            {\n                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                ref: \"User\"\n            }\n        ],\n        default: []\n    }\n});\nconst Message = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Message || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Message\", MessageSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvTWVzc2FnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsZ0JBQWdCLElBQUlELHdEQUFlLENBQUM7SUFDeENHLE1BQU07UUFDSkMsTUFBTUosd0RBQWUsQ0FBQ0ssS0FBSyxDQUFDQyxRQUFRO1FBQ3BDQyxLQUFLO0lBQ1A7SUFDQUMsUUFBUTtRQUNOSixNQUFNSix3REFBZSxDQUFDSyxLQUFLLENBQUNDLFFBQVE7UUFDcENDLEtBQUs7SUFDUDtJQUNBRSxNQUFNO1FBQ0pMLE1BQU1NO1FBQ05DLFNBQVM7SUFDWDtJQUNBQyxPQUFPO1FBQ0xSLE1BQU1NO1FBQ05DLFNBQVM7SUFDWDtJQUNBRSxXQUFXO1FBQ1RULE1BQU1VO1FBQ05ILFNBQVNHLEtBQUtDLEdBQUc7SUFDbkI7SUFDQUMsUUFBUTtRQUNOWixNQUFNO1lBQUM7Z0JBQUVBLE1BQU1KLHdEQUFlLENBQUNLLEtBQUssQ0FBQ0MsUUFBUTtnQkFBRUMsS0FBSztZQUFNO1NBQUU7UUFDNURJLFNBQVMsRUFBRTtJQUNiO0FBQ0Y7QUFFQSxNQUFNTSxVQUFVakIsd0RBQWUsQ0FBQ2lCLE9BQU8sSUFBSWpCLHFEQUFjLENBQUMsV0FBV0M7QUFFckUsaUVBQWVnQixPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXl1c2hjaGF0Ly4vbW9kZWxzL01lc3NhZ2UuanM/MTdhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCJcclxuXHJcbmNvbnN0IE1lc3NhZ2VTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBjaGF0OiB7XHJcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICByZWY6IFwiQ2hhdFwiLFxyXG4gIH0sXHJcbiAgc2VuZGVyOiB7XHJcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICByZWY6IFwiVXNlclwiLFxyXG4gIH0sICBcclxuICB0ZXh0OiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiBcIlwiLFxyXG4gIH0sXHJcbiAgcGhvdG86IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgfSxcclxuICBjcmVhdGVkQXQ6IHtcclxuICAgIHR5cGU6IERhdGUsXHJcbiAgICBkZWZhdWx0OiBEYXRlLm5vdyxcclxuICB9LFxyXG4gIHNlZW5CeToge1xyXG4gICAgdHlwZTogW3sgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJ31dLFxyXG4gICAgZGVmYXVsdDogW11cclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBNZXNzYWdlID0gbW9uZ29vc2UubW9kZWxzLk1lc3NhZ2UgfHwgbW9uZ29vc2UubW9kZWwoJ01lc3NhZ2UnLCBNZXNzYWdlU2NoZW1hKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1lc3NhZ2VTY2hlbWEiLCJTY2hlbWEiLCJjaGF0IiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJzZW5kZXIiLCJ0ZXh0IiwiU3RyaW5nIiwiZGVmYXVsdCIsInBob3RvIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsInNlZW5CeSIsIk1lc3NhZ2UiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Message.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    profileImage: {\n        type: String,\n        default: \"\"\n    },\n    chats: {\n        type: [\n            {\n                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                ref: \"Chat\"\n            }\n        ],\n        default: []\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxVQUFVO1FBQ1JDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xILE1BQU1DO1FBQ05DLFVBQVU7UUFDVkUsUUFBUTtJQUNWO0lBQ0FDLFVBQVU7UUFDUkwsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FJLGNBQWM7UUFDWk4sTUFBTUM7UUFDTk0sU0FBUztJQUNYO0lBQ0FDLE9BQU87UUFDTFIsTUFBTTtZQUFDO2dCQUFFQSxNQUFNSix3REFBZSxDQUFDYSxLQUFLLENBQUNDLFFBQVE7Z0JBQUVDLEtBQUs7WUFBTztTQUFFO1FBQzdESixTQUFTLEVBQUU7SUFDYjtBQUNGO0FBRUEsTUFBTUssT0FBT2hCLHdEQUFlLENBQUNnQixJQUFJLElBQUloQixxREFBYyxDQUFDLFFBQVFDO0FBRTVELGlFQUFlZSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXl1c2hjaGF0Ly4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgdXNlcm5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgcHJvZmlsZUltYWdlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiBcIlwiLFxyXG4gIH0sXHJcbiAgY2hhdHM6IHtcclxuICAgIHR5cGU6IFt7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIkNoYXRcIiB9XSxcclxuICAgIGRlZmF1bHQ6IFtdLFxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicHJvZmlsZUltYWdlIiwiZGVmYXVsdCIsImNoYXRzIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ }),

/***/ "(rsc)/./mongodb/index.js":
/*!**************************!*\
  !*** ./mongodb/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nconst connectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"MongoDB is already connected\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL, {\n            dbName: \"AmongUs\",\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        isConnected = true;\n        console.log(\"MongoDB is connected successfully\");\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst mongooseOptions = {\n    socketTimeoutMS: 30000\n};\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://MARKBOLTE:AAPFKn2HBA9vUlqW@cluster0.nfnx803.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\", mongooseOptions);\nconst db = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\ndb.on(\"error\", console.error.bind(console, \"MongoDB connection error:\"));\ndb.once(\"open\", ()=>{\n    console.log(\"Connected to MongoDB\");\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb25nb2RiL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQyxjQUFjO0FBRVgsTUFBTUMsY0FBYztJQUN6QkYsbURBQVksQ0FBQyxlQUFlO0lBRTVCLElBQUlDLGFBQWE7UUFDZkcsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNTCx1REFBZ0IsQ0FBQ08sUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7WUFDOUNDLFFBQVE7WUFDUkMsaUJBQWlCO1lBQ2pCQyxvQkFBb0I7UUFDdEI7UUFFQVgsY0FBYztRQUVkRyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9RLE9BQU87UUFDZFQsUUFBUUMsR0FBRyxDQUFDUTtJQUNkO0FBQ0YsRUFBRTtBQUVGLE1BQU1DLGtCQUFrQjtJQUN0QkMsaUJBQWlCO0FBQ25CO0FBRUFmLHVEQUFnQixDQUFDLHVIQUF1SGM7QUFFeEksTUFBTUUsS0FBS2hCLDREQUFtQjtBQUU5QmdCLEdBQUdFLEVBQUUsQ0FBQyxTQUFTZCxRQUFRUyxLQUFLLENBQUNNLElBQUksQ0FBQ2YsU0FBUztBQUMzQ1ksR0FBR0ksSUFBSSxDQUFDLFFBQVE7SUFDZGhCLFFBQVFDLEdBQUcsQ0FBQztBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXl1c2hjaGF0Ly4vbW9uZ29kYi9pbmRleC5qcz8zMjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmxldCBpc0Nvbm5lY3RlZCA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RCID0gYXN5bmMgKCkgPT4ge1xyXG4gIG1vbmdvb3NlLnNldChcInN0cmljdFF1ZXJ5XCIsIHRydWUpO1xyXG5cclxuICBpZiAoaXNDb25uZWN0ZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTW9uZ29EQiBpcyBhbHJlYWR5IGNvbm5lY3RlZFwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLCB7XHJcbiAgICAgIGRiTmFtZTogXCJBbW9uZ1VzXCIsXHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiTW9uZ29EQiBpcyBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgbW9uZ29vc2VPcHRpb25zID0ge1xyXG4gIHNvY2tldFRpbWVvdXRNUzogMzAwMDAsIFxyXG59O1xyXG5cclxubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9NQVJLQk9MVEU6QUFQRktuMkhCQTl2VWxxV0BjbHVzdGVyMC5uZm54ODAzLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMCcsIG1vbmdvb3NlT3B0aW9ucyk7XHJcblxyXG5jb25zdCBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcblxyXG5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonKSk7XHJcbmRiLm9uY2UoJ29wZW4nLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBNb25nb0RCJyk7XHJcbn0pO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImlzQ29ubmVjdGVkIiwiY29ubmVjdFRvREIiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCIsImRiTmFtZSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImVycm9yIiwibW9uZ29vc2VPcHRpb25zIiwic29ja2V0VGltZW91dE1TIiwiZGIiLCJjb25uZWN0aW9uIiwib24iLCJiaW5kIiwib25jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./mongodb/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/node-fetch","vendor-chunks/pusher-js","vendor-chunks/tweetnacl","vendor-chunks/pusher","vendor-chunks/event-target-shim","vendor-chunks/abort-controller","vendor-chunks/tweetnacl-util","vendor-chunks/is-base64"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2Froute&page=%2Fapi%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2Froute.js&appDir=C%3A%5CUsers%5Clordm%5COneDrive%5CDesktop%5CCWB%5CGitlab%5Cachat%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Clordm%5COneDrive%5CDesktop%5CCWB%5CGitlab%5Cachat&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();