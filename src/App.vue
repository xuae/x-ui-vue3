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
  padding-right: 220px;
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
    color: $color-text-primary;
    line-height: 1.5em;
    margin: 14px 0;
  }

  ul:not(.timeline) {
    margin: 10px 0;
    padding: 0 0 0 20px;
    font-size: 14px;
    color: #5e6d82;
    line-height: 2em;
  }

  code:not([class*='language-']) {
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    background: map-get($color-grey, 200);
    color: $color-text-primary;
    border: 1px solid map-get($color-grey, 300);
    margin: 0 4px;
    display: inline-block;
    padding: 0 4px;
    font-size: 0.9em;
    border-radius: 2px;
    line-height: 22px;
    height: 22px;
  }

  .tip,
  .warning,
  .error,
  .success {
    background-color: map-get($color-grey, 100);
    padding: 0.1rem 1.5rem;
    border-left-width: 0.5rem;
    border-left-style: solid;
    margin: 1rem 0;

    code {
      background-color: rgba(255, 255, 255, 0.7);
      color: #445368;
    }

    em {
      font-style: normal;
      color: map-get($color-red, 900);
    }

    & > p {
      &:first-of-type {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
  .tip {
    border-color: map-get($color-blue, 700);
    //background-color: map-get($color-blue, 100);
    p:first-of-type {
      color: map-get($color-blue, 900);
    }
  }
  .warning {
    border-color: map-get($color-amber, 700);
    //background-color: map-get($color-amber, 100);
    p:first-of-type {
      color: map-get($color-amber, 900);
    }
  }
  .error {
    border-color: map-get($color-red, 700);
    //background-color: map-get($color-red, 100);
    p:first-of-type {
      color: map-get($color-red, 900);
    }
  }
  .success {
    border-color: map-get($color-green, 700);
    //background-color: map-get($color-green, 100);
    p:first-of-type {
      color: map-get($color-green, 900);
    }
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

    em {
      font-style: normal;
      color: map-get($color-red, 900);
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

  // 右侧目录
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

  // 图标列表
  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0 !important;

    li {
      float: left;
      width: 98px;
      height: 120px;
      padding: 15px 8px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      color: map-get($color-grey, 800);
      &:hover {
        background: map-get($color-grey, 200);
      }

      .x-icon {
        font-size: 36px;
        color: map-get($color-grey, 800);
      }

      .icon-caption {
        display: block;
        font-size: 12px;
        margin-top: 8px;
        word-break: break-all;
        line-height: 1.3;
      }
    }
  }
}
</style>
