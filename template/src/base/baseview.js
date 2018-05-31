import {BaseView} from 'ycloud-lifecycle'
import ko from 'knockout'
class View extends BaseView {
  beforeMounted () {
    ko.applyBindings(this, document.getElementById('bodycontent'))
  }
}
export default View
