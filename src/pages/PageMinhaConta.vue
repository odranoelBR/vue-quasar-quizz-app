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
            v-model="usuario.nome"
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
            v-model="usuario.email"
            placeholder="Email"
            class="full-width"
            disable
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
            Atualizar
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
    usuario: {}
  }),
  computed: {
    ...mapGetters(['getUsuario'])
  },
  watch: {
    getUsuario: {
      handler () {
        this.usuario = this.getUsuario
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
          var usuarioRef = db.collection('usuarios').doc(this.getUsuario.id)

          usuarioRef.update({
            nome: vm.usuario.nome
          })
            .then(function (docRef) {
              vm.setUsuario(vm.usuario)
              vm.$q.localStorage.set('usuario', vm.usuario)
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
