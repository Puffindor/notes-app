<template>
  <div class="base-input">
    <label>
      {{ label  }}
    </label>
    <div class="input"> 
      <input
        :placeholder="placeholder"
        :type="isShowPassword ? 'text' :type"
        :value="value"
        @input="this.$emit('update:modelValue', $event.target.value)"
      />
      <svg
        v-if="type === 'password'" 
        @click="showPassword"
        xmlns="http://www.w3.org/2000/svg" 
        width="18" height="14" viewBox="0 0 18 14" 
        fill="none"
      >
        <path d="M17 7C17 8.15478 16.2206 9.64926 14.7228 10.9006C13.2537 12.128 11.2258 13 9 13C6.77424 13 4.7463 12.128 3.27718 10.9006C1.77936 9.64926 1 8.15478 1 7C1 5.84522 1.77936 4.35074 3.27718 3.09941C4.7463 1.87204 6.77424 1 9 1C11.2258 1 13.2537 1.87204 14.7228 3.09941C16.2206 4.35074 17 5.84522 17 7Z" stroke="#B1C909" stroke-width="2"/>
        <circle cx="9" cy="7" r="3" stroke="#B1C909" stroke-width="2"/>
      </svg>
    </div>
    <div
      v-if="isShowMaxCount" 
      :class="{hasError: isLimitExceeded}"
      class="length"
    >
      <span 
        v-if="isLimitExceeded"  
        class="error"
      >
        Превышен лимит символов
      </span>
      <span>
        {{ value?.length || 0 }}/64
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "baseInput",
  props: {
    isShowMaxCount: {
      type: Boolean,
      default: () => false
    },
    value: {
      type: String,
      default: () => null
    },
    label: {
      type: String,
      default: () => null
    },
    placeholder: {
      type: String,
      default: () => null
    },
    type: {
      type: String,
      default: () => 'text'
    }
  },
  data() {
    return {
      isShowPassword: false as boolean
    }
  },
  methods: {
    showPassword(): void {
      this.isShowPassword = !this.isShowPassword
    }
  },
  computed: {
    isLimitExceeded(): boolean {
      return this.value?.length > 64
    }
  }
})
</script>
<style scoped>
</style>