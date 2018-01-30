<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#veui}}
    <p>
      <veui-button ui="primary micro">提交</veui-button>
      <veui-button ui="primary tiny">提交</veui-button>
      <veui-button ui="primary small">提交</veui-button>
      <veui-button ui="primary">提交</veui-button>
      <veui-button ui="primary large">提交</veui-button>
      <veui-button ui="primary" disabled>提交</veui-button>
      <veui-button ui="primary" loading>提交</veui-button>
    </p>
    {{/veui}}
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld';

{{/unless}}
export default {
    name: 'App'{{#router}}{{else}},
    components: {
        HelloWorld
    }{{/router}}
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
