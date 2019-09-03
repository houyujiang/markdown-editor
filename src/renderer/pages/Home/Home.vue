<template>
    <el-container class="container">
      <el-aside v-if="is_menu" class="nav" width="300px;">
        <div class="topx">

        </div>
        <div class="topc">
          <el-menu active-text-color="#909090" :collapse="isCollapse">
            <el-menu-item index="1">
            <i class="el-icon-document-add"></i>
            <span slot="title">新建文档</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-tickets"></i>
            <span slot="title">打开文件</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-full-screen"></i>
            <span slot="title">全屏编辑</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-view"></i>
            <span slot="title">预览文档</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-download"></i>
            <span slot="title">导出文档</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-document"></i>
            <span slot="title">使用说明</span>
          </el-menu-item>
          <el-menu-item index="8">
            <i class="el-icon-warning-outline"></i>
            <span slot="title">关于</span>
          </el-menu-item>
          </el-menu>
          <div class="topf">
            <img src="" >
          </div>
        </div>
      </el-aside>
      <el-main>
        <div id="wrapper">
          <div class="topx">
            <el-tooltip v-if="is_menu" class="item" effect="dark" content="关闭左侧菜单" placement="right">
              <span class="is_menu">
                <i class="el-icon-s-fold" @click="onHideMenu()"></i>
              </span>
            </el-tooltip>
            <el-tooltip v-else class="item" effect="dark" content="展开左侧菜单" placement="right">
              <span class="is_menu">
                <i class="el-icon-s-unfold" @click="onShowMenu()"></i>
              </span>
            </el-tooltip>
            <span class="word-sum">字数：{{wordSize}}</span>
          </div>
          <div class="markdown-view">
            <mavon-editor style="height:100%" v-model = 'value' :ishljs="true" @htmlCode="htmlCode" @save="save"/>
          </div>
        </div>
      </el-main>
    </el-container>
</template>
<script>
var markdownpdf = require('markdown-pdf')
var fs = require('fs')
export default {
  name: 'Home',
  data () {
    return {
      is_menu: true,
      isCollapse: true,
      wordSize: 0
    }
  },
  methods: {
    htmlCode (res) {
      console.log(res)
    },
    writeFile (path, text) {
      fs.writeFile(path, text, function (err) {
        if (err) {
          throw err
        }
        console.log('Saved md.')
      })
    },
    save (res) {
      console.log(typeof (res))
      fs.writeFile('/Users/houyujiang/Documents/markdown-editor/test.md', res, function (err) {
        if (err) {
          throw err
        }
        console.log('Saved md.')
      })
      fs.createReadStream('/Users/houyujiang/Documents/markdown-editor/test.md').pipe(markdownpdf()).pipe(fs.createWriteStream('/Users/houyujiang/Documents/markdown-editor/test.pdf'))
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  height: 100%;
   .nav {
    background: #fff;
    height: 100%;

    .topx {
      height: 25px;
      background: #fff;
      -webkit-app-region: drag;
    }

    .topc {
      border-right: 1px solid #efefef;
      height: calc(100% - 25px);
    }
   }
   .el-main {
    padding: 0px;
      #wrapper {
        height: calc(100% - 46px);

      .topx {
        height: 25px;
        background: #fff;
        text-align: center;
        color: #000;
        line-height: 27px;
        font-weight: 300;
        border-bottom: 1px solid #efefef;
        font-size: 16px;
        -webkit-user-select: none;
        -webkit-app-region: drag;
      }
      .is_menu {
        font-size: 14px;
        cursor: pointer;
        position: absolute;
        left: 76px;
      }
      .markdown-view {
        height: 100%;
      }
    }  
  }    
}
</style>
