<template>
  <div class="container mx-auto text-center">
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="@/assets/logo.png" alt="VueJs" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link
                  v-for="menu in menus"
                  :to="menu"
                  class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  active-class="bg-gray-700"
                  :key="menu.name"
                >
                  {{ menu.name }}
                </router-link>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              @click="menuToggle = !menuToggle"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                :class="[menuToggle ? 'hidden' : 'block', 'h-6 w-6']"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                :class="[menuToggle ? 'block' : 'hidden', 'h-6 w-6']"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div :class="[menuToggle ? '' : 'hidden', 'md:hidden']">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
            v-for="menu in menus"
            :to="menu"
            class="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            active-class="bg-gray-700"
            :key="menu.name"
          >
            {{ menu.name }}
          </router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
  <Dialog />
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import Dialog from '@/components/Dialog.vue'

  export default defineComponent({
    name: 'App',
    components: { Dialog },
    setup() {
      const menus = [{ name: 'Home' }, { name: 'About' }, { name: 'Notes' }]

      return {
        menus,
        menuToggle: ref(false)
      }
    }
  })
</script>
