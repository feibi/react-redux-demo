const webpack = require('webpack');

const vendors = [
    'react',
    'react-dom',
    'react-router',
    'react-router-redux',
    'redux',
    "react-redux",
    'velocity-react',
    'velocity-animate'
    // ...其它库
];

module.exports = {
    entry: {
        "lib": vendors,
    },
    output: {
        path: 'build',
        filename: '[name].[chunkhash].js',
        library: '[name].[chunkhash]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name].[chunkhash]',
            context: __dirname,
        }),
    ],
};
