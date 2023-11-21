<template>
    <div class="left-side">
        <div>
            <div class="side-wrapper" v-for="group in groups" :key="group.title">
                <div class="side-title">{{ group.title }}</div>
                <div class="side-menu">
                    <NuxtLink :to="{ path: menu.url }" v-for="menu in group.menus" :key="menu.key">
                        {{ menu.name }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useMenusStore } from '~/stores/menus';

const menus = useMenusStore()
const { left: groups } = menus;

</script>
<style scoped lang="scss">
a {
    list-style: none;
    text-decoration: none;
}

li {
    list-style: none;
}

.left-side {
    flex-basis: 240px;
    border-right: 1px solid var(--border-color);
    padding: 26px 26px 10px 26px;
    overflow: auto;
    flex-shrink: 0;

    .side-wrapper+.side-wrapper {
        margin-top: 20px;
    }

    .side-title {
        color: var(--inactive-color);
        margin-bottom: 14px;
    }

    .side-menu {
        display: flex;
        flex-direction: column;
        white-space: nowrap;

        img {
            border-radius: 5px;
            margin-right: 5px;
        }

        a {
            text-decoration: none;
            color: var(--theme-color);
            display: flex;
            align-items: center;
            font-weight: 400;
            padding: 10px;
            font-size: 14px;
            border-radius: 6px;
            transition: 0.3s;
        }

        a:hover {
            background-color: var(--hover-menu-bg);
        }

        svg {
            width: 16px;
            margin-right: 8px;
        }
    }
}</style>
