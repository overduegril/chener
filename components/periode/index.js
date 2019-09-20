// components/periode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    classicIndex: {
      type: Number,
      // 不出现双括号
      observer: function (nval, oval) {
        let val = nval < 10 ? '0' + nval : nval
        this.setData({
          _classicIndex: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: "",
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    _classicIndex: 0
  },



  /**
   * 组件的方法列表
   */
  methods: {

  },

  attached: function () {
    // 在组件实例进入页面节点树时执行
    let date = new Date()
    this.setData({
      year: date.getFullYear(),
      month: this.data.months[date.getMonth()]
    })
  }
  
})
