"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = false, size = "medium", backgroundColor, label, ...props }) => {
    return (<div className="bg-slate-600 h-10" {...props}>
      {label}
    </div>);
};
exports.Button = Button;
