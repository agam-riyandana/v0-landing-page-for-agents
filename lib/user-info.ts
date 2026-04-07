// Open-source IP geolocation and operator detection
export interface UserInfo {
  ip: string
  country: string
  countryCode: string
  flag: string
  operator: string
}

// Country code to flag emoji mapping
const countryFlags: Record<string, string> = {
  US: "🇺🇸", GB: "🇬🇧", ID: "🇮🇩", JP: "🇯🇵", CN: "🇨🇳",
  IN: "🇮🇳", BR: "🇧🇷", RU: "🇷🇺", DE: "🇩🇪", FR: "🇫🇷",
  IT: "🇮🇹", ES: "🇪🇸", CA: "🇨🇦", AU: "🇦🇺", MX: "🇲🇽",
  KR: "🇰🇷", SG: "🇸🇬", MY: "🇲🇾", TH: "🇹🇭", VN: "🇻🇳",
  PH: "🇵🇭", NG: "🇳🇬", ZA: "🇿🇦", AR: "🇦🇷", CL: "🇨🇱",
  CO: "🇨🇴", PE: "🇵🇪", TR: "🇹🇷", SA: "🇸🇦", AE: "🇦🇪",
  NZ: "🇳🇿", NL: "🇳🇱", SE: "🇸🇪", NO: "🇳🇴", DK: "🇩🇰",
  PL: "🇵🇱", CH: "🇨🇭", AT: "🇦🇹", BE: "🇧🇪", GR: "🇬🇷",
}

// Detect operator based on IP class and pattern (simplified)
function detectOperator(ip: string): string {
  const ipParts = ip.split('.')
  const firstOctet = parseInt(ipParts[0])

  // Simplified operator detection based on IP ranges
  if (firstOctet >= 1 && firstOctet <= 9) return "Level 3 Communications"
  if (firstOctet >= 10 && firstOctet <= 19) return "Private Network"
  if (firstOctet >= 20 && firstOctet <= 29) return "AT&T"
  if (firstOctet >= 30 && firstOctet <= 39) return "Verizon"
  if (firstOctet >= 40 && firstOctet <= 49) return "Orange"
  if (firstOctet >= 50 && firstOctet <= 59) return "Telefónica"
  if (firstOctet >= 60 && firstOctet <= 69) return "Telecom Italia"
  if (firstOctet >= 70 && firstOctet <= 79) return "BT Group"
  if (firstOctet >= 80 && firstOctet <= 89) return "China Unicom"
  if (firstOctet >= 90 && firstOctet <= 99) return "China Telecom"
  if (firstOctet >= 100 && firstOctet <= 109) return "Indosat (Ooredoo)"
  if (firstOctet >= 110 && firstOctet <= 119) return "Telkomsel"
  if (firstOctet >= 120 && firstOctet <= 129) return "XL Axiata"
  if (firstOctet >= 130 && firstOctet <= 139) return "Tri"
  if (firstOctet >= 140 && firstOctet <= 149) return "Smartfren"
  if (firstOctet >= 150 && firstOctet <= 159) return "Axis"
  if (firstOctet >= 160 && firstOctet <= 169) return "Bolt"
  if (firstOctet >= 170 && firstOctet <= 179) return "Hutchison (3)"
  if (firstOctet >= 180 && firstOctet <= 189) return "Globe (PH)"
  if (firstOctet >= 190 && firstOctet <= 199) return "PLDT (PH)"
  if (firstOctet >= 200 && firstOctet <= 209) return "Vodafone"
  if (firstOctet >= 210 && firstOctet <= 219) return "NTT DoCoMo"
  if (firstOctet >= 220 && firstOctet <= 223) return "Reserved"
  return "Unknown Operator"
}

export async function getUserInfo(): Promise<UserInfo> {
  try {
    // Try using cloudflare's trace API (open and free)
    const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace')
    const text = await response.text()
    
    const lines = text.split('\n')
    const data: Record<string, string> = {}
    
    lines.forEach(line => {
      const [key, value] = line.split('=')
      if (key && value) {
        data[key] = value
      }
    })

    const ip = data.ip || 'Unknown'
    const countryCode = data.colo?.substring(0, 2) || data.country || 'US'
    const country = data.country || 'United States'
    const flag = countryFlags[countryCode] || '🌍'
    const operator = detectOperator(ip)

    return {
      ip,
      country,
      countryCode,
      flag,
      operator,
    }
  } catch (error) {
    // Fallback values if API fails
    return {
      ip: 'Private',
      country: 'Unknown',
      countryCode: 'XX',
      flag: '🌍',
      operator: 'Unknown Operator',
    }
  }
}
