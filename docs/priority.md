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
- 1.newTask/createTask/useTasks.jsxでpriority:0を付与
- 2.useTask.jsにchangePriorityを作って任意の値に変更できるようにする
- 3.useTask.jsにpriorityで並び替えれるようにする

### 1.newTask/createTask/useTasks.jsxでpriority:0を付与
そのまんま新しく追加する

### 2.useTask.jsにchangePriorityを作って任意の値に変更できるようにする
優先度を配列で数値化
highImportantHighEmergency = 4
highImportantLowEmergency = 3
LowImportantHighEmergency = 2
LowImportantLowEmergency = 1

数字にボタンを割り当てる

関数でボタンをまとめて配列で出す
selectPriority[]
mapで全て表示させる
各ボタンに数字を割り振る

### 3.useTask.jsにpriorityで並び替えれるようにする
数字の大きい順に並び替える
sort(tasksPriority)