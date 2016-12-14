<template>
  <div>
    <div class="nav">
      <router-link to="/all">
        全部
      </router-link>
      <router-link to="/good">
        精华
      </router-link>
      <router-link to="/share">
        分享
      </router-link>
      <router-link to="/ask">
        问答
      </router-link>
      <router-link to="/job">
        招聘
      </router-link>
    </div>
    <div class="topic-list">
      <topic-item
        :item="item"
        v-for="item in items">
      </topic-item>
    </div>
  </div>
</template>

<script>
  import TopicItem from './TopicItem.vue'

  export default {
    props: {
      items: Array
    },

    components: {
      TopicItem
    }
  }
</script>
