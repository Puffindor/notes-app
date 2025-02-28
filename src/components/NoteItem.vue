<template> 
  <div class="note-item">
    <div class="note-title-container">
      <h4>
        {{ note.title }}
      </h4>
    </div>
    <p>
      {{ note.content }}
    </p>
    <div class="note-button">
      <base-button class="_flat">
      <div class="note-delete">
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
          <path d="M1.66699 1L17.667 17M17.667 1L1.66699 17" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span
          @click="deleteNote"
        >
          удалить
        </span>
      </div>
      </base-button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import BaseButton from './BaseButton.vue'
import { Note } from '@/types/notes';

export default defineComponent({
  name:"NoteItem",
  components: { BaseButton },
  emits: ['delete'],
  props: {
    note: {
      type: Object as PropType<Note>,
      required: true
    }
  },
  methods: {
    deleteNote():void {
      this.$emit("delete", this.note.id)
    }
  }
  
})
</script>