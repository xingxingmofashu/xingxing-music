<template>
  <ClientOnly>
    <ElContainer class="container">
      <Background />
      <!-- <div class="content">
        <ElHeader>
          <Header></Header>
        </ElHeader>
        <div class="wrapper">
          <ElAside width="200px">
            <Left />
          </ElAside>
          <ElMain class="el-main">
            <div class="main-container">
              <NuxtPage />
            </div>
          </ElMain>
        </div>

        <aplayer />
      </div> -->
    </ElContainer>
  </ClientOnly>
</template>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;

  .content {
    -webkit-app-region: no-drag;
    background-color: var(--theme-bg-color);
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 5px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    font-size: 15px;
    font-weight: 500;
    width: 100%;
  }

  .wrapper {
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    .el-main {
      --el-main-padding:0;
      .main-container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
    }
  }
}
</style>