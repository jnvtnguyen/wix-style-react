const files = [
  ['Accordion.bundle.min.js', 33],
  ['AddItem.bundle.min.js', 44],
  ['AutoComplete.bundle.min.js', 71],
  ['AutoCompleteComposite.bundle.min.js', 74],
  ['Avatar.bundle.min.js', 26],
  ['Badge.bundle.min.js', 13],
  ['BadgeSelect.bundle.min.js', 54],
  ['BadgeSelectItemBuilder.bundle.min.js', 9],
  ['BarChart.bundle.min.js', 43],
  ['Box.bundle.min.js', 5],
  ['Breadcrumbs.bundle.min.js', 11],
  ['Button.bundle.min.js', 10],
  ['Calendar.bundle.min.js', 72],
  ['CalendarPanel.bundle.min.js', 75],
  ['CalendarPanelFooter.bundle.min.js', 79],
  ['Card.bundle.min.js', 23],
  ['CardGalleryItem.bundle.min.js', 65],
  ['Carousel.bundle.min.js', 68],
  ['Checkbox.bundle.min.js', 44],
  ['CircularProgressBar.bundle.min.js', 34],
  ['CloseButton.bundle.min.js', 15],
  ['Collapse.bundle.min.js', 9],
  ['ColorInput.bundle.min.js', 81],
  ['ColorPicker.bundle.min.js', 80],
  ['ComposerHeader.bundle.min.js', 20],
  ['ContactItemBuilder.bundle.min.js', 30],
  ['CounterBadge.bundle.min.js', 8],
  ['DataTable.bundle.min.js', 57],
  ['DateInput.bundle.min.js', 75],
  ['DatePicker.bundle.min.js', 94],
  ['Divider.bundle.min.js', 4],
  ['Dropdown.bundle.min.js', 78],
  ['DropdownBase.bundle.min.js', 50],
  ['DropdownLayout.bundle.min.js', 48],
  ['EditableSelector.bundle.min.js', 75],
  ['EditableTitle.bundle.min.js', 63],
  ['EmptyState.bundle.min.js', 10],
  ['EndorseContentLayout.bundle.min.js', 9],
  ['ErrorIndicator.bundle.min.js', 41],
  ['FilePicker.bundle.min.js', 50],
  ['FillButton.bundle.min.js', 52],
  ['FillPreview.bundle.min.js', 18],
  ['FloatingHelper.bundle.min.js', 49],
  ['FloatingNotification.bundle.min.js', 25],
  ['FormField.bundle.min.js', 42],
  ['FullTextView.bundle.min.js', 31],
  ['GenericModalLayout.bundle.min.js', 4],
  ['GoogleAddressInput.bundle.min.js', 73],
  ['GoogleAddressInputWithLabel.bundle.min.js', 75],
  ['GooglePreview.bundle.min.js', 9],
  ['Grid.bundle.min.js', 8],
  ['Heading.bundle.min.js', 8],
  ['Highlighter.bundle.min.js', 4],
  ['IconButton.bundle.min.js', 14],
  ['ImageViewer.bundle.min.js', 58],
  ['InfoIcon.bundle.min.js', 41],
  ['Input.bundle.min.js', 62],
  ['InputArea.bundle.min.js', 44],
  ['InputWithLabel.bundle.min.js', 64],
  ['InputWithOptions.bundle.min.js', 71],
  ['Label.bundle.min.js', 8],
  ['LabelledElement.bundle.min.js', 10],
  ['Layout.bundle.min.js', 3],
  ['LinearProgressBar.bundle.min.js', 33],
  ['ListItemAction.bundle.min.js', 13],
  ['Loader.bundle.min.js', 44],
  ['MediaOverlay.bundle.min.js', 14],
  ['Modal.bundle.min.js', 11],
  ['ModalPreviewLayout.bundle.min.js', 46],
  ['ModalSelectorLayout.bundle.min.js', 84],
  ['MultiSelect.bundle.min.js', 100],
  ['MultiSelectCheckbox.bundle.min.js', 74],
  ['MultiSelectComposite.bundle.min.js', 103],
  ['NestableList.bundle.min.js', 29],
  ['NoBorderInput.bundle.min.js', 63],
  ['Notification.bundle.min.js', 29],
  ['NumberInput.bundle.min.js', 63],
  ['Page.bundle.min.js', 36],
  ['PageHeader.bundle.min.js', 26],
  ['Popover.bundle.min.js', 29],
  ['PopoverMenu.bundle.min.js', 45],
  ['PopoverMenuItem.bundle.min.js', 10],
  ['Proportion.bundle.min.js', 3],
  ['RadioGroup.bundle.min.js', 13],
  ['Range.bundle.min.js', 100],
  ['RichTextInputArea.bundle.min.js', 166],
  ['Search.bundle.min.js', 74],
  ['SectionHelper.bundle.min.js', 24],
  ['SegmentedToggle.bundle.min.js', 43],
  ['Selector.bundle.min.js', 47],
  ['Sidebar.bundle.min.js', 7],
  ['SidebarDivider.bundle.min.js', 7],
  ['SidebarHeader.bundle.min.js', 11],
  ['SidebarSectionItem.bundle.min.js', 15],
  ['SidebarSectionTitle.bundle.min.js', 10],
  ['Skeleton.bundle.min.js', 5],
  ['Slider.bundle.min.js', 45],
  ['SocialPreview.bundle.min.js', 9],
  ['SortableList.bundle.min.js', 30],
  ['StatisticsWidget.bundle.min.js', 47],
  ['StatsWidget.bundle.min.js', 70],
  ['Stepper.bundle.min.js', 15],
  ['Swatches.bundle.min.js', 86],
  ['Table.bundle.min.js', 68],
  ['TableActionCell.bundle.min.js', 65],
  ['TableToolbar.bundle.min.js', 14],
  ['Tabs.bundle.min.js', 42],
  ['Tag.bundle.min.js', 21],
  ['Text.bundle.min.js', 8],
  ['TextButton.bundle.min.js', 14],
  ['Thumbnail.bundle.min.js', 14],
  ['TimeInput.bundle.min.js', 84],
  ['TimeTable.bundle.min.js', 74],
  ['ToggleButton.bundle.min.js', 43],
  ['ToggleSwitch.bundle.min.js', 17],
  ['Tooltip.bundle.min.js', 40],
  ['SocialButton.bundle.min.js', 17],
];

module.exports = {
  bundleSize: {
    files: files.map(([name, size]) => ({
      maxSize: `${size}kb`,
      glob: `.perfer/dist/statics/${name}`,
    })),
  },
};