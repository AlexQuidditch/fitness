import 'normalize.css/normalize.css'

import '../styles/style.scss'

import { useGallery } from './gallery'
import { useSchedule } from './schedule'

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

function fillPersonalBootCampValue(value: string) {
  if (!app) { return value }
  const target = app.querySelector('#nearest-personal-value')
  if (!target) { return value }
  target.innerHTML = value
}


document.addEventListener('DOMContentLoaded', () => {
  fillNearestBootCampValue('Завтра')
  fillFunctionalBootCampValue('Сегодня')
  fillFightingsBootCampValue('Сегодня')
  fillNearestBodyMindValue('Сегодня')
  fillPersonalBootCampValue('Сегодня')

  useGallery('#hero-gallery')

  const $el = document.getElementById('menu-button')
  const $sidebarEl = document.getElementById('sidebar')

  if (!$el) { return }

  $el.addEventListener('click', e => {
    e.preventDefault()
    if (!$el || !$sidebarEl) { return }
    $el.classList.toggle('is-active')
    $sidebarEl.classList.toggle('_active')
    document.documentElement.classList.toggle('_no-scroll')
  })
})
