"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  animationRule: () => animationRule,
  unoChanPreset: () => unoChanPreset
});
module.exports = __toCommonJS(src_exports);
var import_unocss = require("unocss");
var supportedAnimations = [
  "fadeIn",
  "fadeOut",
  "slideIn",
  "slideOut",
  "zoomIn",
  "zoomOut",
  "bounce",
  "shake",
  "rotate",
  "flip",
  "spin",
  "pulse",
  "flash",
  "wiggle",
  "fadeInDown",
  "fadeInUp",
  "fadeOutDown",
  "fadeOutUp",
  "zoomOutUp",
  "zoomOutDown",
  "zoomOutLeft",
  "zoomOutRight",
  "zoomInDown",
  "zoomInUp",
  "zoomInLeft",
  "zoomInRight"
];
var animationRule = [
  // 例: animation-fadeIn-500ms, animation-fadeIn-500ms-infinite, animation-fadeIn-500ms-3
  /^animation-([a-zA-Z]+)-(\d+)ms(?:-(infinite|\d+))?$/,
  ([, name, duration, iteration]) => {
    if (!supportedAnimations.includes(name))
      return;
    return {
      animation: `${name} ${duration}ms ease-in-out ${iteration ?? ""}`.trim(),
      "animation-fill-mode": "both"
    };
  }
];
var unoChanPreset = () => (0, import_unocss.definePreset)({
  name: "uno-chan",
  rules: [animationRule],
  safelist: supportedAnimations.map((name) => `animation-${name}-1500ms-infinite`),
  preflights: [
    {
      getCSS: () => `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideOut {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        @keyframes zoomIn {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        @keyframes zoomOut {
          from { transform: scale(1); }
          to { transform: scale(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25%); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25%, 75% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes flip {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(180deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes flash {
          0%, 100%, 50% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOutDown {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(100%); }
        }
        @keyframes fadeOutUp {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-100%); }
        }
        @keyframes zoomOutUp {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to { opacity: 0; transform: scale(0.1) translateY(-100%); }
        }
        @keyframes zoomOutDown {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to { opacity: 0; transform: scale(0.1) translateY(100%); }
        }
        @keyframes zoomOutLeft {
          from { opacity: 1; transform: scale(1) translateX(0); }
          to { opacity: 0; transform: scale(0.1) translateX(-100%); }
        }
        @keyframes zoomOutRight {
          from { opacity: 1; transform: scale(1) translateX(0); }
          to { opacity: 0; transform: scale(0.1) translateX(100%); }
        }
        @keyframes zoomInDown {
          from { opacity: 0; transform: scale(0.1) translateY(-100%); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes zoomInUp {
          from { opacity: 0; transform: scale(0.1) translateY(100%); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes zoomInLeft {
          from { opacity: 0; transform: scale(0.1) translateX(-100%); }
          to { opacity: 1; transform: scale(1) translateX(0); }
        }
        @keyframes zoomInRight {
          from { opacity: 0; transform: scale(0.1) translateX(100%); }
          to { opacity: 1; transform: scale(1) translateX(0); }
        }
      `
    }
  ]
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  animationRule,
  unoChanPreset
});
