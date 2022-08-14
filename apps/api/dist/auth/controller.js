"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
var prisma_1 = require("prisma");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var config_1 = require("../config");
var errors_1 = require("../utils/errors");
var createUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var salt, userExists, newEntry, token, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                salt = bcrypt.genSaltSync();
                userExists = prisma_1.default.user.findUnique({
                    where: { email: user.email },
                });
                if (!!userExists) return [3, 2];
                return [4, prisma_1.default.user.create({
                        data: __assign(__assign({}, user), { password: bcrypt.hashSync(user.password, salt) }),
                    })];
            case 1:
                newEntry = _b.sent();
                token = jwt.sign({
                    email: user.email,
                    id: user.id,
                    time: Date.now(),
                }, "hello", { expiresIn: "8h" });
                return [2, __assign(__assign({}, newEntry), { token: token })];
            case 2:
                _a = userExists;
                if (!_a) return [3, 4];
                return [4, userExists];
            case 3:
                _a = (_b.sent()).password === null;
                _b.label = 4;
            case 4:
                if (_a) {
                }
                return [2, userExists];
        }
    });
}); };
exports.createUser = createUser;
var loginUser = function (credentials) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, prisma_1.default.user
                .findUnique({
                where: { email: credentials.email },
            })
                .then(function (user) {
                console.log(user);
                if (!user) {
                    return Promise.reject("Damn");
                }
                return bcrypt
                    .compare(credentials.password, user.password)
                    .then(function (isValidPassword) {
                    if (!isValidPassword) {
                        return Promise.reject(new errors_1.AuthenticationError("Invalid username or password"));
                    }
                    return Promise.resolve(jwt.sign(user, config_1.secret));
                });
            })];
    });
}); };
exports.loginUser = loginUser;
