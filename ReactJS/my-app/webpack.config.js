const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html", // to import index.html file inside index.js
        }),
      ],
    devServer: {
        //  static: {
        //    directory: path.join(__dirname, 'public'),
        //  },
        //compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/, // .js and .jsx files
              exclude: /node_modules/, // excluding the node_modules folder
              use: {
                loader: "babel-loader",
              },
            },
            {
              test: /\.(ts|tsx)$/,
              exclude: /node_modules/,
              use: 'ts-loader',
            },
            {
              test: /\.(sa|sc|c)ss$/, // styles files
              use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
              test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
              type: 'asset/resource',
              // use: [
              //   {
              //     loader: 'file-loader',
              //     options: { limit: false },
              //  }
              // ]

            },
            
          ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
};