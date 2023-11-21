<template>
    <div class="header app-drag">
        <ElRow>
            <ElCol :span="4">
                <div class="header-menu ">
                    <h2 class="logo">
                        <NuxtLink to="/" class="app-no-drag">网易云音乐</NuxtLink>
                    </h2>
                </div>
            </ElCol>
            <ElCol :span="4">
                <ElRow class="header-menu-item" :align="'middle'">
                    <ElCol :span="8">
                        <IconArrowLeft class="app-no-drag pointer" @click="$router.back();" />
                    </ElCol>
                    <ElCol :span="8">
                        <IconArrowRight class="app-no-drag pointer" @click="$router.go(1);" />
                    </ElCol>
                    <ElCol :span="8">
                        <IconRefresh class="app-no-drag pointer" @click="$router.go(0)" />
                    </ElCol>
                </ElRow>
            </ElCol>
            <ElCol :span="8">
                <ElRow class="header-menu-item" :align="'middle'">
                    <ElCol>
                        <div class="search-bar">
                            <input type="text" class="app-no-drag search-input" placeholder="搜索" @keyup.enter="search"
                                v-model="searchValue" />
                        </div>
                    </ElCol>
                </ElRow>
            </ElCol>
            <ElCol :span="4" :offset="isElectron ? 0 : 4">
                <ElRow class="header-menu-item" :align="'middle'">
                    <ElCol :span="6" :offset="2">
                        <div class="pointer">
                            <ElIcon :size="24" :color="'#fff'">
                                <IconMessage class="app-no-drag" :num="2" />
                            </ElIcon>
                        </div>
                    </ElCol>
                    <ElCol :span="6" :offset="2">
                        <ElIcon :size="24" :color="'#fff'">
                            <div class="pointer">
                                <IconCloud class="app-no-drag" />
                            </div>
                        </ElIcon>
                    </ElCol>
                    <ElCol :span="6" :offset="2">
                        <div class="pointer">
                            <ElAvatar src="../assets/avatar.jpg" class="avatar app-no-drag" :size="32"></ElAvatar>
                        </div>
                    </ElCol>
                </ElRow>
            </ElCol>
            <template v-if="isElectron">
                <ElCol :span="1">
                    <ElRow style="padding-top: 20px;height: 18px;" :align="'middle'" :justify="'center'">
                        <ElCol>
                            <ElDivider direction="vertical" />
                        </ElCol>
                    </ElRow>
                </ElCol>
                <ElCol :span="3">
                    <ElRow class="header-menu-item" :align="'middle'">
                        <ElCol :span="8">
                            <ElIcon color="#ffffff" :size="20">
                                <IconWinMinus @click="$windowMinimize" class="app-no-drag" />
                            </ElIcon>
                        </ElCol>
                        <ElCol :span="8">
                            <ElIcon color="#ffffff" :size="16">
                                <IconWinMax @click="$windowMaximize" class="app-no-drag" />
                            </ElIcon>
                        </ElCol>
                        <ElCol :span="8">
                            <ElIcon @click="$windowClose()" color="#ffffff" :size="20" id="window-close">
                                <IconWinClose class="app-no-drag" />
                            </ElIcon>
                        </ElCol>
                    </ElRow>
                </ElCol>
            </template>
        </ElRow>
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useElectronStore } from '~/stores/electron';

const { $windowClose, $windowMaximize, $windowMinimize } = useNuxtApp();
const electronStore = useElectronStore();
const { isElectron } = storeToRefs(electronStore)
const router = useRouter();
const searchValue = ref('');
const search = () => {
    router.push({
        path: "/search",
        query: { keywords: searchValue.value },
    })
}
</script>
<style scoped lang="scss">
.app-drag {
    -webkit-app-region: drag;
}

.app-no-drag {
    -webkit-app-region: no-drag;
}

.avatar {
    border: 2px solid #fff;
}



.search-bar {
    $width: 100%;
    $height: 40px;
    $fontSize:15px;
    $fontWeight:500;

    height: $height;
    display: flex;
    width: $width;
    max-width: 400px;
    border-radius: 4px;
    input {
        width: $width;
        height: $height;
        border: none;
        background-color: var(--search-bg);
        border-radius: 4px;
        font-family: var(--body-font);
        font-size: $fontSize;
        font-weight: $fontWeight;
        padding: 0 20px 0 40px;
        box-shadow: 0 0 0 2px rgba(134, 140, 160, 0.02);
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
        background-size: 14px;
        background-repeat: no-repeat;
        background-position: 16px 48%;
        color: var(--theme-color);
    }

    input::-moz-placeholder {
        font-family: var(--body-font);
        color: var(--inactive-color);
        font-size: $fontSize;
        font-weight: $fontWeight;
    }

    input:-ms-input-placeholder {
        font-family: var(--body-font);
        color: var(--inactive-color);
        font-size: $fontSize;
        font-weight: $fontWeight;
    }

    input::placeholder {
        font-family: var(--body-font);
        color: var(--inactive-color);
        font-size: $fontSize;
        font-weight: $fontWeight;
    }
}

.el-dropdown-menu {
    background-color: var(--theme-bg-color);
    border: 0px;
}

.el-dropdown-link {
    padding-right: 10px;
}

.el-dropdown-item a {
    text-decoration: none;
    list-style: none;
    color: #606266;
}

.header {
    height: 58px;
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    white-space: nowrap;

    .logo {
        background: url(../assets/topbar.png) no-repeat 0 9999px;
    }

    .header-menu-item {
        height: 100%;
    }

    .header-menu a {
        padding: 20px 30px;
        text-decoration: none;
        color: var(--inactive-color);
        border-bottom: 2px solid transparent;
        transition: 0.3s;
    }

    .header-menu a.is-active,
    .header-menu a:hover {
        color: var(--theme-color);
        border-bottom: 2px solid var(--theme-color);
    }
}

.pointer {
    cursor: pointer;
}</style>