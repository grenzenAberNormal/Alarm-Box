<template>
  <footer class="footer">
    © {{ thisYear }}
    <i
        v-if="author"
        class="icon-user"
    />
    {{ author }}
  </footer>
</template>

<script>
export default {
  computed: {
    thisYear() {
      return new Date().getFullYear();
    },
    author() {
      return this.$themeConfig.author || '';
    },
  }
}
</script>
