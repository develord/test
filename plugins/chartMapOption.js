import worldMap from '@highcharts/map-collection/custom/world.geo.json'
import { EventBus } from './event-bus.js'

const chartMapOption = (data) => {
  const occurrences = data.reduce((obj, item) => {
    const country = item.holderBank.address.country.toLowerCase()
    const index = obj.findIndex(el => el[0] === country)
    if (index < 0) {
      obj.push([country, 1])
    } else {
      obj[index][1] += 1
    }
    return obj
  }, [])
  return {
    chart: {
      map: worldMap,
      marginBottom: 10,
      width: 950,
      marginTop: 0,
      reflow: true,
      events: {
        load () {
          this.addSeries({
            name: 'Client',
            data: occurrences,
            allowPointSelect: true,
            cursor: 'pointer',
            joinBy: 'hc-key',
            borderColor: ' #BCCBE2',
            events: {
              click (e) {
                EventBus.$emit('select-country', {
                  country: e.point['hc-key']
                })
              }
            },
            borderWidth: 0.2,
            states: {
              hover: {
                enabled: true,
                color: '#a4edba',
                borderColor: 'gray'
              }
            },
            dataLabels: {
              enabled: false
            }
          })
        }
      }
    },
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    colorAxis: {
      min: 0
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 900
        }
      },
      {
        condition: {
          minWidth: 500
        },
        chartOptions: {
          legend: {
            enabled: true
          }
        }
      }]
    }
  }
}

export default chartMapOption
