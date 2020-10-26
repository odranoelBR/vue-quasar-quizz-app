<template>
  <div class="row justify-center">
    <a
      class="button switch"
      :class="toggle ? '' : 'right'"
    >
      <div class="arrow" />
    </a>
  </div>
</template>
<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="scss">
$transition: 0.5s;
$width: 4rem;
$radius: 1rem;
$angle: 35deg;
$bg: whitesmoke;
$buttonbg: #1d2833;

.button {
  padding: 1rem;
  border-radius: $width;
  background: $buttonbg;
  cursor: pointer;
  transition: $transition/2;
}

.arrow {
  position: relative;
  width: $width;
  height: $width/10;
  transition: $transition;
  border-radius: $radius;
  transform-origin: right center;

  &:before {
    transform: rotate(-$angle);
  }
  &:after {
    transform: rotate($angle);
  }

  &:before,
  &:after {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    background: $bg;
    width: $width/2;
    height: $width/10;
    transform-origin: $width/30 center;
    transition: $transition;
    border-radius: $radius;
  }
}

.switch.right {
  .arrow {
    &:before,
    &:after {
      left: $width - $width/20;
    }
    &:before {
      transform: rotate($angle * 4);
    }
    &:after {
      transform: rotate(-$angle * 4);
    }
  }
}

.flip {
  transform: translateZ(1rem) perspective(600);
}

.flip.right {
  transform: translateZ(1rem) perspective(600) rotateY(180deg);
}
</style>
