# deepClone

实现 JavaScript 引用类型数据的深拷贝功能

## 使用者指南

通过 npm 下载安装代码

```base
npm install deepClone
```

如果使用 Node.js 环境

```js
var { deepClone } = require('deepClone');
deepClone({a: 1})
```

如果使用 webpack 环境

```js
import { deepClone } from 'deepClone';
deepClone({a: 1})
```

如果使用浏览器环境

```html
<script src="node_modules/clone/dist/index.aio.js"></script>
<script>
  deepClone({a: 1})
</script>
```

## 贡献者指南

首次运行需要先按照依赖

```base
npm install
```

一键打包生成生产代码

```base
npm run build
```

运行单元测试

```base
npm test
```
