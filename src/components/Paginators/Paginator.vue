<template>
    <div class="w-100">
        <div class="m-0 p-3 d-flex justify-content-between align-items-center" id="card-body">
            <div>Total Records: {{ data.totalRecords }}</div>
            <div>
                Page <span>{{ data.currentPage }} of {{ data.totalPages }}</span>
            </div>

            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item" :class="{ disabled: data.currentPage == 1 }">
                        <a href="#" @click.prevent="goToPage(1)"
                            class="page-link btn waves-effect waves-light btn-outline-primary rounded"
                            style="border-radius: 0px">
                            <span class="fa fa-angle-double-left"></span>
                        </a>
                    </li>
                    <li class="page-item" :class="{ disabled: data.currentPage == 1 }">
                        <a class="page-link" href="#" @click.prevent="prevPage()" tabindex="-1"
                            aria-disabled="true">Previous</a>
                    </li>
                    <li v-for="page in pages" :key="page" class="page-item" :class="{ active: page == data.currentPage }">
                        <a class="page-link" href="#" @click.prevent="goToPage(page)">{{
                            page
                        }}</a>
                    </li>
                    <li class="page-item" :class="{ disabled: data.currentPage == data.totalPages }">
                        <a class="page-link" href="#" @click.prevent="nextPage()">Next</a>
                    </li>
                    <li class="page-item" :class="{ disabled: data.currentPage == data.totalPages }">
                        <a href="#" @click.prevent="goToPage(data.totalPages)"
                            class="page-link btn waves-effect waves-light btn-outline-primary rounded"
                            style="border-radius: 0px">
                            <span class="fa fa-angle-double-right"></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, computed, ref, watch, watchEffect } from "vue";

export default defineComponent({
    name: "Pagination",
    props: {
        data: {
            type: Object,
            required: true,
            default: () => ({
                totalRecords: 0,
                totalPages: 0,
                perPage: 10,
                currentPage: 1,
            }),
        },
    },
    setup(props, { emit }) {
        const totalPages = computed(() =>
            Math.ceil(props.data.totalRecords / props.data.perPage)
        );

        const pages = computed(() => {
            const startPage = Math.max(1, props.data.currentPage - 2);
            const lastPage = Math.min(totalPages.value, startPage + 4);

            const pageNumbers = [];

            for (let i = startPage; i <= lastPage; i++) {
                pageNumbers.push(i);
            }

            return pageNumbers;
        });

        const prevPage = () => {
            if (props.data.currentPage > 1) {
                emit("update:currentPage", props.data.currentPage - 1);
            }
        };

        const nextPage = () => {
            if (props.data.currentPage < totalPages.value) {
                emit("update:currentPage", props.data.currentPage + 1);
            }
        };

        const goToPage = (page) => {
            if (page !== props.data.currentPage) {
                emit("update:currentPage", page);
            }
        };

        return {
            totalPages,
            pages,
            prevPage,
            nextPage,
            goToPage,
        };
    },
});
</script>
  
<style scoped>
.disabled {
    cursor: not-allowed;
}

@media (max-width: 650px) {
    #card-body {
        flex-direction: column;
        gap: 1rem;
    }
}
</style>