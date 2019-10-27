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
</style>
