import axios from 'axios'

export function createCallback(handler) {
  const name = `_initMap_${Date.now()}`
  window[name] = () => {
    handler(window.google.maps)
    delete window[name]
  }
  return name
}

export async function fetchMapData(url, initMap) {
  const { data } = await axios.post(url)
  const callbackName = createCallback((maps) => initMap(maps, data.payload))

  if (window.google?.maps) {
    window[callbackName]()
    return
  }

  const script = document.createElement('script')
  script.src = `https://maps.google.com/maps/api/js?key=AIzaSyCbHpg1jaQ718TpR3KQL6VvrZ06aIGQ-rE&callback=${callbackName}`
  script.async = true
  document.head.appendChild(script)
}

const clusterSvg = (color) => `
  <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".9" r="70" />
    <circle cx="120" cy="120" opacity=".5" r="110" />
  </svg>
`

export class ClusterRenderer {
  constructor(maps, textColor, bgColor) {
    this.maps = maps
    this.setColors(textColor, bgColor)
  }

  setColors(text, bg) {
    this.textColor = text
    this.bgColor = bg
  }

  render({ count, position }) {
    const svg = btoa(clusterSvg(this.bgColor))
    return new this.maps.Marker({
      position,
      icon: {
        url: `data:image/svg+xml;base64,${svg}`,
        scaledSize: new this.maps.Size(45, 45),
      },
      label: {
        text: String(count),
        color: this.textColor,
        fontSize: '12px',
      },
      zIndex: this.maps.Marker.MAX_ZINDEX + count,
    })
  }
}
