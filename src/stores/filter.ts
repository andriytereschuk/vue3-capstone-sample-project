import { reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { defineStore } from 'pinia'
import type { IFilter } from '@/types'
import type { LocationQuery } from 'vue-router'
import { updateRouteQuery } from '@/router'

export const useFilterStore = defineStore('filter', () => {
  const { query } = useRoute()
  const { name = '', specie = '' } = query
  const current = reactive<IFilter | LocationQuery>({
    name,
    specie
  })

  const onFilterUpdate = () => {
    updateRouteQuery(current)
    console.log('onFilterUpdate', current)
  }

  watch(current, onFilterUpdate)

  return { current, onFilterUpdate }
})
