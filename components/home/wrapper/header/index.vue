<template>
    <div class="content-wrapper-header-padding">
        <div class="content-wrapper-context">
            <h3 class="img-content">境界的彼方</h3>
            <div class="content-text">
                《境界的彼方》是由鸟居奈古梦著作、鸭居知世插画的轻小说，于2012年6月9日，由KAESUMA文库文库（京都动画）发行。小说曾获得第2回京都动画大赏（小说部门）奖励赏。
            </div>
            <button class="content-button">
                <NuxtLink class="content-button" :to="{
                    path: '/search-song',
                    query: { keyworks: '境界的彼方' },
                }">试听专辑
                </NuxtLink>
            </button>
        </div>
    </div>
    <img class="content-wrapper-img" src="../../../../assets/lishan-future.png" alt="" />
</template>
<style scoped lang="scss">
.content-button {
    background-color: #3a6df0;
    border: none;
    padding: 8px 26px;
    color: #fff;
    border-radius: 20px;
    margin-top: 16px;
    cursor: pointer;
    transition: 0.3s;
    white-space: nowrap;
    text-decoration: none;
}
.content-wrapper-header-padding {
    padding: 20px 40px;

    .content-wrapper-context {
        max-width: 500px;

        .content-text {
            font-weight: 400;
            font-size: 14px;
            margin-top: 16px;
            line-height: 1.7em;
            color: #ebecec;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .img-content {
            font-weight: 500;
            font-size: 17px;
            display: flex;
            align-items: center;
            margin: 0;

            svg {
                width: 28px;
                margin-right: 14px;
            }
        }
    }
}
.content-wrapper-img {
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}
</style>