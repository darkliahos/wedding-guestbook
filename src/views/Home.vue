<template>
  <div class="home">
    <CommentList />
    <AddComment />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddComment from '@/components/AddComment.vue'; // @ is an alias to /src
import CommentList from '@/components/CommentList.vue'; // @ is an alias to /src

@Component({
  components: {
    AddComment,
    CommentList
  },
})
export default class Home extends Vue {}
</script>
