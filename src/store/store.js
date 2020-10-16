import { observable, action } from 'mobx'

class Store {
    @observable userData = {}

    @observable jobs = {}

    @observable internships = {}
}

const storeInstance = new Store()
export default storeInstance;