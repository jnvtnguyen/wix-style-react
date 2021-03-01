import { isFocused } from 'wix-ui-test-utils/protractor';
import buttonDriverFactory from './RadioButton/RadioButton.protractor.driver';
import { dataHooks } from '../Radio/constants';

const radioGroupDriverFactory = component => {
  const getRadioButtonLabel = index =>
    component.$$(`[data-hook="${dataHooks.label}"]`).get(index);

  const getRadioButtonRoot = index =>
    component.$$(`[data-hook="${dataHooks.icon}"]`).get(index);

  return {
    getButtonDriver: index => buttonDriverFactory(getRadioButtonRoot(index)),
    getRadioAtIndex: index => getRadioButtonLabel(index),
    selectByIndex: index => getRadioButtonLabel(index).click(),
    isRadioChecked: index =>
      component.$$(`[data-hook="${dataHooks.input}"]`).get(index).isSelected(),
    isRadioDisabled: index =>
      !!component
        .$$(`[data-hook="${dataHooks.input}"]`)
        .get(index)
        .getAttribute('disabled'),
    /**
     * @deprecated
     * @see getButtonDriver
     */
    isRadioFocused: index =>
      isFocused(
        component
          .$$(`[data-hook="${dataHooks.label}"]`)
          .get(index)
          .$(`[tabindex="0"]`),
      ),
    element: () => component,
  };
};

export default radioGroupDriverFactory;
