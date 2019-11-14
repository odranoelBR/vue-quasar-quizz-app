<template>
  <q-layout
    view="lHh Lpr lFf"
    class="bg-info"
  >
    <div>
      <q-page-container>
        <transition
          appear
          :duration="{ enter: 300, leave: 300 }"
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <router-view />
        </transition>
      </q-page-container>
    </div>
  </q-layout>
</template>
