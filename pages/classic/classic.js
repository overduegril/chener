// pages/classic.js
import {ClassicModel} from "../../models/classic.js"
import {LikeModel} from "../../models/like.js"
let classicModel = new ClassicModel();
let likeModel = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    like: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 使用箭头函数改变this 指向
    classicModel.getLatest((data) => {
      console.log(data)
      this.setData({
        classicIndex: data.data.classicIndex,
        classicImage: data.data.classicImageUrl,
        classicContent: data.data.classicContent,
        classicTag: data.data.classicTag,
        classicType: data.data.classicType,
        classicMusicUrl: data.data.classicMusicUrl
      })

      likeModel.getFavNum(this.data.classicIndex, (data) => {
        this.setData({
          favNum: data.data
        })
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 点赞参数回传方法
   */
  onLike : function (event) {
    
  },
  /**
   * 页面（组件）切换
   */
  getNextClassic: function (event){
    classicModel.getNextClassic((data)=>{
      console.log(data)
      this.setData({
        classicIndex: data.data.classicIndex,
        classicImage: data.data.classicImageUrl,
        classicContent: data.data.classicContent,
        classicTag: data.data.classicTag,
        classicType: data.data.classicType,
        classicMusicUrl: data.data.classicMusicUrl
      })

      likeModel.getFavNum(this.data.classicIndex, (data) => {
        this.setData({
          favNum: data.data
        })
      })
    }, this.data.classicIndex)
  },

  getPreviousClassic: function (event) {
    classicModel.getPreviousClassic((data) => {
      console.log(data)
      this.setData({
        classicIndex: data.data.classicIndex,
        classicImage: data.data.classicImageUrl,
        classicContent: data.data.classicContent,
        classicTag: data.data.classicTag,
        classicType: data.data.classicType,
        classicMusicUrl: data.data.classicMusicUrl
      })

      likeModel.getFavNum(this.data.classicIndex, (data) => {
        this.setData({
          favNum: data.data
        })
      })
    }, this.data.classicIndex)
  },

  /**
   * 测试模块，以及工具类的使用
   */
  

})