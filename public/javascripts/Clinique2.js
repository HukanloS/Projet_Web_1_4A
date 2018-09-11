Vue.prototype.$http = axios

const app = new Vue ({
	el: '#app',
	data: {
		currentPage: 'Accueil',
    currentAside: 'Déconnecté',
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
    mdp:''
  },
  created2() {
    this.$http.get('/list2')
      .then(list => {
        this.myUsers = list.data
      })
      .catch(err => {
        console.log('error 2', err)
      })
	},
  created() {
    this.$http.get('/list')
      .then(list => {
        this.myUsers = list.data
      })
      .catch(err => {
        console.log('error', err)
      })
  },
  methods: {
    addItem() {
      this.$http.post('/list2', {
        name: this.name,
        année: this.année,
        mois: this.mois,
        jour: this.jour,
        heure: this.heure
      })
      .then(() => {
        this.myUsers.myList.push({
          name: this.name,
          année: this.année,
          mois: this.mois,
          jour: this.jour,
          heure: this.heure
        })
      })
    },
    addUser() {
      this.$http.post('/list', {
        identifiant: this.identifiant,
        mdp: this.mdp,
        myList: this.myList
      })
      .then(() => {
        this.myUsers.push({
          identifiant: this.identifiant,
          mdp: this.mdp,
          myList: this.myList
        })
      })
    }
  }
})

