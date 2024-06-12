# 優先度機能の設計
## 概要
優先度を設定してその順番で並ぶようにする

## 設計
- 1.ボックスの中から三段階orABCDEメソッドで選ぶ
- 2.直接入力
- 3.緊急度と重要度を用いた表を使いその中から選ぶ

### 1.ボックスの中から選択
- CreateTaskに入力欄を追加
- その内容によってstatusを変更
- そのstatusで順番を指定

### 2.直接入力
- ダサいから却下

### 3.緊急度と重要度を用いた表を使いその中から選ぶ
- CreateTaskに優先度選択するボタンを追加
- 開くと緊急度・重要度軸による４象限マトリクスを出してそこから選択する
- その内容によってstatusを変更
- そのstatusで順番を指定

３が面白そうなので決定
react,TailWind,firebaseでいけるか？

## Doc設計
- 現状の設計の確認
- 過程予定の書き出し

### 現状
- firestore.jsからtaskを生成
- useTasks.jsxでtaskにstatusをつけ各ボタンによって振り分けられるように設定
- 並び順はrandomIDに基づいている

### 予定
- 1.newTask/createTask/useTasksでpriorityを生成
- 2.PriorityComboBoxを作成してpriorityを変更するボックスを生成
- 3.変更された値を取得してfirebaseのpriorityを変更
- 4.変更された値に基づいて並び替えを行う（Firestore orderBy）

- 設定箇所はタスク周りに設定
- 流れは大丈夫
- タスク機能周りで変更を実装
- ソート部分はtasksの状態変更周りに入れる
- refs.tasksをソートかけた状態で扱えるようにする