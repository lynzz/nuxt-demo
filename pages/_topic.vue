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
    data ({ params, error }) {
      const tab = params ? params.tab : ''

      if (['all', 'ask', 'job', 'good', 'share'].indexOf(tab) == -1) {
        error({ message: `${tab} not found`, statusCode: 404 })
      }
      return api.getTopicsList(tab).then(items => {
        return {
          items
        }
      })
    },

    components: {
      TopicList
    }
  }
</script>
