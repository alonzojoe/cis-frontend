<template>
    <div class="card mb-4 border border-primary position-relative">
        <span class="card-legend bg-primary text-white fw-bold rounded px-3 py-2">Card Title</span>
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Titled Card',
    setup() {


        return {}
    }
})
</script>

<style scoped>
.card-legend {
    position: absolute;
    top: -17px;
    left: 15px;
}
</style>