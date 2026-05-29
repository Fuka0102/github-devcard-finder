# GitHub DevCard Finder 要件定義書（高度TS学習版）

## 1. アプリの概要
GitHubのユーザー名（ID）を検索し、公式APIから取得したデータを「プロフカード」として表示する。さらに、取得したプロフィール情報をローカル上で編集できるモック機能を提供するWebアプリケーション。

## 2. 主要機能（必須要件）
*検索機能*テキスト入力欄と「検索」ボタン。Enterキー対応。*状態（UI）の切り替え表示*未検索（Idle）/ ローディング中（Loading）/ エラー（Error）/ 成功（Success）の4状態を出し分ける。*プロフカードの表示*アバター画像、名前、ID、自己紹介、フォロワー数、リポジトリ数などを表示。*【追加】プロフカード編集機能（モック）*取得した情報を編集できるフォーム画面への切り替え機能。名前や自己紹介などは編集可能だが、ID（login）やアバターURLなどは編集不可（Readonlyまたは除外）とする。※APIへの送信（保存）は行わず、画面上の表示が変わるのみでOK。
## 3. 技術スタック
*フレームワーク*: React (Vite)*言語*: TypeScript (tsconfig.json で strict: true 必須)*禁止事項*: any 型の使用禁止。as による盲目的な型アサーションの原則禁止。
## 4. TypeScript 学習フォーカス（必須実装要件）
本アプリの目的は「実務レベルの高度なTypeScriptスキル」の習得であるため、以下の実装を必須とする。

### ① タグ付きユニオン（Discriminated Unions）による状態管理
APIのフェッチ状態をユニオン型で定義し、UIの出し分けに活用する。

### ② 汎用Fetch関数の自作（Generics & infer）
直接コンポーネント内で fetch を呼ぶのではなく、型安全な汎用APIクライアントを作成する。
fetchData<T>(url: string): Promise<T> のようなGenericsを使用する。infer を用いて、関数から「戻り値の型（Promiseの中身）」を抽出するUtility Typeを自作し、コンポーネント側で使用する。
### ③ Type Predicate（型ガード）による実行時検証
APIからのレスポンスを unknown として受け取り、それが本当に期待する型（GitHubUser）であるかを検証する自作の型ガード関数 isGitHubUser(data: unknown): data is GitHubUser を実装する。

### ④ Mapped Types / Utility Types による派生型の生成
編集機能において、元の GitHubUser 型を直接使うのではなく、以下の処理を型レベルで行う。
Omit や Pick を使い、編集不要な項目（loginなど）を除外する。Partial を使い、残りの項目をすべてオプショナル（未入力許容）にする。（挑戦）標準のUtility Typesだけでなく、自分でMapped Typesを書いて型を変換してみる。