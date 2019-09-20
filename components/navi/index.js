// components/navi/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    classicTag: String,
    classicIndex: {
      type: Number,
      observer: function(nval, oval){
        this.setData({
          previousImage: wx.getStorageSync("latestClassicIndex") == this.properties.classicIndex ? '../images/triangle.dis@left.png' : '../images/previous.png',
          hasPrevious: !(wx.getStorageSync("latestClassicIndex") == this.properties.classicIndex),
          nextImage: 1 == this.properties.classicIndex ? '../images/triangle.dis@right.png' : '../images/next.png',
          hasNext: 1 != this.properties.classicIndex
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    nextImage: '../images/next.png',
    previousImage: '../images/triangle.dis@left.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取之前一期作品
    getPreviousClassic: function (event) {
      if (this.data.hasPrevious){
        this.triggerEvent('getPreviousClassic', {
        }, {})
      }
    },
    // 获取后一期作品
    getNextClassic: function (event) {
      if(this.data.hasNext){
        this.triggerEvent('getNextClassic', {

        }, {})
      }
    }
  },

  ready: function() {
    this.setData({
      classicTag: this.properties.classicTag
    })
  }
})
