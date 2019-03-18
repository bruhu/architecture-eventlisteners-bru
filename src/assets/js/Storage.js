// LocalStorage Wrapper
// save Array -> transform: String -> localStorage.setItem
// get Array -> localStorage.getItem -> transform: Array

export default class Storage {
  constructor(localStorageKey) {
    this.key = localStorageKey
    this.data = this.get()
  }

  addDataSet(dataParameter) {
    this.data.push(dataParameter)
    this.save()
  }

  save() {
    // have access to current data
    const data = this.data
    // transform to string
    const stringified = JSON.stringify(data)
    // save to locaStorage
    window.localStorage.setItem(this.key, stringified)
  }

  get() {
    const localStorageValue = window.localStorage.getItem(this.key)
    this.data = JSON.parse(localStorageValue) || []
    return this.data
  }
}
