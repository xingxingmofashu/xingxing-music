<template>
    <div class="content-wrapper">
        <HomeWrapper />
        <ElRow>
            <ElCol>
                <div class="content-section-title">最新歌曲</div>
                <HomeSongList />
            </ElCol>
        </ElRow>
        <ElRow style="margin-top: 40px;">
            <ElCol>
                <div class="content-section-title">热门歌单</div>
                <HomePlayList />
            </ElCol>
        </ElRow>
    </div>
</template>
<style scoped lang="scss">
.content-wrapper {
    display: flex;
    flex-direction: column;
    color: var(--theme-color);
    padding: 10px 20px 10px 20px;
    height: 100%;
    overflow: auto;
    background-color: var(--theme-bg-color);

    .content-section-title {
        color: var(--content-title-color);
        margin-bottom: 10px;
        margin-top: 10px;
    }
}
</style>