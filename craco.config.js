const path = require('path')
const src = "src/";

module.exports = {
    webpack: {
        alias: {
            // エイリアス名: 実際の場所(絶対パス) という書き方
            '@': path.resolve(__dirname, src),
        }
    }
}
