<template>
  <section class="container">
    <h2>CNodejs</h2>
    <topic-list :items="items"></topic-list>
  </section>
</template>

<script>
  const api = require('../api')
  import TopicList from '~components/TopicList.vue'

  export default {
    data ({req}) {
      return api.getTopicsList().then(items => {
        return {
          items
        }
      })
    },

    components: {
      TopicList,
    }
  }
</script>
