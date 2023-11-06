<template>
    <ElRow class="main-header" :justify="'center'">
        <ElCol class="header-menu" :span="4">
            <NuxtLink class="menu-link-main" to="/">每日推荐</NuxtLink>
        </ElCol>
        <ElCol v-for="menu in groups" :key="menu.key" :span="4" class="header-menu">
            <NuxtLink :to="menu.url" :class="[
                'menu-link',
                menu.key == activeKey ? 'is-active' : '',
                menu.new ? 'notify' : '',
            ]">{{ menu.name }}</NuxtLink>
        </ElCol>
    </ElRow>
</template>
<script lang="ts" setup>

const activeKey = ref<string | undefined | null>('');
const route = useRoute();
const menus = useMenusStore();
const { mainHeader: groups } = menus
activeKey.value = route.name?.toString();

</script>
<style scoped lang="scss">
.main-header {
    align-items: center;
    height: 58px;
    text-align: center;
    .header-menu {
        text-decoration: none;
        color: var(--inactive-color);
        a {
            text-decoration: none;
            color: var(--inactive-color);
            border-bottom: 2px solid transparent;
            transition: 0.3s;
        }
    }
}
</style>