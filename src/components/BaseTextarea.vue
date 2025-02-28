<template>
  <div class="base-textarea">
    <label>
      {{ label }}
    </label>
    <textarea
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div 
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
        {{ value?.length || 0 }}/255
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name:'BaseTextarea',
  props: {
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
    }
  },
  computed: {
    isLimitExceeded(): boolean {
      return this.value?.length > 255
    }
  }
})
</script>
<style scoped>
</style>