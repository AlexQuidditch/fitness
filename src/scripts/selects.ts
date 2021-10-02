import Choices, { Choices as IChoices } from 'choices.js';

export function useSelect(selectorOrElement: string) {
  const $el = document.querySelector(selectorOrElement)
  if (!$el) { return }

  const options = Array
    .from($el.children) as HTMLOptionElement[]

  const choices = options
    .map<IChoices.Choice>((item, i) => ({
      id: i, label: item.textContent || '',
      value: item.value || '',
      customProperties: {
        photo: item.getAttribute('data-photo') || ''
      }
    }))

  const multipleCancelButton = new Choices(
    selectorOrElement,
    {
      searchEnabled: false,
      duplicateItemsAllowed: false,
      itemSelectText: '',
      choices: [],
      callbackOnInit() {
        this.clearChoices()
        this.setChoices(choices)
      },
      callbackOnCreateTemplates(template) {
        const { itemSelectText } = this;

        return {
          choice(classes, data) {
            const img = data.customProperties?.photo ? `<img src="${data.customProperties.photo}" />` : ''
            return template(`
              <div
                class="${classes?.item} ${classes?.itemChoice} ${data.disabled ? classes?.itemDisabled : classes?.itemSelectable}"
                data-select-text="${itemSelectText}"
                data-choice
                ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'}
                data-id="${data.id}"
                data-value="${data.value}"
                role="option"
              >
                ${data.label} ${img}
              </div>
            `);
          },
        };
      }
    },
  );
  return multipleCancelButton;
}
