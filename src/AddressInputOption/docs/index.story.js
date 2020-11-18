import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import AddressInputOption from '..';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AddressInputOption,
  componentPath: '..',

  componentProps: {
    mainLabel: 'main label',
    secondaryLabel: 'secondary label',
    suffix: 'suffix',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AddressInputOption.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This component is responsible of transforming a given prediction object and display-props into a valid address option according to the UX guidelines.',
          }),

          importExample(`
// Use directly
import { AddressInputOption } from 'wix-style-react';
// Or use a builder
import { addressInputOptionBuilder } from 'wix-style-react';`),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A basic example',
            source: examples.basicExample,
          }),

          example({
            title: 'Option Layout',
            text: 'Addresses can be displayed in a single line or double lines',
            source: examples.optionLayout,
          }),

          example({
            title: 'Affixes',
            text:
              'Component has prefix and suffix areas. Default prefix is location icon.',
            source: examples.Affixes,
          }),

          example({
            title: 'builder example',
            text: 'AddressInputOption can be created using builders.',
            source: examples.builderExample,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};