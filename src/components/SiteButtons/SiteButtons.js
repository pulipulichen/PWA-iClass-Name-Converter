let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      sitesTable: []
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  computed: {
    
  },
  mounted() {
    this.initSitesTable()
  },
  methods: {
    initSitesTable: async function () {
      let apiURL = 'https://script.google.com/macros/s/AKfycbyplODpXwFMbKZHI7-pma0BBXrOBWcf9_lCFyahO7ykHx1tXpH3gX6asNNL-pPUIrW7/exec'
      this.sitesTable = await this.db.utils.AxiosUtils.get(apiURL)
      console.log(this.sitesTable)
    },
    popup (event) {
      if (typeof(event) === 'string') {
        return this.db.utils.PopupUtils.openURLFullscreen(event)
      }
      
      let href = event.target.getAttribute('href')
      if (href) {
        return this.db.utils.PopupUtils.openURLFullscreen(href)
      }

      console.error(this.$t('No Link'))
    },
    valueType (value) {
      if (value.startsWith('https://iclass.tku.edu.tw/')) {
        return 'iclass'
      }
      else if (value.startsWith('https://teams.microsoft.com/')) {
        return 'teams'
      }
      else if (value.startsWith('https://drive.google.com/drive/')) {
        return 'gdrive'
      }
    },
    computedButtonType (j, link) {
      // 'button-header': (j === 0)
      let classList = []

      if (j === 0) {
        classList.push('button-header')
      }
      let type = this.valueType(link)

      if (type === 'iclass') {
        classList.push('teal')
      }
      else if (type === 'teams') {
        classList.push('violet')
      }
      else if (type === 'gdrive') {
        classList.push('orange')
      }

      return classList
    },
    computedButtonIcon (link) {
      let type = this.valueType(link)

      if (type === 'iclass') {
        return 'skyatlas icon'
      }
      else if (type === 'teams') {
        return 'microsoft icon'
      }
      else if (type === 'gdrive') {
        return 'google drive icon'
      }
    }
  }
}

export default app