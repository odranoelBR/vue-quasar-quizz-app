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
          <div class="text-h6 text-grey-6 text-center">
            {{ $t('messages.myAcc') }}
          </div>
        </q-card-section>

        <div class="row q-pa-md justify-center q-pt-md">
          <q-input
            v-model="user.nome"
            :placeholder="$t('words.name')"
            class="full-width"
            type="text"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || $t('messages.validationFillName')
            ]"
          />
        </div>
        <div class="row q-pa-md justify-center">
          <q-input
            v-model="user.email"
            :placeholder="$t('words.email')"
            class="full-width"
            disable
            type="email"
            :rules="[
              val => val !== null && val !== '' || $t('messages.validationFillEmail')
            ]"
          />
        </div>
        <div class="row q-pa-lg justify-center">
          <q-btn
            type="submit"
            color="primary"
          >
            {{ $t('words.update') }}
          </q-btn>
        </div>
      </q-form>
    </q-card>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { db } from 'boot/firebase'
import { Notify } from 'quasar'

export default {
  data: () => ({
    user: {}
  }),
  computed: {
    ...mapGetters(['getUser'])
  },
  watch: {
    getUser: {
      handler () {
        this.user = this.getUser
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations(['setUsuario']),
    saveUser () {
      let vm = this

      this.$refs.form.validate().then(success => {
        if (success) {
          var usuarioRef = db.collection('usuarios').doc(this.getUser.id)

          usuarioRef.update({
            nome: vm.user.nome
          })
            .then(function (docRef) {
              vm.setUsuario(vm.user)
              vm.$q.localStorage.set('usuario', vm.user)
              Notify.create({ message: 'Atualizado!', color: 'positive' })
            })
            .catch(function () {
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
</style>
