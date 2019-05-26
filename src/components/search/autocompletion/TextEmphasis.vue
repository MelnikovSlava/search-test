<template>
  <p class="text">
    <span
      :class="{bold: item.bold}"
      v-for="(item, i) in formatedText"
      :key="item.char+i"
    >{{item.char}}</span>
  </p>
</template>

<script>
export default {
  name: "TextEmphasis",

  props: {
    textstr: String,
    substr: String
  },

  computed: {
    formatedText() {
      let startIndex = this.textstr.toLowerCase().indexOf(this.substr);

      return this.textstr.split("").map((char, i) => {
        return {
          char,
          bold: i >= startIndex && i <= startIndex + this.substr.length - 1
        };
      });
    }
  }
};
</script>

<style scoped lang="less">
.bold {
  font-weight: bold;
  color: darken(gray, 20);
}

.text {
  margin: 0;
  color: lighten(gray, 10);
}
</style>
