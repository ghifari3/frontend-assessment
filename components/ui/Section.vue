<template>
  <div class="section">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.section {
  width: 100%;
  padding-right: calc((100vw - 1300px)/2);
  padding-left: calc((100vw - 1300px)/2);
}

@media only screen and (max-width: 90rem) {
  .section {
    padding-right: 1rem;
    padding-left: 1rem;
  }
}
</style>
