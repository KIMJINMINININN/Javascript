const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode : 'development',
    devtool: 'eval', 
    resolve:{
        extensions: ['.js', '.vue'],
    },
    entry:{
        //여러개의 파일중 대표파일 = entry
        app: path.join(__dirname, 'main.js'),
    },
    module:{
        rules:[{
            test: /\.vue$/,     
            loader : 'vue-loader',
        },//js를 어떻게 합칠찌에 대해서 적는것
        //vue파일을 만났을때 vue_loader가 처리하게끔 만들어준다
         {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader',
            ]
        }],
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath:'/dist'
    },
};
