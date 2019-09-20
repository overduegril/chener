var am = wx.createInnerAudioContext()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    classicImage: String,
    classicContent: String,
    classicMusicUrl: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    musicIcon: "../images/music.png",
    playingUrl: "../images/playing.png",
    waittingUrl: "../images/pause.png",
    playing: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function() {
      console.log("音乐播放按钮被点击" + this.properties.classicMusicUrl)
      // 实现音乐的播放
      if (this.data.playing == false) {
        am.src = this.properties.classicMusicUrl
        am.play()
        console.log("播放执行了。")
        this.setData({
          playing: true
        })
      } else {
        am.pause()
        console.log("暂停执行了。")
        this.setData({
          playing: false
        })
      }

    },
    _recoverStatus: function() {
      console.log(am.paused + "-------" + am.src + "+++++" + this.properties.classicMusicUrl)
      if (am.pause) {
        this.setData({
          playing: false
        })
        return
      }
      if (am.src == this.properties.classicMusicUrl) {
        this.setData({
          playing: true
        })
      }

    }
  },

  ready: function() {
    console.log("音乐图片为" + "----------" + this.properties.classicImage)
    console.log(this.properties.classicImage)
    this.setData({
      classicImage: this.properties.classicImage,
      classicContent: this.properties.classicContent
    })
  },

  attached: function() {
    console.log("测试状态的改变")
    this._recoverStatus();
    am.onStop(() => {
      this.setData({
        playing: false
      })
      }),
      am.onEnded(() => {
      this.setData({
        playing: false
      })
      })
  }
})