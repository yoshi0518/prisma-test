# Prisma Practice

## Version

- Node.js 20.9
- MySQL 8.2
- phpMyAdmin 5.2

## How to Use

### Docker Network/Container

```bash
# Githubから開発作業コンテナをクローン
$ git clone git@github.com:yoshi0518/prisma-test.git

# Dockerネットワークを作成
$ docker network create prisma-test
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

### MySQL Container

```bash
# MySQLコンテナに接続
$ docker-compose exec mysql /bin/bash

# PostgreSQL接続
# root/SysAdm!n
$ mysql -u root -p

# タイムゾーン確認
$ show variables like '%time_zone%';

# 文字コード確認
$ show variables like '%char%';

# 照合順序確認
$ show variables like 'col%';

# DB一覧を表示
$ show databases;

# MySQL切断
$ exit

# コンテナから切断
$ exit
```

### Development Container

```bash
# 開発作業コンテナに接続
$ docker-compose exec prisma /bin/sh

# 各種バージョン確認
$ node --version
$ npm --version
$ pnpm --version

# コンテナから切断
$ exit
```
