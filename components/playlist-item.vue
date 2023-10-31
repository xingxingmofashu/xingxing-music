<template>
    <ElRow>
        <ElCol>
            <ElImage class="song-list-img app-card" :src="coverImgUrl"></ElImage>
        </ElCol>
    </ElRow>
    <ElRow>
        <ElCol :offset="2">
            <ElText :truncated="true" class="text">
                {{ name }}
            </ElText>
        </ElCol>
    </ElRow>
</template>
<script lang="ts" setup>
defineProps<{
    coverImgUrl: string,
    name: string
}>();
</script>
<style scoped>
.text {
    color: white;
    font-size: 13px;
}

.song-list-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    margin: 0 10px;
    cursor: pointer;
}
</style>