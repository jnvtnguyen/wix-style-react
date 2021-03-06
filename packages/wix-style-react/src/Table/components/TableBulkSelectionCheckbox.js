import { BulkSelectionConsumer } from '../BulkSelection/BulkSelectionConsumer';
import React from 'react';
import { BulkSelectionState } from '../BulkSelection';
import Checkbox from '../../Checkbox/Checkbox';

export const TableBulkSelectionCheckbox = ({ dataHook, children }) => {
  return (
    <BulkSelectionConsumer
      consumerCompName="Table.BulkSelectionCheckbox"
      providerCompName="Table"
    >
      {({
        bulkSelectionState,
        toggleAll,
        selectionDisabled,
        deselectRowsByDefault,
      }) => (
        <Checkbox
          dataHook={dataHook}
          checked={bulkSelectionState === BulkSelectionState.ALL}
          indeterminate={bulkSelectionState === BulkSelectionState.SOME}
          disabled={selectionDisabled === true}
          onChange={() =>
            toggleAll(deselectRowsByDefault, 'TableBulkSelectionCheckbox')
          }
        >
          {children}
        </Checkbox>
      )}
    </BulkSelectionConsumer>
  );
};
