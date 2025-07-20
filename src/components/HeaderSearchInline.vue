<template>
  <div class="header-search-inline">
    <div class="dropdown" :class="{ open: input && villas.length }">
      <form class="form-inline" @submit.prevent>
        <input
          id="header-search-input"
          v-model="input"
          class="form-control"
          :placeholder="t('home.search')"
          autocomplete="off"
          spellcheck="false"
          type="text"
          @keydown.down.prevent="setActive(1)"
          @keydown.up.prevent="setActive(-1)"
          @keydown.esc.prevent="clear"
          @keydown.enter.prevent="followActive"
        />
        <i class="fa fa-search" />
      </form>
      <ul class="dropdown-menu" id="search-result" v-if="villas.length">
        <li
          v-for="(v, idx) in villas"
          :key="v.refIndex"
          :class="{ active: idx === activeIndex }"
          @mouseenter="activeIndex = idx"
        >
          <a :href="v.item.path">{{ v.item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { debounce } from 'lodash'
import { useFuseSearch } from './useFuseSearch'
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
// State
const input = ref('')
const villas = ref([])
const activeIndex = ref(0)

// Fuzzy search engine
const { search } = useFuseSearch()

// Methods
const clear = () => {
  input.value = ''
  villas.value = []
}

const setActive = (dir) => {
  if (!villas.value.length) return
  activeIndex.value = (activeIndex.value + dir + villas.value.length) % villas.value.length
}

const followActive = () => {
  if (villas.value[activeIndex.value]) {
    window.location.href = villas.value[activeIndex.value].item.path
  }
}

const fetchSearchResults = debounce(async () => {
  const query = input.value.trim()
  if (!query) {
    villas.value = []
    return
  }
  villas.value = await search(query)
}, 250)

watch(input, fetchSearchResults)
</script>

<style>
form {
  position: relative;
}
input {
  display: inline;
  padding-right: 3em;
}
input ~ i {
  position: absolute;
  right: 1em;
  line-height: 32px;
  top: 0;
}
#search-result {
  position:absolute;
  margin-top:10px;
  background: rgba(255,255,255,.3);
  border-radius: 10px;
  padding: 10px;
}
#search-result li::marker {
  content: '';
  display: none
}
</style>
