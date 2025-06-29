// src/index.ts
var fadeInRule = [
  /^animation-fadeIn-(\d+)ms$/,
  ([, d]) => ({
    animation: `fadeIn ${d}ms ease-in-out`,
    "animation-fill-mode": "both"
  })
];
var unoChanPreset = () => ({
  name: "uno-chan",
  rules: [fadeInRule],
  preflights: [
    {
      getCSS: () => `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `
    }
  ]
});
var src_default = unoChanPreset;
export {
  src_default as default
};
