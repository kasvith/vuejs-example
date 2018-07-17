<template>
  <div>
    <navbar></navbar>
    <section class="section">
      <router-view></router-view>
    </section>

  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  components: { Navbar },
};
</script>
