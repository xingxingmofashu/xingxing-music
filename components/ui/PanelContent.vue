<template>
  <div
    :class="ui.wrapper"
    v-bind="attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const config = {
  wrapper: 'flex-1 flex flex-col overflow-y-auto',
};

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined,
  },
  ui: {
    type: Object as PropType<Partial<typeof config>>,
    default: () => ({}),
  },
});

const { ui, attrs } = useUI(
  'music.panel.content',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true
);
</script>
