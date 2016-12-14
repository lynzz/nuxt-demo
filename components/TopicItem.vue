<template>
  <div class="topic-item">
    <div class="topic-item-avatar">
      <img :src="item.author.avatar_url" alt="" />
    </div>
    <div class="topic-item-count">
      <span class="reply">{{item.reply_count}}</span>
      <span>/</span>
      <span class="visit">{{item.visit_count}}</span>
    </div>
    <div v-if="label" class="topic-item-label" :class="{'is-primary': isPrimary}">{{label}}</div>
    <a class="topic-item-title" :href="'/post/' + item.id">{{item.title}}</a>
  </div>
</template>

<script>
  export default {
    props: {
      item: Object
    },
    computed: {
      isPrimary () {
        return this.item.good || this.item.top
      },
      label () {
        const label = {
          share: '分享',
          job: '',
          ask: '问答',
          top: '置顶',
          good: '精华'
        }

        if (this.item.top) {
          return label.top
        } else if (this.item.good) {
          return label.good
        } else {
          return label[this.item.tab]
        }
      }
    }
  }
</script>
