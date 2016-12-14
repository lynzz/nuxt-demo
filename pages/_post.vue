<template>
  <div>
    <div class="post-header">
      <h2>{{post.title}}</h2>
      <p class="post-meta">

      </p>
      <div v-html="post.content"></div>
    </div>
  </div>
</template>

<script>
  import api from '../api'

  export default {
    data ({params, error}) {
      if (error) {
        error({ message: 'Post not found', statusCode: 404 })
      }
      return api.getTopicsPost(params.id).then(post => {
        console.log(post)
        return {
          post
        }
      })
    }
  }
</script>
