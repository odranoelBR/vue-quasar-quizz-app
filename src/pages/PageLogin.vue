<template>
  <div>
    <div style="height:90vw;">
      <div class="row justify-center ">
        <img
          src="~assets/wings.svg"
          alt=""
        >

      </div>
      <div class="row justify-center q-mb-xl">
        <span class="text-white">Quizz EAOF</span>
      </div>
    </div>
    <q-card>
      <div class="row q-pa-md justify-center q-pt-xl">
        <q-input
          v-model="email"
          placeholder="Email"
          class="full-width"
          type="email"
        ></q-input>
      </div>
      <div class="row q-pa-md justify-center">
        <q-input
          v-model="senha"
          class="full-width"
          type="password"
          placeholder="Senha"
        ></q-input>
      </div>
      <div class="row q-pa-lg justify-center">
        <q-btn color="primary">
          Entrar
        </q-btn>
      </div>
    </q-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    email: '',
    senha: ''
  }),
  mounted () {

  }
}
</script>
<style scoped>
img {
  width: 256px;
  height: 78px;
}
.q-card {
  position: absolute;
  top: 35vw;
  left: 5vw;
  width: 90%;
  min-height: 70%;
}
</style>
