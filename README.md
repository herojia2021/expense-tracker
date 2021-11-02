# 家庭記帳本

紀錄支出紀錄, 附有帳號機制, 可以紀錄自已的花費.<br>
[DEMO](https://dry-garden-69089.herokuapp.com/)

## 功能列表

- 帳號密碼登入
- 雜湊加密密碼
- 新增、刪除、修改支出項目
- 以不同排序檢視支出項目

### 需求

- Node.js & npm
- port 3000
- MongoDB

### 安裝

1.在本地目錄 clone repo 或 [download](https://github.com/herojia2021/expense-tracker/archive/refs/heads/master.zip)

```
git clone https://github.com/herojia2021/expense-tracker.git
```

2.安裝相依套件

```
cd expense-tracker
```

```
npm install
```

3.設定環境變數

```
．將.env.example 更名為 .env
```

4.匯入種子資料

```
npm run seed
```

5.開啟程式

```
npm run start
```

- 終端顯示 `Express is running on http://localhost:3000` 即啟動完成，
- 用瀏覽器開啟 [http://localhost:3000](http://localhost:3000) 使用程式

## 運行截圖

![首頁](/public/img/index.jpg)

## 其它說明

- 使用下載版本 BootStrap 4.x
- 清除種子資料

```
npm run clearDB
```
