export const trainers = {
  list: Array.from(Array(6), () => ({
    name: 'Денис Беляков',
    photo: '/src/images/belyakov.png',
    skills: [
      'персональные тренировки',
      'восстановление и реабилитация',
      'тренировка подростков',
    ],
    schedule: 'belyakov',
  })),
  options: [
    {
      text: 'Все',
      value: 'all',
    },
    {
      text: 'Боевые искусства',
      value: 'fightings',
    },
    {
      text: 'Функциональный тренинг',
      value: 'functional',
    },
    {
      text: 'Персональные тренировки',
      value: 'personal',
    },
    {
      text: 'Восстановление и реабилитация',
      value: 'recreational',
    },
    {
      text: 'Растяжка',
      value: 'bootcamp',
    },
    {
      text: 'Тренировка подростков',
      value: 'teenagers',
    },
  ],
}
