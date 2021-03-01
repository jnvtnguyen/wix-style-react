import * as React from 'react';
import { TPAComponentProps } from '../../types';

import { Locale as DateFnsLocale } from 'date-fns';
import WSRCalendar, {
  LanguageType as WSRLanguageType,
} from 'wix-style-react/dist/src/Calendar';

import { st, classes } from './DatePicker.st.css';
import { DATA_HOOKS } from './constants';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';

export type LanguageType = WSRLanguageType;
export type Locale = LanguageType | DateFnsLocale;
export type FirstDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface dateIndicationProps {
  date: Date;
  isSelected: boolean;
}

export interface DatePickerProps extends TPAComponentProps {
  /** The selected date */
  value?: Date | string;
  /** Callback function called with a Date or a Range whenever the user selects a day in the calendar */
  onChange(selectedDays: string | Date): void;
  /** Callback function called with the Date of the first day of the month whenever the user selects a month in the calendar */
  onMonthChange?(monthStart: Date): void;
  /** DatePicker instance locale */
  locale?: Locale;
  /** When true, past dates would be unselectable */
  excludePastDates?: boolean;
  /**
   * Determines selectable dates
   *  * `param` {Date} `date` - a date to check
   *  * `return` {boolean} - true if `date` should be selectable, false otherwise
   */
  filterDate?(date: Date): boolean;
  /** First day of the week, allowing only from 0 to 6 (Sunday to Saturday) */
  firstDayOfWeek?: FirstDayOfWeek;
  /** Displays a selectable monthDropdown */
  showMonthDropdown?: boolean;
  /** Displays a selectable yearDropdown */
  showYearDropdown?: boolean;
  /**
   ##### This function allows you to add an indication under a specific date.
   The function should return the indication node of a specific date or null if this day doesn't have an indication.
   * `param` {date: Date, isSelected: boolean } `date` - a date, `isSelected` - whether this date is the selected date
   * `return` {React.node} - the indication node of a specific date or null if this day doesn't have an indication.
   */
  dateIndication?: React.FC<dateIndicationProps>;
  /** Defines a string value that labels the Date Picker element. Optional. */
  'aria-label'?: string;
  /** Identifies the element that labels the Date Picker element. Optional. */
  'aria-labelledby'?: string;
  /** Defines a string value that labels the left arrow in calendar header */
  leftArrowAriaLabel?: string;
  /**  Identifies the element that labels the left arrow in calendar header */
  leftArrowAriaLabelledBy?: string;
  /** Defines a string value that labels the right arrow in calendar header */
  rightArrowAriaLabel?: string;
  /** Identifies the element that labels the right arrow in calendar header */
  rightArrowAriaLabelledBy?: string;
  /** Defines a string value that labels the months dropdown in calendar header */
  monthDropdownAriaLabel?: string;
  /** Identifies the element that labels the months dropdown in calendar header */
  monthDropdownAriaLabelledBy?: string;
  /** Defines a string value that labels the years dropdown in calendar header */
  yearDropdownAriaLabel?: string;
  /** Identifies the element that labels the years dropdown in calendar header */
  yearDropdownAriaLabelledBy?: string;
}

interface DefaultProps {
  locale: Locale;
  excludePastDates: boolean;
  filterDate(date: Date): boolean;
  firstDayOfWeek: FirstDayOfWeek;
  showMonthDropdown: boolean;
  showYearDropdown: boolean;
  dateIndication?: React.FC<dateIndicationProps>;
}

/** The DatePicker allows a user to select a specific date. */
export class DatePicker extends React.Component<DatePickerProps> {
  static displayName = 'DatePicker';
  static defaultProps: DefaultProps = {
    locale: 'en',
    excludePastDates: false,
    filterDate: () => true,
    firstDayOfWeek: 1,
    showMonthDropdown: false,
    showYearDropdown: false,
    dateIndication: ({ date: Date, isSelected: boolean }) => null,
  };

  render() {
    const {
      className,
      value,
      onChange,
      onMonthChange,
      locale,
      excludePastDates,
      filterDate,
      firstDayOfWeek,
      showMonthDropdown,
      showYearDropdown,
      dateIndication,
      ['aria-label']: ariaLabel,
      ['aria-labelledby']: ariaLabelledBy,
      leftArrowAriaLabel,
      leftArrowAriaLabelledBy,
      rightArrowAriaLabel,
      rightArrowAriaLabelledBy,
      monthDropdownAriaLabel,
      monthDropdownAriaLabelledBy,
      yearDropdownAriaLabel,
      yearDropdownAriaLabelledBy,
    } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ rtl }) => (
          <div
            className={st(classes.root, className)}
            data-hook={this.props['data-hook']}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            role="region"
          >
            <WSRCalendar
              className={classes.calendar}
              dataHook={DATA_HOOKS.WSR_CALENDAR}
              value={value}
              onChange={onChange}
              onMonthChange={onMonthChange}
              locale={locale}
              excludePastDates={excludePastDates}
              filterDate={filterDate}
              firstDayOfWeek={firstDayOfWeek}
              showMonthDropdown={showMonthDropdown}
              showYearDropdown={showYearDropdown}
              rtl={rtl}
              selectionMode="day"
              numOfMonths={1}
              autoFocus={false}
              dateIndication={dateIndication}
              leftArrowAriaLabel={leftArrowAriaLabel}
              leftArrowAriaLabelledBy={leftArrowAriaLabelledBy}
              rightArrowAriaLabel={rightArrowAriaLabel}
              rightArrowAriaLabelledBy={rightArrowAriaLabelledBy}
              monthDropdownAriaLabel={monthDropdownAriaLabel}
              monthDropdownAriaLabelledBy={monthDropdownAriaLabelledBy}
              yearDropdownAriaLabel={yearDropdownAriaLabel}
              yearDropdownAriaLabelledBy={yearDropdownAriaLabelledBy}
            />
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
