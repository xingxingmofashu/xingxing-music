<template>
    <div class="notification"><span class="notification-number">{{ num }}</span> <svg viewBox="0 0 24 24"
            fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-bell">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"></path>
        </svg></div>
</template>
<script lang="ts" setup>
defineProps<{
    num: number
}>()
</script>
<style scoped lang="scss">
.notification {
    position: relative;

    .notification-number {
        position: absolute;
        background-color: #3a6df0;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        right: -6px;
        top: -6px;
    }
}
.notification+svg {
    margin-left: 22px;
}
</style>