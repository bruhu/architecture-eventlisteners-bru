// LocalStorage Wrapper
// save Array -> transform: String -> localStorage.setItem
// get Array -> localStorage.getItem -> transform: Array

export default class Storage {
  constructor(localStorageKey) {
    this.key = localStorageKey
  }

  save(ele) {
    localStorage.setItem(this.key, ele)
  }

  get() {
    const localStorageValue = localStorage.getItem(this.key)
    return localStorageValue
  }
}
