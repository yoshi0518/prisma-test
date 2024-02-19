# Prisma Test

## Version

- MySQL 8.3.0
- phpMyAdmin 5.2.1
- SQLServer 2022

## Port(Host:Container)

- MySQL 3306:3306
- phpMyAdmin 8080:80
- SQLServer 1433:1433

## How to Use

### Docker Network/Container

```bash
# Dockerネットワークを作成
$ docker network create test
$ docker network ls

# コンテナをビルド
$ docker-compose build

# コンテナを起動
$ docker-compose up -d

# コンテナ一覧を表示
$ docker-compose ps

# コンテナを停止
$ docker-compose down
```

### Prisma

```bash
# Prisma初期化
$ pnpm dlx prisma init

# `prisma/models/base.prisma` のDB接続情報を修正

# `prisma/models/xxx.prisma` を追加

# マイグレーション生成
$ pnpm prisma:migrate --name="xxx"

# マイグレーションファイルの内容を確認

# マイグレーション適用
$ pnpm prisma:deploy

# Prismaクライアント更新
$ pnpm prisma:generate

# TypeScriptコンパイル
$ pnpm build

# Node処理実行
$ node dist/xxx.js
```

### Lint、Format

```bash
# Lint
$ pnpm lint

# Format
$ pnpm fmt
```

### MySQL Container

```bash
# PostgreSQLコンテナに接続
$ docker-compose exec mysql /bin/bash

# バージョン確認
$ mysql --version

# MySQL接続
# root/P@ssword
# user/P@ssword
$ mysql -u root -p

# 文字コード確認
$ show variables like '%char%';

# 照合順序確認
$ show variables like '%collation%';

# DB一覧を表示
$ show databases;

# テーブル一覧を表示
$ show tables;

# MySQLSQL切断
$ exit

# コンテナから切断
$ exit
```

### SQLServer Container

```bash
# SQLServerコンテナに接続
$ docker-compose exec mssql /bin/bash

# SQLServer接続
$ /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -p

# バージョン確認
$ select @@version;
$ go

# SQLServer切断
$ exit

# コンテナから切断
$ exit
```
