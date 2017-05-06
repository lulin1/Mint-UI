
# Mint UI —— 基于 Vue.js 的移动端组件库

### 由饿了么前端团队推出的 Mint UI 是一个基于 Vue.js 的移动端组件库。

## 官网：http://mint-ui.github.io/#!/zh-cn

## Github: https://github.com/lulinliao/Mint-UI


## 快速开始

// 安装

 Vue 1.x

npm install mint-ui@1 -S

 Vue 2.0
 
npm install mint-ui -S

// 引入全部组件

import Vue from 'vue';

import Mint from 'mint-ui';

Vue.use(Mint);

// 按需引入部分组件

import { Cell, Checklist } from 'minu-ui';

Vue.component(Cell.name, Cell);

Vue.component(Checklist.name, Checklist);
