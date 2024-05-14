"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/abort-controller";
exports.ids = ["vendor-chunks/abort-controller"];
exports.modules = {

/***/ "(ssr)/./node_modules/abort-controller/dist/abort-controller.js":
/*!****************************************************************!*\
  !*** ./node_modules/abort-controller/dist/abort-controller.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/**\n * @author Toru Nagashima <https://github.com/mysticatea>\n * See LICENSE file in root directory for full license.\n */\n\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar eventTargetShim = __webpack_require__(/*! event-target-shim */ \"(ssr)/./node_modules/event-target-shim/dist/event-target-shim.js\");\n\n/**\n * The signal class.\n * @see https://dom.spec.whatwg.org/#abortsignal\n */\nclass AbortSignal extends eventTargetShim.EventTarget {\n    /**\n     * AbortSignal cannot be constructed directly.\n     */\n    constructor() {\n        super();\n        throw new TypeError(\"AbortSignal cannot be constructed directly\");\n    }\n    /**\n     * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.\n     */\n    get aborted() {\n        const aborted = abortedFlags.get(this);\n        if (typeof aborted !== \"boolean\") {\n            throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? \"null\" : typeof this}`);\n        }\n        return aborted;\n    }\n}\neventTargetShim.defineEventAttribute(AbortSignal.prototype, \"abort\");\n/**\n * Create an AbortSignal object.\n */\nfunction createAbortSignal() {\n    const signal = Object.create(AbortSignal.prototype);\n    eventTargetShim.EventTarget.call(signal);\n    abortedFlags.set(signal, false);\n    return signal;\n}\n/**\n * Abort a given signal.\n */\nfunction abortSignal(signal) {\n    if (abortedFlags.get(signal) !== false) {\n        return;\n    }\n    abortedFlags.set(signal, true);\n    signal.dispatchEvent({ type: \"abort\" });\n}\n/**\n * Aborted flag for each instances.\n */\nconst abortedFlags = new WeakMap();\n// Properties should be enumerable.\nObject.defineProperties(AbortSignal.prototype, {\n    aborted: { enumerable: true },\n});\n// `toString()` should return `\"[object AbortSignal]\"`\nif (typeof Symbol === \"function\" && typeof Symbol.toStringTag === \"symbol\") {\n    Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {\n        configurable: true,\n        value: \"AbortSignal\",\n    });\n}\n\n/**\n * The AbortController.\n * @see https://dom.spec.whatwg.org/#abortcontroller\n */\nclass AbortController {\n    /**\n     * Initialize this controller.\n     */\n    constructor() {\n        signals.set(this, createAbortSignal());\n    }\n    /**\n     * Returns the `AbortSignal` object associated with this object.\n     */\n    get signal() {\n        return getSignal(this);\n    }\n    /**\n     * Abort and signal to any observers that the associated activity is to be aborted.\n     */\n    abort() {\n        abortSignal(getSignal(this));\n    }\n}\n/**\n * Associated signals.\n */\nconst signals = new WeakMap();\n/**\n * Get the associated signal of a given controller.\n */\nfunction getSignal(controller) {\n    const signal = signals.get(controller);\n    if (signal == null) {\n        throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? \"null\" : typeof controller}`);\n    }\n    return signal;\n}\n// Properties should be enumerable.\nObject.defineProperties(AbortController.prototype, {\n    signal: { enumerable: true },\n    abort: { enumerable: true },\n});\nif (typeof Symbol === \"function\" && typeof Symbol.toStringTag === \"symbol\") {\n    Object.defineProperty(AbortController.prototype, Symbol.toStringTag, {\n        configurable: true,\n        value: \"AbortController\",\n    });\n}\n\nexports.AbortController = AbortController;\nexports.AbortSignal = AbortSignal;\nexports[\"default\"] = AbortController;\n\nmodule.exports = AbortController\nmodule.exports.AbortController = module.exports[\"default\"] = AbortController\nmodule.exports.AbortSignal = AbortSignal\n//# sourceMappingURL=abort-controller.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYWJvcnQtY29udHJvbGxlci9kaXN0L2Fib3J0LWNvbnRyb2xsZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELHNCQUFzQixtQkFBTyxDQUFDLDJGQUFtQjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLHFDQUFxQztBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEYsaURBQWlEO0FBQzNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQyxhQUFhLGtCQUFrQjtBQUMvQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixrQkFBZTs7QUFFZjtBQUNBLDhCQUE4QixHQUFHLHlCQUF5QjtBQUMxRCwwQkFBMEI7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9heXVzaGNoYXQvLi9ub2RlX21vZHVsZXMvYWJvcnQtY29udHJvbGxlci9kaXN0L2Fib3J0LWNvbnRyb2xsZXIuanM/NzM4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgVG9ydSBOYWdhc2hpbWEgPGh0dHBzOi8vZ2l0aHViLmNvbS9teXN0aWNhdGVhPlxuICogU2VlIExJQ0VOU0UgZmlsZSBpbiByb290IGRpcmVjdG9yeSBmb3IgZnVsbCBsaWNlbnNlLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBldmVudFRhcmdldFNoaW0gPSByZXF1aXJlKCdldmVudC10YXJnZXQtc2hpbScpO1xuXG4vKipcbiAqIFRoZSBzaWduYWwgY2xhc3MuXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jYWJvcnRzaWduYWxcbiAqL1xuY2xhc3MgQWJvcnRTaWduYWwgZXh0ZW5kcyBldmVudFRhcmdldFNoaW0uRXZlbnRUYXJnZXQge1xuICAgIC8qKlxuICAgICAqIEFib3J0U2lnbmFsIGNhbm5vdCBiZSBjb25zdHJ1Y3RlZCBkaXJlY3RseS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFib3J0U2lnbmFsIGNhbm5vdCBiZSBjb25zdHJ1Y3RlZCBkaXJlY3RseVwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhpcyBgQWJvcnRTaWduYWxgJ3MgYEFib3J0Q29udHJvbGxlcmAgaGFzIHNpZ25hbGVkIHRvIGFib3J0LCBhbmQgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAgICovXG4gICAgZ2V0IGFib3J0ZWQoKSB7XG4gICAgICAgIGNvbnN0IGFib3J0ZWQgPSBhYm9ydGVkRmxhZ3MuZ2V0KHRoaXMpO1xuICAgICAgICBpZiAodHlwZW9mIGFib3J0ZWQgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCAndGhpcycgdG8gYmUgYW4gJ0Fib3J0U2lnbmFsJyBvYmplY3QsIGJ1dCBnb3QgJHt0aGlzID09PSBudWxsID8gXCJudWxsXCIgOiB0eXBlb2YgdGhpc31gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWJvcnRlZDtcbiAgICB9XG59XG5ldmVudFRhcmdldFNoaW0uZGVmaW5lRXZlbnRBdHRyaWJ1dGUoQWJvcnRTaWduYWwucHJvdG90eXBlLCBcImFib3J0XCIpO1xuLyoqXG4gKiBDcmVhdGUgYW4gQWJvcnRTaWduYWwgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjcmVhdGVBYm9ydFNpZ25hbCgpIHtcbiAgICBjb25zdCBzaWduYWwgPSBPYmplY3QuY3JlYXRlKEFib3J0U2lnbmFsLnByb3RvdHlwZSk7XG4gICAgZXZlbnRUYXJnZXRTaGltLkV2ZW50VGFyZ2V0LmNhbGwoc2lnbmFsKTtcbiAgICBhYm9ydGVkRmxhZ3Muc2V0KHNpZ25hbCwgZmFsc2UpO1xuICAgIHJldHVybiBzaWduYWw7XG59XG4vKipcbiAqIEFib3J0IGEgZ2l2ZW4gc2lnbmFsLlxuICovXG5mdW5jdGlvbiBhYm9ydFNpZ25hbChzaWduYWwpIHtcbiAgICBpZiAoYWJvcnRlZEZsYWdzLmdldChzaWduYWwpICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFib3J0ZWRGbGFncy5zZXQoc2lnbmFsLCB0cnVlKTtcbiAgICBzaWduYWwuZGlzcGF0Y2hFdmVudCh7IHR5cGU6IFwiYWJvcnRcIiB9KTtcbn1cbi8qKlxuICogQWJvcnRlZCBmbGFnIGZvciBlYWNoIGluc3RhbmNlcy5cbiAqL1xuY29uc3QgYWJvcnRlZEZsYWdzID0gbmV3IFdlYWtNYXAoKTtcbi8vIFByb3BlcnRpZXMgc2hvdWxkIGJlIGVudW1lcmFibGUuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhBYm9ydFNpZ25hbC5wcm90b3R5cGUsIHtcbiAgICBhYm9ydGVkOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbn0pO1xuLy8gYHRvU3RyaW5nKClgIHNob3VsZCByZXR1cm4gYFwiW29iamVjdCBBYm9ydFNpZ25hbF1cImBcbmlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gXCJzeW1ib2xcIikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYm9ydFNpZ25hbC5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBcIkFib3J0U2lnbmFsXCIsXG4gICAgfSk7XG59XG5cbi8qKlxuICogVGhlIEFib3J0Q29udHJvbGxlci5cbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNhYm9ydGNvbnRyb2xsZXJcbiAqL1xuY2xhc3MgQWJvcnRDb250cm9sbGVyIHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoaXMgY29udHJvbGxlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc2lnbmFscy5zZXQodGhpcywgY3JlYXRlQWJvcnRTaWduYWwoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGBBYm9ydFNpZ25hbGAgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGlzIG9iamVjdC5cbiAgICAgKi9cbiAgICBnZXQgc2lnbmFsKCkge1xuICAgICAgICByZXR1cm4gZ2V0U2lnbmFsKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBYm9ydCBhbmQgc2lnbmFsIHRvIGFueSBvYnNlcnZlcnMgdGhhdCB0aGUgYXNzb2NpYXRlZCBhY3Rpdml0eSBpcyB0byBiZSBhYm9ydGVkLlxuICAgICAqL1xuICAgIGFib3J0KCkge1xuICAgICAgICBhYm9ydFNpZ25hbChnZXRTaWduYWwodGhpcykpO1xuICAgIH1cbn1cbi8qKlxuICogQXNzb2NpYXRlZCBzaWduYWxzLlxuICovXG5jb25zdCBzaWduYWxzID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogR2V0IHRoZSBhc3NvY2lhdGVkIHNpZ25hbCBvZiBhIGdpdmVuIGNvbnRyb2xsZXIuXG4gKi9cbmZ1bmN0aW9uIGdldFNpZ25hbChjb250cm9sbGVyKSB7XG4gICAgY29uc3Qgc2lnbmFsID0gc2lnbmFscy5nZXQoY29udHJvbGxlcik7XG4gICAgaWYgKHNpZ25hbCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkICd0aGlzJyB0byBiZSBhbiAnQWJvcnRDb250cm9sbGVyJyBvYmplY3QsIGJ1dCBnb3QgJHtjb250cm9sbGVyID09PSBudWxsID8gXCJudWxsXCIgOiB0eXBlb2YgY29udHJvbGxlcn1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpZ25hbDtcbn1cbi8vIFByb3BlcnRpZXMgc2hvdWxkIGJlIGVudW1lcmFibGUuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhBYm9ydENvbnRyb2xsZXIucHJvdG90eXBlLCB7XG4gICAgc2lnbmFsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICBhYm9ydDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG59KTtcbmlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gXCJzeW1ib2xcIikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYm9ydENvbnRyb2xsZXIucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogXCJBYm9ydENvbnRyb2xsZXJcIixcbiAgICB9KTtcbn1cblxuZXhwb3J0cy5BYm9ydENvbnRyb2xsZXIgPSBBYm9ydENvbnRyb2xsZXI7XG5leHBvcnRzLkFib3J0U2lnbmFsID0gQWJvcnRTaWduYWw7XG5leHBvcnRzLmRlZmF1bHQgPSBBYm9ydENvbnRyb2xsZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gQWJvcnRDb250cm9sbGVyXG5tb2R1bGUuZXhwb3J0cy5BYm9ydENvbnRyb2xsZXIgPSBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBYm9ydENvbnRyb2xsZXJcbm1vZHVsZS5leHBvcnRzLkFib3J0U2lnbmFsID0gQWJvcnRTaWduYWxcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFib3J0LWNvbnRyb2xsZXIuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/abort-controller/dist/abort-controller.js\n");

/***/ })

};
;