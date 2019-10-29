<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
/*
  sass的两种用法
  1.scss 使用起来和 less 类似，支持嵌套写法 区别：定义变量不同 $
  2.sass 和stylus类似  写起来比较简洁 必须省略 {} 和 ;

不加任何限制时，组件之间样式是会相互影响的
* {
    margin: 0;
    padding: 0;
  }
*/
// $color: pink;
// $font-size: 150px;
// body {
//   background-color: $color;
//   h1 {
//     background-color: skyblue;
//     font-size: $font-size;
//   }
// }
body,html,#app {
  width: 100%;
  height: 100%;
}
.login {
  width: 100%;
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
  .el-form {
    width: 400px;
    padding: 75px 40px 15px 40px;
    background-color: #fff;
    margin: 200px auto;
    border-radius: 20px;
    position: relative;
    img {
      width: 140px;
      position: absolute;
      top: -80px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      border: 10px solid #fff;
    }
  }
  .reset {
    margin-left: 80px;
  }
  .el-button+.el-button {
    margin-left: 80px;
  }
}
</style>
