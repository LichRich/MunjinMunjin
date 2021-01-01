const path = require("path");
var webpack = require('webpack')
module.exports = {
  entry: "./public/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
       })
    ]
}
