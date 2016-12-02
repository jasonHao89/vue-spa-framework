import $ from 'jquery'
$.ajaxSetup({
  timeout: 3000,
  success: function (data) {
      // todo something
  },
  error: function (xhr, status, e) {
    switch (xhr.status) {
      case 404:
        console.warn('404')
        // window.location.href = '/404'
        break

      default:
        console.warn(e)
        break
    }
  }

})
module.exports = $
