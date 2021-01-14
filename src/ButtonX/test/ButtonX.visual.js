import React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import ButtonX from '../ButtonX';

const commonProps = {
  // use for repeated props across the tests (e.g. {buttonText: 'example'})
};

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'default', // prop variation (e.g. small)
        props: {
          // the simulation (e.g. {size: "small"})
        },
      },
    ],
  },
];

export const runTests = () => {
  visualize(ButtonX.displayName, () => {
    tests.forEach(({ describe, its }) => {
      story(describe, () => {
        its.map(({ it, props }) =>
          snap(it, () => <ButtonX {...commonProps} {...props} />),
        );
      });
    });
  });
};
