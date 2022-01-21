<template>
  <div class=""></div>
</template>

<script lang="ts">
import {
  reactive,
  toRefs,
} from 'vue';

export default {
  name: 'HeadNav',
  setup() {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
