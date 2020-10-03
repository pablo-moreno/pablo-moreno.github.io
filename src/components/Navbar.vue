<template>
  <nav class="navbar">
    <div class="navbar-end">
      <a href="#skills">Skills</a>
      <a href="#skills">Skills</a>
      <a href="#skills">Skills</a>
      <a href="#skills">Skills</a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  height: 64px;
  width: 100%;
  background-color: #703d99;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px;

  .navbar-start {
    display: flex;
    justify-content: center;
  }

  .navbar-logo {
    display: flex;
    justify-content: center;
    margin-left: 1em;
  }

  .navbar-end {
    a {
      margin-right: 1em;
    }
  }

  @media screen and (max-width: 640px) {
    span {
      display: none;
    }
  }

  .navbar-logo > a > img {
    width: 48px;
  }

  .navbar-logout {
    border: none;
    background-color: transparent;
    margin-right: 1em;
    font-size: 20px;
    color: white;
    cursor: pointer;

    &:hover {
      color: white;
    }

    @media screen and (max-width: 640px) {
      span {
        display: none;
      }
    }
  }

  h2 {
    margin: 0 0 0 1em;
    padding: 0;
    display: flex;
    align-items: center;

  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }
}

</style>
