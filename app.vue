<template>
  <ClientOnly>
    <ElContainer class="container">
      <Background />
      <div class="app">
        <ElHeader>
          <Header></Header>
        </ElHeader>
        <div class="wrapper">
          <el-aside width="200px">
            <Left />
          </el-aside>
          <ElMain>
            <div class="main-container">
              <NuxtPage />
            </div>
          </ElMain>
        </div>

        <aplayer />
      </div>
    </ElContainer>
  </ClientOnly>
</template>
<style scoped>
.container{
  width: 100%;
  height: 100%;
}
.app{
  -webkit-app-region: no-drag;
}
</style>