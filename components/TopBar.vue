<template>
  <div>
    <nav class="main-nav">
      <ul>
        <li>
          <NuxtLink to="/">Women</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/men">Men</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/us">Us</NuxtLink>
        </li>

        <li class="logo">
          <svg viewBox="0 0 57 22" style="height: 25px; width: auto; fill: #464645;" data-v-b2012676="">
            <path
              d="M19.301 4.52c4.574 0 8.281 3.88 8.281 8.666 0 4.786-3.707 8.665-8.281 8.665-4.574 0-8.28-3.88-8.28-8.665 0-4.786 3.706-8.665 8.28-8.665zm28.922 0c4.345 0 7.867 3.88 7.867 8.666 0 .133-.004.265-.01.396 0 .353-.273.64-.61.64H43.092c.443 2.678 2.57 4.71 5.13 4.71 1.986 0 3.71-1.224 4.592-3.023l2.529.963c-1.258 2.942-3.973 4.979-7.121 4.979-4.345 0-7.867-3.88-7.867-8.665 0-4.786 3.522-8.665 7.867-8.665zM2.88 4.616v8.571c0 3.734 1.653 5.463 4.86 5.463h3.061v3.013h-3.06C2.636 21.663 0 18.98 0 13.187v-8.57h2.88zm29.383 0v8.571c0 3.734 1.652 5.463 4.86 5.463h3.06v3.013h-3.06c-5.104 0-7.741-2.682-7.741-8.476v-8.57h2.88zM19.3 7.441c-3.032 0-5.49 2.572-5.49 5.745s2.458 5.745 5.49 5.745c3.033 0 5.49-2.572 5.49-5.745s-2.457-5.745-5.49-5.745zm28.922 0c-2.25 0-4.167 1.568-4.899 3.767h9.798c-.732-2.199-2.65-3.767-4.9-3.767zM45.488 0c.842 0 1.529.718 1.529 1.605 0 .88-.687 1.597-1.53 1.597-.846 0-1.53-.724-1.53-1.597 0-.887.684-1.605 1.53-1.605zm5.49 0c.842 0 1.53.718 1.53 1.605 0 .88-.688 1.597-1.53 1.597-.847 0-1.53-.724-1.53-1.597 0-.887.683-1.605 1.53-1.605z"></path>
          </svg>
        </li>

        <li class="lang">
          <nuxt-img src="/flag_CA.png" alt="flag-CA" width="30"></nuxt-img>
          <span>FR</span>
        </li>

        <li class="icon">
          <img :src="require('../assets/icons/search.svg')" alt="search">
        </li>

        <li class="icon">
          <img :src="require('../assets/icons/user-regular.svg')" alt="user">
        </li>

        <li class="icon" style="position: relative">
          <img :src="require('../assets/icons/shopping-bag.svg')" alt="shopping">
          <div class="badge-quantity">1</div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TopBar"
}
</script>

<style lang="scss" scoped>
.main-nav {
  z-index: 1;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 70px;
  background: white;
  border-bottom: 1px solid #E5E5E5;
  padding: 1.2rem 4rem;

  ul {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 600px) {
      justify-content: center;
    }

    li {
      display: flex;
      align-items: center;
      text-decoration: none;
      cursor: pointer;

      a {
        font-weight: 500;
        text-decoration: none;
        color: #4D4D4FFF;
        position: relative;
        padding-bottom: 0.5rem;
        padding-left: 5px;
        padding-right: 5px;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          border-radius: 5px;
        }

        &.nuxt-link-exact-active {
          font-weight: 700;

          &::after {
            background: #FFC72C;
          }
        }
      }
    }

    .logo {
      margin: 0 auto;

      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    .lang {
      display: flex;
      align-items: center;
      margin-right: 1rem;

      span {
        margin-left: 0.5rem;
      }

      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    .icon {
      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    .badge-quantity {
      position: absolute;
      top: -5px;
      right: -8px;
      width: 18px;
      height: 18px;
      background: #FFC72C;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 0.7rem;
      font-weight: 700;
    }
  }
}
</style>
