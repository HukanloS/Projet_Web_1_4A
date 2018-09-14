Vue.prototype.$http = axios

const app = new Vue ({
	el: '#app',
	data: {
		currentPage: 'Accueil',
    currentAside: 'FDéconnecté',
    filter: '',
    menu: '',
    myList: [],
    name: '',
    année:'',
    mois:'',
    jour:'',
    heure:'',
    myUsers: [],
    identifiant:'',
    mdp:'',
    identifiantC:'',
    mdpC:'',
    numberuser:-1
  },
  created() {
    this.$http.get('/list')
      .then(list => {
        this.myUsers = list.data
      })
    this.$http.get('/list2')
      .then(list2 => {
        this.myList = list2.data
      })
      .catch(err => {
        console.log('error', err)
      })
  },
  methods: {
    addUser() {
      this.$http.post('/list', {
        identifiant: this.identifiant,
        mdp: this.mdp
      })
      .then(() => {
        this.myUsers.push({
          identifiant: this.identifiant,
          mdp: this.mdp
        })
      })
    },
    addItem() {
      this.$http.post('/list2', {
        name:this.name,
        année:this.année,
        mois:this.mois,
        jour:this.jour,
        heure:this.heure,
        numberuser:this.numberuser
      })
      .then(() => {
        this.myList.push({
          name:this.name,
          année:this.année,
          mois:this.mois,
          jour:this.jour,
          heure:this.heure,
          numberuser:this.numberuser
        })
      })
    },
    connexion() {
      for (i=0;i<this.myUsers.length;i++){
        if (this.identifiantC == this.myUsers[i].identifiant){
          if (this.mdpC == this.myUsers[i].mdp) {
            this.numberuser = i
            this.currentAside = 'Connecté'
            return
          }
        }
      }
      alert('Votre identifiant ou/et votre mot de passe sont invalides')
    }
  }
})

