import { observable, action } from 'mobx'

class Store {
    @observable likesCount = 12
}

const storeInstance = new Store()
export default storeInstance;