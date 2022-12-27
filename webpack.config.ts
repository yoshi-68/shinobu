// https://progtext.net/programming/webpack-resolve/
const src = "/electron/";
// const src = "/src/";

module.exports = {
    resolve: {
        alias: {
            // エイリアス名: 実際の場所(絶対パス) という書き方
            "@": __dirname + src
        }
    },
    module: {
        // ...
    },
}
