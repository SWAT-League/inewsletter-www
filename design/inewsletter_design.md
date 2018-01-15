## URL

登录 /login

注册 /register

注册确认链接 /register/*user_hashed_id*/confirm/some_code

新建 /digest/new

编辑 /digest/id

自己的digest列表 /digest

供别人访问的digest列表 /user/*user_hashed_id*/digest

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
| id          | int      | 用户id                |
| hashed_id   | varchar  | hash过后用户id，用于界面     |
| email       | varchar  | 注册用的email           |
| status      | tinyint  | email注册状态，0未激活，1已激活 |
| create_time | datetime | 创建时间                |
| update_time | datetime | 更新时间                |

### Digest 文章摘要

| field       | type     | comment           |
| ----------- | -------- | ----------------- |
| id          | int      | 文章id              |
| hashed_id   | varchar  | hash过后文章摘要id，用于界面 |
| link        | varchar  | 文章的链接             |
| title       | varchar  | 文章的标题             |
| content     | varchar  | 摘要内容              |
| create_time | datetme  | 创建时间              |
| update_time | datetime | 更新时间              |
| deleted     | tinyint  | 已删除               |

