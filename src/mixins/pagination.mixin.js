export default {
  data() { 
    return{
      page: +this.$route.query.page,
    pageSize: 5,
    pageCount: 0,
    allItems: [],
    items: []
    }
  },
  methods: {
    // без loadash
    _getPagesArr(Items, pageSize) {
      let mArr = [] 
      let Arr = []
      let i = 0
      
      Items.forEach(item => {
        if (i < pageSize) {
          mArr.push(item)
          i++
          if (i === pageSize) {
            Arr.push(mArr)
            i = 0
            mArr = []
          }
        }
      })
    
      if (Items.length % pageSize) {
        const overRange = Items.slice((Items.length % pageSize) * -1)
        return [...Arr,overRange]
      }
      return Arr
    },
    setupPagination(allItems) {
      this.allItems = this._getPagesArr(allItems, this.pageSize)
      this.pageCount = this.allItems.length
      this.items = this.allItems[this.page - 1] || this.allItems[0]
    },
    changePageHandler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`)
      this.items = this.allItems[page - 1] || this.allItems[0]
    }
  }
}
