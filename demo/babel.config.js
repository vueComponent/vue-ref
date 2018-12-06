module.exports = {
  presets: [
    ["@babel/env", {"modules": false} ],
  ],
  "plugins": [
    "transform-vue-jsx",
    "transform-object-assign",
    "@babel/plugin-transform-runtime"
  ]
}
