# markdown-editor

> 基于electron的markdown编辑器，使用mavonEditor实现效果

#### 界面

![编辑区1](/static/screen/01.png)

![编辑区2](/static/screen/02.png)
#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


# lint all JS/Vue component files in `src/`
npm run lint

```

#### 第三方插件

1. markdown编辑插件：https://github.com/hinesboy/mavonEditor 
2. markdown to pdf: https://github.com/houyujiang/markdown-pdf
3. elementUi

#### mavonEditor使用记录

1. 获取当前输入框中的文本内容：

```java
this.$refs.md.d_value

```

1. 获取当前输入框中的html:

```java
this.$refs.md.d_render（html格式）
```

#### markdown link 内容提示

* 标题周围应该空一行
  
* 标题末尾不带标点符号
  
* 代码块标记代码语言可以指定显示高亮

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[8fae476](https://github.com/SimulatedGREG/electron-vue/tree/8fae4763e9d225d3691b627e83b9e09b56f6c935) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
