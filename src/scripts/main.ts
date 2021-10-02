import 'normalize.css/normalize.css'
import 'choices.js/public/assets/styles/choices.min.css';

import '../styles/style.scss'

import { useGallery, initSlidersBySelectorList } from './gallery'
import { closeDialogs, setTextFieldError, useCloseDialog, useToggleDialog, resetTextField, initMaskedTextFields, useChargeDialog, initCleanTextFieldButtons } from './dialogs'
import { useSelect } from './selects';

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

  initSlidersBySelectorList([
    '.trainers-list-controls__button',
  ])

  document.addEventListener('keydown', e => {
    const isEsc = e.key.toLowerCase() === 'escape'
    if (!isEsc) { return }
    closeDialogs()
  })

  initMaskedTextFields(
    'input[name=birthday]',
    {
      mask: Date,
      min: new Date(1920, 0, 1),
      max: new Date(2020, 0, 1),
      lazy: false
    }
  )

  initCleanTextFieldButtons()

  initMaskedTextFields(
    'input[type=tel]',
    { mask: '+{7} (000) 000-00-00' }
  )

  useSelect('.custom-selector')

  Array
    .from(document.querySelectorAll('[data-target-dialog]'))
    .forEach(useToggleDialog)

  Array
    .from(document.querySelectorAll('[data-charge-dialog]'))
    .forEach(useChargeDialog)

  Array
    .from(document.querySelectorAll('[data-dialog-action=close]'))
    .forEach(useCloseDialog)

  Array
    .from(document.querySelectorAll('a.tooltip-container'))
    .forEach(el => el.addEventListener('click', e => e.preventDefault()))
})

// @ts-ignore
window.setTextFieldError = setTextFieldError
// @ts-ignore
window.resetTextField = resetTextField
// @ts-ignore
window.useChargeDialog = useChargeDialog
