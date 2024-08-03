# eslint、prettier、markdownのチュートリアル

## ESLint
**コードを解析し、ESLintで作ったルールに沿ったコーディングになってるかチェックするツール**  
- バグの温床になりそうなコードがないかチェックするツール
- コードの品質を担保するために使う　　

とはいえ、ドキュメントを全て見るのはなかなか時間がかかる。  
**なので[airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)が提供しているライブラリを使ってみても良さそう。**  
  
```
npm i eslint-config-airbnb
```
vscodeの拡張機能にもある。  

### Official ESLint 
https://eslint.org/docs/latest/use/getting-started  

### husky  
https://typicode.github.io/husky/get-started.html  



## Prettier
**コード自動整形ツール。コードに統一感を持たせるツール**
- インデントの付け方
- 折り返しルール等

ESLintでもインデント、クウォートの指定は、できるが、コード形成という面から考えるとPrettierで形成した方が良いと考える。

### Official Prettier  
https://prettier.io/docs/en/  

Configurinig Prettier Optionsをチェックしてみると良い。　　

**自動保存**  
setting.jsonで自動保存、指定言語時だけの補正が可能になるらしい

```
{
  "editor.codeActionsOnSave": { "source.fixAll": true },
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```


## 重複ルールの取り扱い注意点
それぞれ別の役割を持つESLint（品質チェックツール）とPretter（コード形成）だが、それぞれ同じような機能を持っている。
そのため同じルールなのに、結果が違う場合、コンフリクトが発生してしまう様子

**.prettierrc.json**  
`
{
  "semi": false
}
`

**.eslintrc.json**  
`
{
  "rules": {
    "semi": ["error", "always"]
  }
}
`

### 引用
- [Markdown記法 サンプル集](https://qiita.com/tbpgr/items/989c6badefff69377da7)  
- [ESLint と Prettier の使い分け](https://zenn.dev/mami_inuzuka/articles/3deb24e2726ce9)


### 追加メモ
**-Dは、ローカルx環境にのみ反映させるコマンド**  
```
yarn add -D eslint
```

