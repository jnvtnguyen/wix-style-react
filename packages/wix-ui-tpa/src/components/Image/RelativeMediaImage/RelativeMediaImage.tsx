import * as React from 'react';
import { MediaImage } from 'wix-ui-core/media-image';
import { Dimensions, ImageProps } from '../types';
import { classes, st } from './RelativeMediaImage.st.css';

interface RelativeMediaImageProps extends Omit<ImageProps, 'width' | 'height'> {
  sourceDimensions: Dimensions;
  containerDimensions: Dimensions;
  isPlaceholderDisplayed?: boolean;
  nativeRef?: React.Ref<HTMLImageElement>;
}

const Placeholder = ({
  src,
  className,
  sourceDimensions,
  containerDimensions,
  focalPoint,
  ...imageProps
}: RelativeMediaImageProps) => (
  <MediaImage
    mediaPlatformItem={{
      uri: src,
      ...sourceDimensions,
      options: {
        focalPoint,
        filters: {
          blur: 3,
        },
      },
    }}
    className={className}
    {...containerDimensions}
    {...imageProps}
  />
);

export class RelativeMediaImage extends React.Component<RelativeMediaImageProps> {
  render() {
    const {
      src,
      className,
      sourceDimensions,
      containerDimensions,
      isPlaceholderDisplayed,
      focalPoint,
      onLoad,
      nativeRef,
      ...imageProps
    } = this.props;

    return (
      containerDimensions && (
        <>
          {isPlaceholderDisplayed && (
            <Placeholder
              src={src}
              className={st(classes.placeholder, className)}
              sourceDimensions={sourceDimensions}
              containerDimensions={containerDimensions}
              focalPoint={focalPoint}
              nativeRef={nativeRef}
              {...imageProps}
            />
          )}
          <MediaImage
            mediaPlatformItem={{
              uri: src,
              ...sourceDimensions,
              options: {
                focalPoint,
              },
            }}
            className={st(classes.root, className)}
            onLoad={onLoad}
            {...containerDimensions}
            {...imageProps}
          />
        </>
      )
    );
  }
}
