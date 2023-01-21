import { GetStorage, SetStorage } from '@/data/protocols/cache'

export class LocalStorageAdapter implements SetStorage, GetStorage {
  set(key: string, value: any): void {
    if (!value) localStorage.removeItem(key)
    else localStorage.set(key, JSON.stringify(value))
  }

  get(key: string) {
    const value = localStorage.getItem(key)
    if (!value) return
    return JSON.parse(value)
  }
}
