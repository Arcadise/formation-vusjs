<script setup lang="ts">
import type {FontAwesomeIconProps} from '@fortawesome/vue-fontawesome'
import {ref} from 'vue'

const isLoading = ref(false)

const props = defineProps<{
  title?: string
  icon: FontAwesomeIconProps['icon']
  action: () => Promise<void>
}>()

const emit = defineEmits<{
  (e: 'error', message: string): void
  (e: 'start'): void
}>()

const handleAction = async () => {
  try {
    emit('start')
    isLoading.value = true
    await props.action()
  } catch (err) {
    if (err instanceof Error) {
      emit('error', err.message)
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <button :title="props.title" @click.prevent="handleAction()" :disabled="isLoading">
    <FaIcon :icon="isLoading ? 'fa-circle-notch' : props.icon" :spin="isLoading"/>
    <slot></slot>
  </button>
</template>
