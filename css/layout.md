
### 实现三栏布局的六种方式

1. float

中间内容元素放最后，两边栏宽度固定，各自左右浮动，中间内容自适应。

2. position

三栏绝对定位，左右两栏宽度固定，各自`left: 0; right: 0;`，中间栏定位为两边栏宽度，中间内容自适应。

3. -margin

中间栏放在最前面宽度100%，三栏左浮动，左栏 `margin: -100%;` 右栏 `margin: -300px;` 中间栏中的内容 `margin: 0 300px;` 

4. flex

容器 `display: flex;` 左右两栏宽度固定，中间栏 `flex: 1;`

5. table

6. grid

容器:
```
display: grid;
grid-template-rows: 200px;
grid-template-columns: 300px auto 300px;
``` 