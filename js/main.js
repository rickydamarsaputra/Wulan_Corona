let app = new Vue({
  el: '#app',
  data: {
    coronaIndo: [],
    positif: [],
    sembuh: [],
    meninggal: []
  },
  created: function () {
    this.getInfoCoronaIndo()
    this.getPositif()
    this.getSembuh()
    this.getMeninggal()
  },
  methods: {
    getInfoCoronaIndo: function () {
      axios.get('https://api.kawalcorona.com/indonesia/')
        .then(res => {
          this.coronaIndo = res.data[0]
        })
    },
    getPositif: function () {
      axios.get('https://api.kawalcorona.com/positif/')
        .then(res => {
          this.positif = res.data
          console.log(this.positif)
        })
    },
    getSembuh: function () {
      axios.get('https://api.kawalcorona.com/sembuh/')
        .then(res => {
          this.sembuh = res.data
          console.log(this.sembuh)
        })
    },
    getMeninggal: function () {
      axios.get('https://api.kawalcorona.com/meninggal/')
        .then(res => {
          this.meninggal = res.data
          console.log(this.meninggal)
        })
    }
  }
})