<script lang="ts">
  import '../app.css'
  import 'uno.css'
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>
 
<Header />
<main class="text-center p-1em my-0 mx-auto">
  <slot />
</main>
<Footer />
 
<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
  