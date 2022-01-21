<template>
  <div class="home-page">
    <button @click="goDocument">Docs</button>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Home',
  setup() {
    const router = useRouter();
    const state = reactive({});

    // forward Document page
    const goDocument = () => {
      router.push({
        name: 'Document',
        path: '/document',
      });
    };

    return {
      ...toRefs(state),
      goDocument,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100vh;
}
</style>
