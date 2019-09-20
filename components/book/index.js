// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: Object,
    showLike: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: String,
    author: String,
    img: String
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function(event){
      console.log(this.properties.book.mlID)
      this.triggerEvent("getBookDetail",{bookID: this.properties.book.mlID},{})
    }
  },
  ready: function () {
    console.log(this.properties.book)
    this.setData({
      img: this.properties.book.image,
      author: this.properties.book.author,
      title: this.properties.book.title
    })
  }
  
})
