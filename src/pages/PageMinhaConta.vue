<template>
  <div>

    <q-card id="card-login">
      <q-form
        no-error-focus
        @submit="saveUser"
        @validation-success="() => { valid = true }"
        @validation-error="() => { valid = false }"
        ref="form"
      >
        <q-card-section>
          <div class="text-h6 text-grey-6 text-center">Dados da conta</div>
        </q-card-section>

        <div class="row q-pa-md justify-center q-pt-md">
          <q-input
            v-model="nome"
            placeholder="Nome"
            class="full-width"
            type="text"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Preencha o nome',
          ]"
          ></q-input>
        </div>
        <div class="row q-pa-md justify-center">
          <q-input
            v-model="email"
            placeholder="Email"
            class="full-width"
            type="email"
            :rules="[
            val => val !== null && val !== '' || 'Preencha o email',
          ]"
          ></q-input>
        </div>
        <div class="row q-pa-lg justify-center">
          <q-btn
            type="submit"
            color="primary"
          >
            Entrar
          </q-btn>
        </div>
      </q-form>
    </q-card>

  </div>
</template>
<script>
import { db } from '../boot/app'
import { mapMutations } from 'vuex'
export default {
  data: () => ({
    email: '',
    nome: ''
  }),
  methods: {
    ...mapMutations(['setUsuario']),
    saveUser () {
      let vm = this

      this.$refs.form.validate().then(success => {
        if (success) {
          let usuario = {
            nome: this.nome,
            email: this.email,
            data: new Date()
          }
          db.collection('usuarios').add(usuario)
            .then(function (docRef) {
              usuario.id = docRef.id
              vm.setUsuario(usuario)
              vm.$q.localStorage.set('usuario', usuario)

              vm.$router.push('/')
            })
            .catch(function (error) {
              console.error('Error adding document: ', error)
            })
        } else {
          // oh no, user has filled in
          // at least one invalid value
        }
      })
    }
  }
}
</script>
<style scoped>
.q-card {
  position: absolute;
  width: 90%;
}
#card-login {
  top: 20vw;
  left: 5vw;
  min-height: 40%;
}

#card-test {
  top: 115vw;
  left: 5vw;
}
</style>
