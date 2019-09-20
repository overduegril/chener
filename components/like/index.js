// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: Boolean,
    count: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeImage: '../images/like.png',
    disLikeImage: '../images/dislike.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(event) {
      // this 指向 调用所在方法的对象。
      let count = this.properties.count
      count = this.properties.like? count - 1: count + 1
      this.setData({
        count: count,
        like: !this.properties.like
      })
    let behavior = this.properties.like ? 'like' : 'cancel'
    this.triggerEvent('like',{
      //自定义对象，实现参数的传递
      behavior:behavior
    },{})
    }
  }
})
