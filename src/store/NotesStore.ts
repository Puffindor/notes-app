import { NOTES } from '@/api/urls'
import { Note } from '@/types/notes'
import { defineStore } from 'pinia'
import { useAuthStore } from './AuthStore'
import { useErrorStore } from './ErrorStore'

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    notes: [] as Note[]
  }),
  getters: {
    getNotes (state): Note[] {
      return state.notes
    }
  },
  actions: {
  async fetchNotes () {
    const authStore = useAuthStore()
    const errorStore = useErrorStore()
    await fetch(NOTES, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authStore.getToken}`,
      },
      method: "GET",
    })
    .then(response => response.json())
    .then(data => {
      if (data.statusCode) {
        errorStore.checkError(data)
        return
      }
      this.notes = data
    })
  }, 
  async addNote (note: Note): Promise<void> {
    try {
      const authStore = useAuthStore()
      await fetch(NOTES, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authStore.getToken}`,
        },
        method: "POST",
        body: JSON.stringify(note)
      })
      .then(response => response.json())
      .then(data => {
        if (data.statusCode) {
          alert(data.message)
          return
        }
        this.fetchNotes()
      }).catch(e => alert(e))
    } catch (e) {
      alert(e)
    }
  },
  async deleteNote (id: number): Promise<void> {
    const authStore = useAuthStore()
    await fetch(NOTES + `/${id}`, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authStore.getToken}`,
      },
      method: "DELETE",
    }).then(response => {
     if (response.status !== 200) alert('Ошибка при запросе')
    }) 
    this.fetchNotes()
  }
  }
})