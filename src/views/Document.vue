<template>
  <div class="document-page">
    <component :is="headNavComponent"></component>
    <component :is="treeNavComponent"></component>
    <component :is="articleComponent"></component>
    <component :is="subTreeComponent"></component>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  toRefs,
  defineAsyncComponent,
  markRaw,
} from 'vue';

function importComponent() {
  const defineHeadNavPage = defineAsyncComponent(() => import('./document/HeadNav.vue'));
  const defineTreeNavPage = defineAsyncComponent(() => import('./document/TreeNav.vue'));
  const defineArticlePage = defineAsyncComponent(() => import('./document/Article.vue'));
  const defineSubTreePage = defineAsyncComponent(() => import('./document/SubTree.vue'));

  const markHeadNavPage = markRaw(defineHeadNavPage);
  const markTreeNavPage = markRaw(defineTreeNavPage);
  const markArticlePage = markRaw(defineArticlePage);
  const markSubTreePage = markRaw(defineSubTreePage);

  return {
    markHeadNavPage,
    markTreeNavPage,
    markArticlePage,
    markSubTreePage,
  };
}

export default {
  name: 'Document',
  setup() {
    const components = importComponent();
    const state = reactive({
      headNavComponent: components.markHeadNavPage,
      treeNavComponent: components.markTreeNavPage,
      articleComponent: components.markArticlePage,
      subTreeComponent: components.markSubTreePage,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.document-page {

}
</style>
