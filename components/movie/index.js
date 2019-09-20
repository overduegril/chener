Component({
  /**
   * 组件的属性列表
   */
  properties: {
    classicImage: String,
    classicContent: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    movieIcon: "../images/movieicon.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  ready: function () {
    console.log("电影图片为" + "----------" + this.properties.classicImage)
    console.log(this.properties.classicImage)
    this.setData({
      classicImage: this.properties.classicImage,
      classicContent: this.properties.classicContent
    })
  }
})
