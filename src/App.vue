<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated } from 'vue';

export default defineComponent({
  name: 'APP',
});
</script>
<style lang="scss">
.demo-doc {
  max-width: 1200px;
  margin: auto;

  h1,
  h2,
  h3,
  h4,
  h5 {
    padding: 64px 0 20px;
    font-weight: normal;
    color: $color-text-primary;

    &:hover a {
      opacity: 0.4;
    }

    a {
      opacity: 0;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        opacity: 0.4;
      }
    }
  }
  h1 {
    font-weight: 500;
    font-size: 30px;
  }
  h2 {
    font-size: 28px;
  }
  h3 {
    font-size: 22px;
  }

  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    margin: 14px 0;
  }

  .tip,
  .warning,
  .error,
  .success {
    background-color: #f3f5f7;
    padding: 0.1rem 1.5rem;
    border-left-width: 0.5rem;
    border-left-style: solid;
    margin: 1rem 0;

    code {
      background-color: rgba(255, 255, 255, 0.7);
      color: #445368;
    }
  }
  .tip {
    border-color: $color-info;
  }
  .warning {
    border-color: $color-warning;
  }
  .error {
    border-color: $color-error;
  }
  .success {
    border-color: $color-success;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;

    strong {
      font-weight: normal;
    }

    td,
    th {
      border-bottom: 1px solid $color-border;
      padding: 15px;
      max-width: 250px;
    }

    th {
      text-align: left;
      white-space: nowrap;
      color: #909399;
      font-weight: normal;
    }

    td {
      color: #606266;
    }

    th:first-child,
    td:first-child {
      padding-left: 10px;
    }
  }

  ul:not(.timeline) {
    margin: 10px 0;
    padding: 0 0 0 20px;
    font-size: 14px;
    color: #5e6d82;
    line-height: 2em;
  }
}

.table-of-contents {
  @include depth(4);
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 2;
  background: white;
  border: solid 1px $color-border;
  max-height: 600px;
  overflow: auto;
  width: 200px;

  a {
    text-decoration: none;
    color: $color-text-secondary;

    &:hover,
    &.active {
      color: $color-text-primary;
    }
  }

  & > ul {
    padding: 12px;
    margin: 0;
    list-style: none;

    & > li > ul {
      //padding: 0 !important;
      list-style: none;
    }
  }
}
</style>
