/* eslint-disable import/first */
import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
import mapInit from 'highcharts/modules/map'
import addWorldMap from './worldmap'

stockInit(Highcharts)
mapInit(Highcharts)
addWorldMap(Highcharts)

Vue.use(HighchartsVue)
