<template>
  <div class="theme-container vuepress-theme-simple">
    <header class="header">
      <router-link
          to="/"
          :title="$description"
          class="site-name"
      >
        {{ $site.title }}
      </router-link>
      <div style="clear: both" />
      <nav-bar />
    </header>
    <post-page v-if="isPost" />
    <Content v-else/>
    <posts-list v-if="isHome" />
    <footer-bar />
  </div>
</template>

<script>
import PostsList from "../components/PostsList";
import PostPage from "../components/Post";
import FooterBar from '../components/FooterBar';
import NavBar from '../components/NavBar';
export default {
  components: {
    PostsList,
    PostPage,
    FooterBar,
    NavBar,
  },
  computed: {
    isHome() {
      return this.$page.path === '/';
    },
    isPostList() {
      return this.$page.path.match(/posts\/?$/);
    },
    isPost() {
      return this.$page.path.match(/posts\/.*\.html/);
    }
  },
  created() {
    console.log(this.$page.path)
  }
};
</script>
