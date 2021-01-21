# @domain.js/listener

[![Build status](https://travis-ci.com/domain-js/listener.svg?branch=master)](https://travis-ci.org/domain-js/listener)
[![codecov](https://codecov.io/gh/domain-js/listener/branch/master/graph/badge.svg)](https://codecov.io/gh/domain-js/listener)

# Installation
<pre>npm i @domain.js/listener --save</pre>

# cnf
<pre>无</pre>

# deps
| 模块名 | 别名 | 用到的方法 | 描述 |
| ------ | ---- | ---------- | ---- |
| logger | `无` | error | 在执行监听方法遇到错误用来处理错误信息 |
| _ | `无` | isFunction | 定于消息的时候用来判断参数是否是函数 |
| async | `无` | eachSeries | 执行订阅方法的时候依次执行，避免阻塞 |


# Usage
| 功能 | 描述 | 样例 |
| ---- | ---- | ---- |
| listen | 对接消息队列，消息队列的消费者 | async.queue(listener.queue, 2) |
| add | 注册一个监听函数 | listener.add('userSigned', handler) |
| remove | 移除一个监听函数 | listener.remove('userSigned', handler) |
| list | 列出当前所有监听的事件名称 | listener.list() // 返回数组 |
