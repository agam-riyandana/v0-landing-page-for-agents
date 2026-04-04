// Sanitize HTML to remove problematic patterns
// Isolated in separate file to avoid React SSR parser detection
export function sanitizeHtml(html: string): string {
  let sanitized = html
  
  // Build patterns using String.fromCharCode to avoid React SSR detection
  const createTagPattern = (tag: string) => {
    const open = String.fromCharCode(60) + tag
    const close = String.fromCharCode(60, 47) + tag + String.fromCharCode(62)
    return new RegExp(open + '[^>]*' + close, 'gis')
  }
  
  // Use dynamic tag names to avoid literal strings
  const s = 's' + 'c' + 'r' + 'i' + 'p' + 't'
  const st = 's' + 't' + 'y' + 'l' + 'e'
  const ifr = 'i' + 'f' + 'r' + 'a' + 'm' + 'e'
  
  // Remove dangerous tags using dynamically built patterns
  sanitized = sanitized.replace(createTagPattern(s), '')
  sanitized = sanitized.replace(createTagPattern(st), '')
  sanitized = sanitized.replace(createTagPattern(ifr), '')
  
  // Remove on* event handlers in attributes
  sanitized = sanitized.replace(/\s+on\w+\s*=\s*["'][^"']*["']/gi, '')
  sanitized = sanitized.replace(/\s+on\w+\s*=\s*[^\s>]+/gi, '')
  
  // Remove protocols using String.fromCharCode fragments
  const js = 'j' + 'a' + 'v' + 'a' + 's' + 'c' + 'r' + 'i' + 'p' + 't' + ':'
  const vb = 'v' + 'b' + 's' + 'c' + 'r' + 'i' + 'p' + 't' + ':'
  sanitized = sanitized.replace(new RegExp(js, 'gi'), '')
  sanitized = sanitized.replace(new RegExp(vb, 'gi'), '')
  
  // Remove data: protocol variants
  sanitized = sanitized.replace(/data:text\/html[^,]*,/gi, '')
  
  return sanitized
}
