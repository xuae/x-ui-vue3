<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <x-button color="primary" stylus="text"></x-button>
  <x-button
    color="primary"
    stylus="text"
    native-type="button"
    type="fab"
  ></x-button>
  <x-button
    color="primary"
    stylus="text"
    native-type="button"
    type="flat"
  ></x-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import XButton from '@/components/Button/Button.vue';

export default defineComponent({
  name: 'About',
  components: { XButton },
});
</script>
