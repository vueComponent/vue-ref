<template>
  <div id="app">
    <img ref="img" v-ref="img=>this.img=img" alt="Vue logo" src="./assets/logo.png">
    <br/>
    <a-button @click="updateMsg">update</a-button>
    <br/>
    <HelloWorld :msg="msg" v-if="show" ref="helloWorld" v-ref="helloWorld=>this.helloWorld=helloWorld"/>
    <div>
      <a-button ref="button" v-ref="btn=>this.button=btn" @click="show = !show">{{ show ? 'hide' : 'show' }}</a-button>
      <transition @enter="onEnter">
        <div class="sidebar" v-show="show">
          <scrollbar ref="scrollbar" v-ref="(c)=>this.scrollbar=c"></scrollbar>
        </div>
      </transition>
    </div>
    <span v-for="n in 5" :key="n" ref="spanList" v-ref="vForRef">{{ n }} </span>
    <Functional ref="functional" v-ref="c=>this.functional=c"/>
  </div>
</template>

<script>
const Scrollbar = {
  methods: {
		updateScroll() {
			console.log('updateScroll called')
    }
  },
  render(h) {
  	return h('div', {
    	class: 'scrollbar'
    })
  }
}
import HelloWorld from './components/HelloWorld.vue'
import Functional from './components/Functional.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Scrollbar,
    Functional
  },
  data() {
    return {
      show: false,
      msg: Date.now()
    }
  },
  mounted() {
    this.refsLog()
  },
  updated() {
    this.refsLog()
  },
  methods: {
  	onEnter() {
    	this.scrollbar.updateScroll()
    },
    vForRef(c, key){
      console.log(c, key)
    },
    updateMsg(){
      this.msg = Date.now()
    },
    refsLog(){
      console.log(this.$refs.spanList)
      console.log(this.img === this.$refs.img)
      console.log(this.helloWorld === this.$refs.helloWorld)
      if(this.helloWorld !== this.$refs.helloWorld) {
        console.log(this.helloWorld, this.$refs.helloWorld)
      }
      console.log(this.button === this.$refs.button)
      console.log(this.scrollbar === this.$refs.scrollbar)
      console.log(this.functional === this.$refs.functional, this.$refs.functional, this.functional)
    }
  }
}
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
.sidebar {
  position: fixed;
  top: 0; right: 0; bottom: 0;
  width: 200px;
  background: #000;
}
.sidebar.v-enter-active,
.sidebar.v-leave-active {
  transition: transform .2s;
}

.sidebar.v-enter,
.sidebar.v-leave-active {
  transform: translate3d(100%, 0, 0);
}
</style>
