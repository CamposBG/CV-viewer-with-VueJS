new Vue({
  el: "#app",
  data: {
    cvs: user,
    selectedIndex: 0,
    selectedCV:user[0]
  },
  computed: {

  },
  watch: {
    selectedIndex(novo, antigo){
      console.log(novo, antigo)
      this.selectedCV = user[novo]
      console.log(this.selectedCV.name)
    }
      
  },
  methods: {
    trimString(str, len) {
      return str.substring(0, len)
    },
    getID(id){
      this.currentID = id;
    },
  }
})
