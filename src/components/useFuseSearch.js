import { ref } from 'vue'
import Fuse from 'fuse.js'

const villasData = ref(null)
let fuseInstance = null

export function useFuseSearch(sourceURL = '${process.env.VILLA_API_BASE_URL}/api/villas/prefetch.json') {
  const fetchVillas = async () => {
    if (!villasData.value) {
      const res = await fetch(sourceURL)
      villasData.value = await res.json()
    }
    return villasData.value
  }

  const initFuse = async () => {
    const data = await fetchVillas()
    if (!fuseInstance) {
      fuseInstance = new Fuse(data, {
        keys: ['name'],
        findAllMatches: true,
        minMatchCharLength: 2,
      })
    }
    return fuseInstance
  }

  const search = async (query) => {
    const engine = await initFuse()
    return engine.search(query).slice(0, 10)
  }

  return { search }
}
