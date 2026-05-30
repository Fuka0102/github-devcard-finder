# 実装todo

## pr1
### DOM雑実装
[x] テキスト入力欄DOM実装
[x] 検索ボタンDOM実装
[ ] inputへ入力したテキストをonChangeで受け取りconsole表示
[ ] 検索ボタンを押すと、入力したテキストをsubmit
[ ] Enterキーを押すと、入力したテキストをsubmit

### API通信
[ ] ボタンを押すと、github APIをfetchし、レスポンスを受け取る
[ ] fetch関数は汎用的なものとし、型定義にinferを使用する 
[ ] Enterキーを押すと、github APIをfetchし、レスポンスを受け取る 
[ ] 上記レスポンスをunknownで受け取り、isGitHubUser型ガード関数で検証する
[ ] form下に各通信状態をテキストで表示 
    [ ] 検索前：Idle
    [ ] 受け取る間：loading
    [ ] 成功: success
    [ ] 失敗: error
[ ] レスポンスの型をDiscriminated Unions（hoge | hogehoge）で定義する
[ ] 成功の場合、各情報をテキスト表示
    [ ] アバター画像
    [ ] 名前
    [ ] ID
    [ ] 自己紹介
    [ ] フォロワー数
    [ ] リポジトリ数


## pr2
### プロフカード編集機能
[ ] 変更ボタン実装
[ ] 変更押下で変更画面遷移
[ ] 下記項目はフォーム内に表示し変更可能
    [ ] 名前
    [ ] 自己紹介
[ ] 下記項目はフォーム内に表示するが変更できない
    [ ] ID
    [ ] アバターURL（アバターは画像をそのまま表示）
[ ]  EditableUser型をOmit/Partialを使ってGitHubUserから派生させる
[ ]  （挑戦）自作Mapped Typesで同等の型変換を書く
[ ] 更新ボタン押下で前の画面に戻る
[ ] カードUI内の情報へ変更内容が反映される
