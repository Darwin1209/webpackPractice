const path = require('path');
const output = path.resolve(__dirname, 'target');

module.exports = {
    entry: {
        //Входная точка
        index: require.resolve('./src/index.js')
    },
    output: {
        //Входная точка
        path: output,
        //Имя основного результирующего файла
        filename: 'index.js'
    },
    module: {
        //Правила, тут объявляются лоадеры
        rules: [
            //js-файлы
            {
                test: /\.js$/,
                exclude: /node_modules[\\/].*/,
                //Лоадер трансплайтинга кода
                use: require.resolve('babel-loader')
            }
        ]
    }
}