<script setup lang="ts">
  import { ref } from 'vue'
  import { spicies } from '@/constants'
  import { useFilterStore } from '@/stores/filter'

  const spiciesTypes = ref(spicies)
  const filterStore = useFilterStore()
</script>

<template>
  <section class="bg-gray-200 py-4">
    <div class="container mx-auto flex">
      <div class="spicies-filter flex">
        <div
          class="radio-item"
          v-for="spiciesType in spiciesTypes"
          :key="spiciesType.name"
          :class="{ active: spiciesType.key === filterStore.current.specie }"
        >
          <input
            type="radio"
            class="radio-input"
            :id="spiciesType.name"
            name="filter"
            :value="spiciesType.key"
            v-model="filterStore.current.specie"
          />
          <label :for="spiciesType.name">{{ spiciesType.name }}</label>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .radio-input {
    opacity: 0;
    position: absolute;
  }

  .radio-item {
    position: relative;
    border: 1px solid #000;
    border-left: none;
  }

  .radio-item:first-child {
    border: 1px solid #000;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .radio-item:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .radio-item label {
    display: block;
    padding: 6px 10px;
    cursor: pointer;
  }

  .active {
    background-color: #000;
    color: #fff;
  }

  .active label {
    cursor: default;
  }
</style>
