import 'normalize.css/normalize.css'

import '../styles/style.scss'

import { useGallery } from './gallery'
import { useScrollBy } from './scroll'
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

  const $menuButton = document.getElementById('menu-button')
  const $sidebarEl = document.getElementById('sidebar')

  if (!$menuButton) { return }

  $menuButton.addEventListener('click', e => {
    e.preventDefault()
    if (!$menuButton || !$sidebarEl) { return }
    $menuButton.classList.toggle('is-active')
    $sidebarEl.classList.toggle('_active')
    document.documentElement.classList.toggle('_no-scroll')
  })

  const scrollButtons = Array.from(document.querySelectorAll('.trainers-list-controls__button'))

  scrollButtons.forEach(button => {
    const target = button.getAttribute('data-target')
    const direction = button.getAttribute('data-direction')
    if (!target || !direction) { return }

    button.addEventListener('click', e => {
      const $target = document.querySelector(target)
      if (!$target) { return }
      useScrollBy($target, { left: direction === 'right' ? 100 : -100 })
    })
  })

  Array
    .from(document.querySelectorAll('a.tooltip-container'))
    .forEach(el => el.addEventListener('click', e => e.preventDefault()))
})
