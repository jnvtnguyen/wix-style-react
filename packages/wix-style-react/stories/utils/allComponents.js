import * as Icons from 'wix-ui-icons-common';
import * as SystemIcons from 'wix-ui-icons-common/system';
import * as wsr from '../../src/index';
import * as editorX from '../../src/Themes/editorX';
import * as businessDashboard from '../../src/Themes/businessDashboard';
import * as floatingPanels from '../../src/Themes/floatingPanels';
import AtlasAddressInput from '../../src/AtlasAddressInput';

const Endpoints = {
  '/api/table': options => {
    const initialData = [
      { firstName: 'Meghana', lastName: 'Bishop' },
      { firstName: 'Sara', lastName: 'Porter' },
      { firstName: 'Deborah', lastName: 'Rhodes' },
      { firstName: 'Walter', lastName: 'Jenning' },
    ];

    let results = initialData;

    if (options.load) {
      results = [];
      for (let i = 0; i < options.load; i++) {
        results.push(
          initialData[
            Math.floor(Math.random() * Math.floor(initialData.length))
          ],
        );
      }
    }

    return results;
  },
};

const StorybookUtils = {
  fetch: (api, options) => {
    return new Promise(resolve => {
      if (Endpoints[api]) {
        return setTimeout(() => resolve(Endpoints[api](options)), 1000);
      }
      return resolve(null);
    });
  },
};

// Internal Wix components which depend on private Wix dependencies
const privateComponents = {
  AtlasAddressInput,
};

/*
 * This object contains all wix-style-react components including icons
 * It is used mainly for documentation in LiveCodeExample and code section.
 */
const defaultComponents = {
  ...wsr,
  ...privateComponents,
  Icons,
  SystemIcons,
  StorybookUtils,
};

export default defaultComponents;

export const floatingPanelsComponents = {
  ...defaultComponents,
  ...floatingPanels,
};

export const editorXComponents = {
  ...defaultComponents,
  ...editorX,
};

export const businessDashboardComponents = {
  ...defaultComponents,
  ...businessDashboard,
};
