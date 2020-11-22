<template>
  <div class="h-100 w-full flex items-center justify-center bg-cyan-50">
    <div class="bg-white rounded shadow p-6 m-4 w-full">
      <div class="mb-4">
        <h1 class="text-2xl">งาน</h1>
        <div class="flex mt-4">
          <input
            type="text"
            v-model="newNotes.text"
            @keyup.enter="saveNote"
            class="m-2 focus:ring-cyan-500 focus:border-cyan-500 block w-full border-cyan-300 rounded-md sm:text-sm"
            placeholder="งานใหม่"
          />
          <input
            type="checkbox"
            v-model="newNotes.completed"
            class="text-cyan-500 mt-3 rounded focus:border-cyan-500 focus:ring-cyan-500 border-cyan-300 h-8 w-8"
          />
          <button
            :disabled="newNotes.text.length < 1"
            @click="saveNote()"
            class="btn ml-2"
            :class="newNotes.text.length > 1 ? 'btn-info' : 'border border-gray-200'"
          >
            เพิ่ม
          </button>
        </div>
      </div>
      <div>
        <nav class="bg-gray-50">
          <div class="w-full my-2 pr-3 pb-2">
            <div class="flex">
              <div class="ml-2">
                <button @click="fetchNotes()" class="focus:border-0 mt-3 text-cyan-500 group-hover:text-cyan-800 focus:ring-0">
                  <span>
                    <svg class="h-6 w-6 focus:border-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div class="flex-1"></div>
              <div class="flex-shrink">
                <label class="mx-1">
                  <input
                    type="checkbox"
                    v-model="showCompleted"
                    class="text-cyan-500 rounded focus:border-cyan-500 focus:ring-cyan-500 border-cyan-300 h-6 w-6"
                  />
                  แสดงงานทั้งหมด
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div v-if="notes.length > 0">
        <div class="flex mb-4 items-center" v-for="note in notes" :key="note.id">
          <p class="w-full text-md" :class="note.completed ? 'line-through text-gray-400' : ''">{{ note.text }}</p>
          <input
            type="checkbox"
            v-model="note.completed"
            @click="updateNote({ id: note.id, completed: !note.completed })"
            class="text-cyan-500 mt-0 rounded focus:border-cyan-500 focus:ring-cyan-500 border-cyan-300 h-9 w-9"
          />
          <button @click="deleteNote({ id: note.id })">
            <span class="flex items-center pl-3">
              <svg
                class="h-9 w-9 text-red-500 group-hover:text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div v-else>ไม่มีงาน</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, onMounted, watch } from 'vue'
  import axios from 'axios'
  import { Note, NoteUp, NoteIn, NoteDl } from '@/types/Notes.ts'

  export default defineComponent({
    name: 'Notes',
    setup() {
      const notes = ref<Note[]>([])
      const newNotes = reactive<NoteIn>({ text: '', completed: false })
      const showCompleted = ref(false)

      const fetchNotes = () => {
        axios.get(`/api/notes/?showCompleted=${showCompleted.value}`).then((res) => {
          notes.value = res.data
        })
      }

      const saveNote = () => {
        if (newNotes.text.length > 0) {
          axios.post('/api/notes/', newNotes).then((res) => {
            console.log(res.data)
            newNotes.text = ''
            newNotes.completed = false
            fetchNotes()
          })
        }
      }

      const updateNote = (note: NoteUp) => {
        axios.put('/api/notes/', note).then((res) => {
          console.log(res.data)
          fetchNotes()
        })
      }

      const deleteNote = (id: NoteDl) => {
        axios.delete('/api/notes/', { data: id }).then((res) => {
          console.log(res.data)
          fetchNotes()
        })
      }
      onMounted(() => {
        fetchNotes()
      })

      watch(showCompleted, () => {
        fetchNotes()
      })
      return {
        notes,
        fetchNotes,
        newNotes,
        saveNote,
        updateNote,
        deleteNote,
        showCompleted
      }
    }
  })
</script>

<style></style>
