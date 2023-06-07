
import linkifyHtml from 'linkify-html';

let app = {
  props: ['db'],
  components: {
    // DataTaskManager: () => import(/* webpackChunkName: "components/DataTaskManager" */ './DataTaskManager/DataTaskManager.vue')
  },
  data () {    
    this.$i18n.locale = this.db.localConfig.locale
    return {
      title: `16. 期末報告(II) / Final Report - 111-2 數位典藏與數位人文概論`,
      link: `https://docs.google.com/presentation/d/1HxOjpuTMdhjTf4WnRuvPmHRoluaFVwrNbOela_6-oec/edit?usp=sharing`
    }
  },
  watch: {
    'db.localConfig.locale'() {
      this.$i18n.locale = this.db.localConfig.locale;
    },
  },
  computed: {
    titleDisabled () {
      return (this.title.trim() === '')
    },
    titleNoCourse () {
      if (this.titleDisabled) {
        return '-'
      }

      let title = this.title
      let hyerPos = title.indexOf(' - ')
      if (hyerPos > -1) {
        title = title.slice(0, hyerPos).trim()
      }
      return title
    },
    titleMain () {
      if (this.titleDisabled) {
        return '-'
      }

      let title = this.titleNoCourse
      let hyerPos = title.indexOf(' / ')
      if (hyerPos > -1) {
        title = title.slice(0, hyerPos).trim()
      }
      return title
    },
    titleMainNoNumber () {
      if (this.titleDisabled) {
        return '-'
      }

      let title = this.titleMain
      let hyerPos = title.indexOf(' ')
      if (hyerPos > -1) {
        title = title.slice(hyerPos + 2).trim()
      }
      return title
    },
    titleNoNumber () {
      if (this.titleDisabled) {
        return '-'
      }

      let title = this.titleNoCourse
      let hyerPos = title.indexOf('. ')
      if (hyerPos > -1) {
        title = title.slice(hyerPos + 2).trim()
      }
      return title
    },
    titleForChapter () {
      if (this.titleDisabled) {
        return '-'
      }

      return 'Week ' + this.titleNoCourse
    },
    titleForTeams () {
      if (this.titleDisabled) {
        return '-'
      }

      return '課程記錄 - Week ' + this.titleNoCourse
    },
    titleForTeamsEng () {
      if (this.titleDisabled) {
        return '-'
      }

      return 'Course Record - Week ' + this.titleNoCourse
    },
    titleForSlide () {
      if (this.titleDisabled) {
        return '-'
      }

      return '投影片 - ' + this.titleNoNumber + ' (Google Slide & PDF)' 
    },
    titleForSlideEng () {
      if (this.titleDisabled) {
        return '-'
      }

      return 'Slide - ' + this.titleNoNumber + ' (Google Slide & PDF)' 
    },
    linkDisabled () {
      return (this.link.trim() === '')
    },
    fileIDfromLink () {
      if (this.linkDisabled) {
        return '-'
      }
      
      let parts = this.link.split('/')
      if (parts.length === 0) {
        return ''
      }

      return parts[5]
    },
    linkForPDF () {
      if (this.linkDisabled) {
        return '-'
      }

      return `https://docs.google.com/presentation/d/${this.fileIDfromLink}/export/pdf`
    },
    linkHTML () {
      if (this.linkDisabled) {
        return '-'
      }
      
      return `<ul><li><div>Google Slide:</div><a href="https://docs.google.com/presentation/d/${this.fileIDfromLink}/edit?usp=sharing" target="_blank">https://docs.google.com/presentation/d/${this.fileIDfromLink}/edit?usp=sharing</a></li><li><div>PDF:</div><a href="https://docs.google.com/presentation/d/${this.fileIDfromLink}/export/pdf" target="_blank">https://docs.google.com/presentation/d/${this.fileIDfromLink}/export/pdf</a></li></ul>`
    }
  },
  mounted() {
    
  },
  methods: {
    copyPlainText (value) {
      this.db.utils.ClipboardUtils.copyPlainString(value)
    },
    copyRichText (value) {
      this.db.utils.ClipboardUtils.copyRichText(value)
    },
  }
}

export default app