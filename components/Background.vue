<template>
    <div class="video-bg" style="-webkit-app-region: drag;">
        <video width="100%" height="100%" autoplay loop muted>
            <source src="../assets/7btrrd.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>
<style scoped lang="scss">
.video-bg {
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;

    video {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }
}
</style>