var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register("index", [], function (exports_1, context_1) {
    "use strict";
    var rPost, rGet, rPut, rPatch, rDelete;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             *
             * @param url /api/Post
             * @param header Any Header you like
             * @returns Object
             */
            rPost = function (url, data, header) { return __awaiter(void 0, void 0, void 0, function () {
                var res, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/api' + url;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, fetch(url, {
                                    method: "POST",
                                    headers: __assign({}, header),
                                    body: JSON.stringify(data)
                                })];
                        case 2: return [4 /*yield*/, (_a.sent()).json()];
                        case 3:
                            res = _a.sent();
                            return [2 /*return*/, res];
                        case 4:
                            error_1 = _a.sent();
                            return [2 /*return*/, error_1];
                        case 5: return [2 /*return*/];
                    }
                });
            }); };
            exports_1("rPost", rPost);
            /**
             *
             * @param url /api/Get
             * @param header Any Header you like
             * @returns Object
             */
            rGet = function (url, header) { return __awaiter(void 0, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/api' + url;
                            return [4 /*yield*/, fetch(url, {
                                    method: "GET",
                                    headers: __assign({}, header)
                                })];
                        case 1: return [4 /*yield*/, (_a.sent()).json()];
                        case 2:
                            res = _a.sent();
                            return [2 /*return*/, res];
                    }
                });
            }); };
            exports_1("rGet", rGet);
            /**
             *
             * @param url /api/Put
             * @param header Any Header you like
             * @returns Object
             */
            rPut = function (url, header) { return __awaiter(void 0, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/api' + url;
                            return [4 /*yield*/, fetch(url, {
                                    method: "PUT",
                                    headers: __assign({}, header)
                                })];
                        case 1: return [4 /*yield*/, (_a.sent()).json()];
                        case 2:
                            res = _a.sent();
                            return [2 /*return*/, res];
                    }
                });
            }); };
            exports_1("rPut", rPut);
            /**
             *
             * @param url /api/Patch
             * @param header Any Header you like
             * @returns Object
             */
            rPatch = function (url, header) { return __awaiter(void 0, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/api' + url;
                            return [4 /*yield*/, fetch(url, {
                                    method: "PATCH",
                                    headers: __assign({}, header)
                                })];
                        case 1: return [4 /*yield*/, (_a.sent()).json()];
                        case 2:
                            res = _a.sent();
                            return [2 /*return*/, res];
                    }
                });
            }); };
            exports_1("rPatch", rPatch);
            /**
             *
             * @param url /api/Delete
             * @param header Any Header you like
             * @returns Object
             */
            rDelete = function (url, header) { return __awaiter(void 0, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = '/api' + url;
                            return [4 /*yield*/, fetch(url, {
                                    method: "DELETE",
                                    headers: __assign({}, header)
                                })];
                        case 1: return [4 /*yield*/, (_a.sent()).json()];
                        case 2:
                            res = _a.sent();
                            return [2 /*return*/, res];
                    }
                });
            }); };
            exports_1("rDelete", rDelete);
        }
    };
});
