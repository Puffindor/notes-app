<template>
  <auth-view
    v-if="!isAuth || !hasToken"
  />
  <notes-view
    v-else
  />
</template>

<script lang="ts">
import { useAuthStore } from './store/AuthStore';
import { useNotesStore } from './store/NotesStore';
import {defineComponent} from 'vue'
import AuthView from './views/AuthView.vue';
import NotesView from './views/NotesView.vue';

export default defineComponent({
  name: 'App',
  components: {AuthView,NotesView},
  setup() {
    const authStore = useAuthStore()
    const notesStore = useNotesStore()
    return {
      authStore,
      notesStore,
    }
  },
 async mounted(): Promise<void> {
    await this.authStore.autoLogin()
  },
  computed: {
    isAuth(): boolean {
      return this.authStore.isAuth
    },
    hasToken(): string | null {
      return this.authStore.getToken
    }
  }
})
</script>
<style lang="scss">
  @import './assets';
</style>
