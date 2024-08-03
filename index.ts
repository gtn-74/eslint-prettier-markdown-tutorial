

"no-unused-vars"

var x; // 使われていない変数定義に対してエラーを出す

var y = 10;
console.log(y);

"max-len"

/*eslint max-len: ["error", { "code": 80 }]*/

// 一行の長さが指定した文字数以上だとエラーになる
var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" };
