import { CACHE_DURATION } from '../utils/constants';

class CacheService {
  set(key, data) {
    const cacheData = {
      data: data,
      timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(cacheData));
  }

  get(key) {
    const cachedItem = localStorage.getItem(key);
    
    if (!cachedItem) {
      return null;
    }

    const { data, timestamp } = JSON.parse(cachedItem);
    const now = Date.now();

    // Check if cache is expired
    if (now - timestamp > CACHE_DURATION) {
      localStorage.removeItem(key);
      return null;
    }

    return data;
  }

  clear() {
    localStorage.clear();
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}

export default new CacheService();