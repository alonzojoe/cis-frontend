<template>
    <div v-show="details.show" class="cst-modal2">
        <div class="cst-modal-body2 bg-white rounded position-relative">
            <span class="position-absolute cst-close" @click.prevent="$emit('close-modal')"
                style="font-size:20px;right:0;top:-4px;right:5px"><i class="fa fa-times" aria-hidden="true"></i></span>
            <div class="position-relative border border-primary p-2 m-2 mt-4">
                <div class="position-absolute bg-primary text-white px-2" style="top:-13px; left:5px;">
                    {{ details.title }}
                </div>
                <!-- {{patient}} -->
                <div>
                    <slot>
                        <h1>Modal Content</h1>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Modalmd',
    props: {
        details: Object
    },
    setup(props) {


        return {}
    }
})
</script>

<style scoped>
.cst-modal2 {
    position: fixed;
    background-color: rgb(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

}



.cst-modal {
    position: fixed;
    background-color: rgb(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 100000;
    display: flex;
    justify-content: center;
    align-items: center;

}

.cst-modal-body {
    width: 80vw;
    border-top: 10px solid #0275d8;
    border-bottom: 10px solid #0275d8;
    animation: openModal .5s ease-in forwards;
    overflow: auto;
    max-height: 100vh;
}

.cst-modal-body2 {
    width: 70vw;
    height: fit-content;
    border-top: 10px solid #5D87FF;
    border-bottom: 10px solid #5D87FF;
    animation: openModal .5s ease-in forwards;
    overflow: auto;
    max-height: 100vh;
}

.cst-modal-body3 {
    width: 95vw;
    height: fit-content;
    border-top: 10px solid #0275d8;
    border-bottom: 10px solid #0275d8;
    animation: openModal .5s ease-in forwards;
    overflow: auto;
    max-height: 100vh;
}

.cst-close:hover {
    color: #d9534fed;
    cursor: pointer;
    transition: 1s;
    transform: scale(1.1);
}

.cst-icon {
    font-size: larger;
    color: #0275d8;
    transform: scale(1.5);

}

.cst-icon:hover {
    transform: scale(1.8);
    cursor: pointer;
    transition: 1s;

}

.borderblue {
    border-top: 5px solid #0275d8;
    border-bottom: 5px solid #0275d8;

}

@keyframes zoom {
    0% {}

    100% {
        transform: scale(1.3);
    }
}

@keyframes openModal {
    0% {
        opacity: 0;
        transform: translate(0, -10px);
    }

    100% {
        opacity: 1;

    }
}

.ianimate i {
    animation: warningicon 2s ease-in infinite;

}

@keyframes warningicon {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(0deg);
    }

    80% {
        transform: rotate(-10deg);
    }

    85% {
        transform: rotate(10deg);
    }

    100% {
        transform: rotate(0deg);
    }


}


.cst-btn-top {
    border-radius: 5px 5px 0 0;
    border: none;
    color: white;

}

.cst-btn-top:hover {
    background-color: #00539b;
    color: white;


}

.cst-btn-top-active {
    background-color: #013e74;
    transform: scale(1.02);

}

.choices {
    border: none;
    background-color: transparent;
}

.choices:hover {
    cursor: pointer;
    animation: grow 0.5s forwards;
    border: none;
}

.choices:disabled {
    color: red;
    animation: none;
}

@keyframes grow {
    to {
        transform: scale(1.2);
    }
}

.cst-table tbody tr:hover {
    background-color: #0274d810;
}

.cst-table thead th,
.cst-table tbody td {
    padding-top: 3px;
    padding-bottom: 3px;
    font-weight: normal;
}

.cst-link-page {
    cursor: pointer;
    padding: 0 3px 0 3px;
}

.cst-link-page:hover {
    text-decoration: underline;
}

.cst-button {
    border: none;
    color: gray;

}

.cst-button:disabled {

    background-color: rgb(250, 250, 250);

}

.cst-button:nth-child(1) {
    border-radius: 5px 0 0 5px;
}

.cst-button:last-child {
    border-radius: 0 5px 5px 0;

}

.mawawala {
    opacity: 0;
    transition: 1s;
}

.cst-modalnaloader {
    animation: changeopacity 2s ease-in infinite;
}

@keyframes changeopacity {
    0% {
        background-color: #d9d9d9a8;
    }

    50% {
        background-color: #ffffffa8;
    }

    100% {
        background-color: #d9d9d9a8;
    }


}

.swal2-shown {
    padding: 0 !important;
}
</style>