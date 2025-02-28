import { ErrorBody, ErrorObject } from '@/types/error'
import { defineStore } from 'pinia'

export const useErrorStore = defineStore('errorStore', {
  state: () => ({
    error: {
      hasError: false as boolean,
      message: null as string | null,
    } as ErrorObject
  }),
  getters: {
    getError(state): ErrorObject {
      return state.error
    }
  },
  actions: {
    clearError(): void {
      this.error.hasError = false
      this.error.message = null
    },
    checkError(error: ErrorBody): void {
      this.error.hasError = true
      if (Array.isArray(error.message)) {
        this.error.message = error.message[0]
      } else {
        this.error.message = error.message
      }
    }
  }
})