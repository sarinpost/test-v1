<template>
  <div class="container-1">
    <div class="c1">
      <input v-model="number" />
    </div>
    <div class="c2">
      <select id="cars" name="cars" v-model="option">
        <option value="0">isPrime</option>
        <option value="1">isFibonacci</option>
      </select>
    </div>
    <div class="c3">{{ result }}</div>
  </div>
</template>

<script>
function isPrime(num) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

function isPerfectSquare(x) {
  let s = parseInt(Math.sqrt(x));
  return s * s == x;
}
// Returns true if n is a Fibinacci Number, else false
function isFibonacci(n) {
  // n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
  // is a perferct square
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

export default {
  name: "App",
  data() {
    return {
      number: null,
      option: null,
      result: null,
    };
  },
  watch: {
    number() {
      if (this.option == 0) {
        this.result = isPrime(this.number);
      } else if (this.option == 1) {
        this.result = isFibonacci(this.number);
      }
    },
    option() {
      if (this.option == 0) {
        this.result = isPrime(this.number);
      } else if (this.option == 1) {
        this.result = isFibonacci(this.number);
      }
    },
  },
};
</script>

<style>
.container-1 {
  display: flex;
}
.c1 {
  background-color: rgb(255, 224, 224);
  width: 200px;
  height: 100vh;
}
.c2 {
  background-color: rgb(231, 231, 255);
  width: calc(100vw - 200px - 300px);
  min-width: 100px;
  height: 100vh;
}
.c3 {
  background-color: rgb(230, 255, 230);
  width: 300px;
  height: 100vh;
}
</style>
