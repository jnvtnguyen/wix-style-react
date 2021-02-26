import * as Icons from 'wix-ui-icons-common';
import * as SystemIcons from 'wix-ui-icons-common/system';
import * as wsr from '../../src/index';
import * as editorX from '../../src/Themes/editorX';
import * as businessDashboard from '../../src/Themes/businessDashboard';
import * as floatingPanels from '../../src/Themes/floatingPanels';
import AtlasAddressInput from '../../src/AtlasAddressInput';

const Endpoints = {
  '/api/table': [
    { firstName: 'Meghana', lastName: 'Bishop' },
    { firstName: 'Sara', lastName: 'Porter' },
    { firstName: 'Deborah', lastName: 'Rhodes' },
    { firstName: 'Walter', lastName: 'Jenning' },
  ],
};

const StorybookUtils = {
  fetch: api =>
    new Promise((resolve, reject) => {
      if (Endpoints[api]) {
        return resolve(Endpoints[api]);
      }
      return resolve(null);
    }),
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
