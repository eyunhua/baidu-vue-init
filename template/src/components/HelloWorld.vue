<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: '集成了百度 veui 组件库 和 fecs 代码规范检查工具的 vue 项目脚手架'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
