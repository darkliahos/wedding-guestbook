<template>
  <div class="container">
    <section>
      <ol class="list-group">
        <li class="list-group-item" v-for="comment of comments">
            {{ comment.Text}} - {{comment.Author}}
            </li>
      </ol>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Comment from "@/models/comment";
import store from "@/store";
@Component({
  components: {}
})
export default class CommentList extends Vue {
  private comments: Comment[];
  constructor() {
    super();
    this.comments = this.commentList();
    this
  }

  commentList(): Comment[] {
    let comments = this.$store.state.comments;
    return comments;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
