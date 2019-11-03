import * as React from 'react';
import style from './Card.st.css';
import {
  TPAComponentsConsumer,
  TPAComponentsContext,
} from '../TPAComponentsConfig';
import { deprecationLog } from '../../common/deprecationLog';
import { NewCard, NewCardProps } from '../NewCard';
import { TPAComponentProps } from '../../types';

export enum CardRatioOptions {
  RATIO_100 = '100',
  RATIO_50_50 = '50',
  RATIO_40_60 = '40',
  RATIO_30_70 = '30',
}

export interface CardProps extends TPAComponentProps, NewCardProps {
  media?: React.ReactNode;
  info?: React.ReactNode;
  ratio?: CardRatioOptions;
  flippedRatio?: boolean;
  /** puts the media slot on the opposite of the info slot. disabled on mobile */
  invertInfoPosition?: boolean;
  stacked?: boolean;
  /** puts the media slot on top of the info slot. disables the `ratio` behavior */
  mediaAspectRatio?: number;
  /** Use new Card API */
  upgrade?: boolean;
}

export class Card extends React.Component<CardProps> {
  static contextType = TPAComponentsContext;
  static displayName = 'Card';
  static MIN_WIDTH = 700;
  static MIN_WIDTH_MOBILE = 130;
  static Container = NewCard.Container;

  static defaultProps = {
    ratio: CardRatioOptions.RATIO_50_50,
    flippedRatio: false,
    invertInfoPosition: false,
    stacked: false,
  };

  componentDidMount(): void {
    if (!this.props.upgrade) {
      deprecationLog(
        'The current `Card` component API will be deprecated in the next major version. Please use the `upgrade` prop in order to use the new API.\nYou can view the new API here: https://wix-wix-ui-tpa.surge.sh/?path=/story/components--newcard',
      );
    }
  }

  private getRatio() {
    const { mediaAspectRatio, stacked } = this.props;
    if (mediaAspectRatio) {
      return mediaAspectRatio && `${Math.round(100 / mediaAspectRatio)}%`;
    }

    return `${stacked ? 100 : 0}%`;
  }

  render() {
    const {
      info,
      media,
      ratio,
      invertInfoPosition,
      flippedRatio,
      stacked,
      mediaAspectRatio,
      upgrade,
      ...rest
    } = this.props;
    return upgrade ? (
      <NewCard {...this.props} />
    ) : (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div
            {...style(
              'root',
              {
                ratio: media ? ratio : CardRatioOptions.RATIO_100,
                invertInfoPosition,
                flippedRatio,
                stacked,
                mobile,
                mediaAspectRatio: !!mediaAspectRatio || stacked,
              },
              rest,
            )}
          >
            {media && ratio !== CardRatioOptions.RATIO_100 && (
              <div
                className={style.mediaWrapper}
                style={{ paddingTop: this.getRatio() }}
              >
                <div className={style.mediaContainer}>{media}</div>
              </div>
            )}
            {info && <div className={style.infoContainer}>{info}</div>}
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
