"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const App = (props) => {
    props.title = "sdfsf";
    return react_1.default.createElement("h1", null, "hello ");
};
exports.default = App;
