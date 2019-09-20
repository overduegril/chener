import { HTTP } from "../utils/http.js"
class BookModel extends HTTP {
  constructor() {
    super()
  }

  // 获取最新一期的classic
  listBook(callback) {
    this.request({
      url: "mlbook/listBook",
      success: (data) => {
        callback(data)
        this._setBooks(data.data)
      }
    })
  }

 
  /**
   * 将书籍信息存入缓存
   */
  _setBooks(books) {
    wx.setStorageSync("books", books)
  }
}

export { BookModel }