<template>
  <div id="sidebar">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p>计算计数器:{{ count }}</p>
    <input type="text" v-model="count" />
    <ul>
      <li v-for="article in articles">
        {{article.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
          author: "微信公众号 jinkey-love",
          articles: [],
       }
    }, 
  mounted: function() {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          headers: {

          },
          emulateJSON: true
      }).then(function(response) {
          // 这里是处理正确的回调

          this.articles = response.data.subjects
          this.$store.commit('increment',response.data.subjects)

          // this.articles = response.data["subjects"] 也可以

      }, function(response) {
          // 这里是处理错误的回调
          console.log(response)
      });
    },
  computed: function () {
        count() {
            console.log(this.$store.state.b.count)
            let response_data = this.$store.state.b.count

            return response_data[1]['title']

            /*mapGetters({
            // 映射 this.doneCount 为 store.getters.doneTodosCount
               doneCount: 'doneTodos'
            })*/
        }
    }
  
  }
</script>

<style>
</style>