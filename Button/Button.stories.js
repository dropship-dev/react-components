"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Large = exports.Secondary = exports.Primary = void 0;
const _1 = require(".");
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: "Example/Button",
    component: _1.Button,
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
};
exports.default = meta;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
exports.Primary = {
    args: {
        primary: true,
        label: "Button",
    },
};
exports.Secondary = {
    args: {
        label: "Button",
    },
};
exports.Large = {
    args: {
        size: "large",
        label: "Button",
    },
};
