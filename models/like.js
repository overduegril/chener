import { HTTP } from "../utils/http.js"
class LikeModel extends HTTP {
  constructor() {
    super()
  }
  
  /**
   * 获取某个期刊的喜欢数量
   */
  getFavNum(classicID, callBack) {
    this.request({
      url: "mllike/getFavNum/" + classicID ,
      success: (data) => {
        callBack(data)
      }
    })
  }
  
  /**
   * 没有用户id暂时不写这个方法。
   */
  updateFavNum(classicID, callBack) {
    this.request({
      url: "mllike/updateFavNum/" + classicID,
      success: (data) => {
        console.log(data)
        callBack(data)
      }
    })
  }
}

export {LikeModel}