import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    // 開発サーバーの設定（必要に応じて）
    server: {
        port: 3000, // ポート番号を3000に固定する場合
        open: true, // サーバー起動時に自動でブラウザを開く
    },
    plugins: [react()],
    // ビルドの設定
    build: {
        outDir: 'dist', // 本番用ファイルの出力先（デフォルトは dist）
    }
});