"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.em_max = exports.em_min = exports.em_password = exports.em_invalidEmail = exports.em_maxLength = exports.em_minLength = exports.em_required = void 0;
const em_required = ({ field, message, }) => {
    if (message)
        return message;
    return `${field ? field : "This field"} is required`;
};
exports.em_required = em_required;
const em_minLength = ({ field, length, message, }) => {
    if (message)
        return message;
    return `${field ? field : "This field"} must be at least ${length} characters`;
};
exports.em_minLength = em_minLength;
const em_maxLength = ({ field, length, message, }) => {
    if (message)
        return message;
    return `${field ? field : "This field"} must be at most ${length} characters`;
};
exports.em_maxLength = em_maxLength;
const em_invalidEmail = ({ message }) => {
    if (message)
        return message;
    return `Invalid email format`;
};
exports.em_invalidEmail = em_invalidEmail;
const em_password = ({ field, message, }) => {
    if (message)
        return message;
    return `${field ? field : "This field"} must be a valid password`;
};
exports.em_password = em_password;
const em_min = ({ min, field, message, }) => {
    if (message)
        return message;
    return `${field ? field : "This field"} must be at least ${min}`;
};
exports.em_min = em_min;
const em_max = ({ max, field, message, }) => {
    if (message)
        return message;
    return `${field ? field : "This field"} must be at most ${max}`;
};
exports.em_max = em_max;
