<template>
  <Teleport to="body">
    <div class="modal-out">
      <div class="modal-in">
        <div class="modal-button-container">
          <base-button 
            @click="close"
            class="_close _icon-only"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1L17 17M17 1L1 17" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </base-button>
        </div>
        <slot/>
        <div
          v-if="error && error.hasError" 
          class="modal-error" 
        >
          {{  error.message  }}
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { useErrorStore } from '@/store/ErrorStore';
import { ErrorObject } from '@/types/error';
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'BaseModal',
  emits: ['close'],
  setup() {
   const errorStore = useErrorStore()
    return {
      errorStore
    }
  },
  methods: {
    close(): void {
      this.$emit('close')
    }
  },
  computed: {
    error(): ErrorObject {
      return this.errorStore.getError
    }
  }
})
</script>