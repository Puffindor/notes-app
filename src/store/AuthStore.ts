import { defineStore } from 'pinia'
import { REG, AUTH } from '@/api/urls'
import { User } from '@/types/user'
import { useErrorStore } from './ErrorStore'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    token: null as string | null,
    email: null as string | null,
    isUserAuth: false as boolean
  }),
  getters: {
    getEmail(state): string | null {
      return state.email
    },
    isAuth(state): boolean {
      return state.isUserAuth
    },
    getToken(state): string | null {
      return state.token
    }
  },
  actions: {
    setToken(token: string):  void {
      this.token = token
      localStorage.setItem('token', token)
    },
    async autoLogin(): Promise<void> {
      const errorStore = useErrorStore()
      if (!localStorage.getItem('token')) return
       await fetch(AUTH, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          },
          method: 'GET'
        }) 
        .then(response => response.json())
        .then(data => {
          if (data.statusCode) {
            errorStore.checkError(data)
            return
          }
          this.token = localStorage.getItem('token')
          this.email = data.email
          this.isUserAuth = true
        })
    },
    async logout(): Promise<void> {
      return await fetch(AUTH, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        method: "DELETE"
      }).then(() => {
        this.isUserAuth = false
        this.token = null
        this.email = null
        localStorage.removeItem('token')
      })
    },
    async register(payload: User): Promise<void> {
      const errorStore = useErrorStore()
      await fetch(REG, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
          if (data.statusCode) {
            errorStore.checkError(data)
            return
          }
          this.auth(payload)
        })
      },
    async auth(payload: User): Promise<void> {
      const errorStore = useErrorStore()
      try {
       return await fetch(AUTH, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
          if (data.statusCode) {
            errorStore.checkError(data)
            return
          }
          this.setToken(data.accessToken)
          this.isUserAuth = true
          this.email = payload.email
          errorStore.clearError()
        })
      } catch (e: any) {
        errorStore.checkError(e)
      }
    },
  }
})