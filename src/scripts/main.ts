import 'normalize.css/normalize.css'
import 'swiper/swiper-bundle.css'

import '../styles/style.scss'

const app = document.querySelector<HTMLDivElement>('#app')

function fillNearestBootCampValue(value: string) {
  if (!app) { return value }
  const target = app.querySelector('#nearest-bootcamp-value')
  if (!target) { return value }
  target.innerHTML = value
}

function fillFunctionalBootCampValue(value: string) {
  if (!app) { return value }
  const target = app.querySelector('#nearest-functional-value')
  if (!target) { return value }
  target.innerHTML = value
}

function fillNearestBodyMindValue(value: string) {
  if (!app) { return value }
  const target = app.querySelector('#nearest-body-mind-value')
  if (!target) { return value }
  target.innerHTML = value
}

function fillFightingsBootCampValue(value: string) {
  if (!app) { return value }
  const target = app.querySelector('#nearest-fightings-value')
  if (!target) { return value }
  target.innerHTML = value
}

document.addEventListener('DOMContentLoaded', () => {
  fillNearestBootCampValue('Завтра')
  fillFunctionalBootCampValue('Сегодня')
  fillFightingsBootCampValue('Сегодня')
  fillNearestBodyMindValue('Сегодня')
})
