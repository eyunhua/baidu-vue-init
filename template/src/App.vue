<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#veui}}
    <p>
      <veui-carousel
        :style="{margin: '0 auto'}"
        :datasource="items"
        :index.sync="index"
        :interval="interval"
        :pause-on-hover="pauseOnHover"
        :switch-trigger="trigger"
        :wrap="wrap"
        :indicator="indicator"
        :autoplay="autoplay">
      </veui-carousel>
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
    name: 'App',
    data() {
        return {
            {{#veui}}
            index: 0,
            interval: 3000,
            pauseOnHover: true,
            autoplay: true,
            wrap: true,
            trigger: 'hover',
            indicator: 'radio',
            items: [
                {
                    src: 'http://image.cc0.cn/uploadfile/2017/0612/thumb_1440_0_20170612110044186.jpg',
                    alt: 'Highway'
                },
                {
                    src: 'http://image.cc0.cn/uploadfile/2017/0621/thumb_1440_0_20170621121923346.jpg',
                    alt: 'City'
                },
                {
                    src: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
                    alt: 'Baidu logo'
                }
            ]
            {{/veui}}
        };
    }{{#router}}{{else}},
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
