<template>
  <div class="container">
    <div class="alert alert-primary" v-show="message">{{ message }}</div>

    <div>
      <div class="form-group row">
        <label for="Text" class="col-sm-1">Text:</label>
        <div class="col-sm-4">
          <textarea type="text" id="Text" v-model="model.Text" cols="40" rows="5" class="form-control"> </textarea>
        </div>
         <label for="Author" class="col-sm-1">Author</label>
          <div class="col-sm-4">
          <input type="text" id="Author" v-model="model.Author" class="form-control">
        </div>
      </div>
      <div>
        <button type="submit" @click="AddToDo()" class="btn btn-primary">Write in our guestbook</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Comment from "@/models/comment";
import store from "@/store";
@Component({
  components: {}
})
export default class AddComment extends Vue {
  private model: Comment;
  private message: string;
  constructor() {
    super();
    this.model = new Comment();
    this.message = '';
    this
  }

  AddToDo() {
    this.$store
      .dispatch("addComment", this.model)
      .then(() => {
        this.message = "Comment added successfully";
        setTimeout(() => {
          this.message = "";
        }, 1500);
      })
      .catch(error => {
        console.error(error);
      });

    this.message = "";
    this.model = new Comment();
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
