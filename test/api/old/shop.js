/**
 * Mocking client-server processing
 */
import _days from './days.json'

console.log(_days)

const TIMEOUT = 100

export default {
  getDays(cb, timeout) {
    setTimeout(() => cb(_days), timeout || TIMEOUT)
  }
}
