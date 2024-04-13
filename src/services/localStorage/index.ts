export const localStorageService = {
  setItem: (key: string, value: any) => {
    return localStorage.setItem(key, value)
  },
  getItem: (key: string) => {
    return localStorage.getItem(key)
  },
  removeItem: (key: string) => {
    return localStorage.removeItem(key)
  }
}
