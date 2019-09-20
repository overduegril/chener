import {HTTP} from "../utils/http.js"

class ClassicModel extends HTTP {
  constructor() {
    super()
  }

  // 获取最新一期的classic
  getLatest(callback) {
    this.request({
      url: "mlclassic/getLatestClassic",
      success: (data)=>{
        callback(data)
        this._setLatestClassIndex(data.data.classicIndex)
      }
    })
  }

  /**
   * 获取下一期内容
   */
  getNextClassic(callback, currentClassicID) {
    this.request({
      url: "mlclassic/getNextClassic/" + currentClassicID,
      success: (data) => {
        callback(data)
      }
    })
  }

  /**
   * 获取下一期内容
   */
  getPreviousClassic(callback, currentClassicID) {
    this.request({
      url: "mlclassic/getPreviousClassic/" + currentClassicID,
      success: (data) => {
        callback(data)
      }
    })
  }
  
  /**
   * 将最新classic的index 存入缓存
   */
  _setLatestClassIndex(classicIndex) {
    wx.setStorageSync("latestClassicIndex", classicIndex)
  }
}

export {ClassicModel}