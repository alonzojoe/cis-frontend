<template>
    <div class="card border border-primary position-relative">
        <span class="card-legend bg-primary text-white fw-bold rounded px-3 py-2">{{ title }}</span>
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Titled Card',
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    setup() {


        return {}
    }
})
</script>

<style scoped>
.card-legend {
    position: absolute;
    top: -18px;
    left: 15px;
}
</style>