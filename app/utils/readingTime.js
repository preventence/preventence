export function calculateReadingTime(text = '') {
  const WORDS_PER_MINUTE = 200
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}
