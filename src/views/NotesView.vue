<template>
  <the-header/>
  <main class="notes-view">
    <base-modal
      v-if="addModalIsOpen"
      @close="toggleAddModal(false)"
    >
      <div class="add-modal">
        <h2>Добавление заметки</h2>
        <base-input
          :isShowMaxCount="true"
          :value="newNote.title"
          @update:modelValue="$event => (newNote.title = $event)"
          class="title-input"
          label="Название заметки"
          placeholder="Введите Название"
        />
        <base-textarea
          :value="newNote.content"
          @update:modelValue="$event => (newNote.content = $event)"
          class="add-textarea"
          label="Название заметки"
          placeholder="Введите Название"
        />
        <div class="add-button">
          <base-button
            @click="addNote"
            :disabled="addIsDisabled"
          >
            Добавить
          </base-button>
        </div>
      </div>
    </base-modal>
    <div class="add-button">
      <base-button
        @click="toggleAddModal(true)"
        class="_close _icon-only"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M1 9H17M9 1L9 17" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
      </base-button>  
    </div>
    <ul class="notes-list">
      <li
        v-for="note in notes" 
        :key="note.id"
      >
        <note-item
          :note="note"
          @delete="deleteNote"
        />
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import NoteItem from '@/components/NoteItem.vue';
import BaseModal from '@/components/BaseModal.vue';
import BaseTextarea from '@/components/BaseTextarea.vue'
import BaseInput from '@/components/BaseInput.vue';
import { useNotesStore } from '@/store/NotesStore';
import {defineComponent} from 'vue'
import { Note } from '@/types/notes';

export default defineComponent({
  name: 'NotesView',
  components: { TheHeader, NoteItem, BaseModal, BaseTextarea, BaseInput},
  setup() {
    const notesStore = useNotesStore()
    return {
      notesStore
    }
  },
  data() {
    return {
      newNote: {
        title: null,
        content: null,
      } as Note,
      addModalIsOpen: false as boolean,
    }
  },
  methods: {
    toggleAddModal(state: boolean): void {
      this.addModalIsOpen = state
      if (!state) this.clearNoteDraft()
    },
    async addNote(): Promise<void> {
      await this.notesStore.addNote(this.newNote)
      this.toggleAddModal(false)
    },
    async deleteNote(id: number): Promise<void> {
      await this.notesStore.deleteNote(id)
    },
    clearNoteDraft() {
      for (let el in this.newNote) {
        this.newNote[el as keyof Note] = null
      }
    }
  },
  computed: {
    notes(): Note[] {
      return this.notesStore.getNotes
    },
    addIsDisabled(): boolean {
      return (!this.newNote.title || !this.newNote.content) 
        || (this.newNote.title?.length > 64 || this.newNote.content?.length > 255) 
    }
  },
 async mounted(): Promise<void> {
    this.notesStore.fetchNotes()
  }
})
</script>
<style scoped>
</style>