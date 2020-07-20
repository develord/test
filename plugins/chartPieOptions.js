import isoCountryName from '~/plugins/isoCountry'

const chartPieOptions = (data, selectedCountry) => {
  const occurrences = data.reduce((obj, item) => {
    const country = item.holderBank.address.country.toLowerCase()
    const index = obj.findIndex(el => el.name === isoCountryName(country))
    if (index < 0) {
      obj.push({
        name: isoCountryName(country),
        y: 1,
        sliced: (selectedCountry === country) || false,
        selected: (selectedCountry === country) || false
      })
    } else {
      obj[index].y += 1
    }
    return obj
  }, [])

  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Accounts',
      colorByPoint: true,
      data: occurrences
    }]
  }
}

export default chartPieOptions
