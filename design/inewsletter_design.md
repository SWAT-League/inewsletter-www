## URL

登录 /login

注册 /register

注册确认链接 /register/:username/confirm/:code

新建 /digest/new

编辑 /digest/id

自己的 digest列表 /digest

供别人访问的digest列表 /user/:username/digest

## API

登陆 api/login

登出 api/logout

注册 api/register

新建/查看/编辑删除 digest api/digest/id

digest列表 api/digest

## 数据库表设计

### User 用户

| field       | type     | comment             |
| ----------- | -------- | ------------------- |
| id          | integer    | 用户id              |
| username    | character varying(255)  | hash过后用户id，用于界面 |
| email       | character varying(255)   | 注册用的email     |
| email_verified  | boolean   | email注册状态     |
| created_at | timestamp with timezone | 创建时间 |
| updated_at | timestamp with timezone | 更新时间 |
| deleted_at | timestamp with timezone | 删除时间 |

### Digest 文章摘要

| field       | type     | comment           |
| ----------- | -------- | ----------------- |
| id          | integer  | 文章id              |
| hash        | varchar(255)  | hash过后文章摘要id，用于界面 |
| link        | varchar(255)  | 文章的链接             |
| title       | varchar(255)  | 文章的标题             |
| content     | text     | 摘要内容                    |
| created_at  | timestamp with timezone | 创建时间     |
| updated_at  | timestamp with timezone | 更新时间     |
| deleted     | boolean  | 是否已删除 |
| deleted_at  | timestamp with timezone | 已删除       |
