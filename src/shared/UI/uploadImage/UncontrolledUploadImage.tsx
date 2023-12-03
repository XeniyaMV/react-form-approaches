import { forwardRef, useRef } from 'react';
import getFullClassName from '../../helpers/getFullClassName';
import { UploadImageProps } from '../../types';
import userIcon from '../../../assets/User_box_light.svg';

const UncontrolledUploadImage = forwardRef<HTMLInputElement, UploadImageProps>((props, ref): JSX.Element => {
  const fullClassName = getFullClassName('uppload-image', props.additionalClassName);

  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleFileChange = (): void => {
    if (ref && typeof ref !== 'function') {
      const file = ref.current?.files?.[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e): void => {
          if (e.target && e.target.result) {
            const imagePreview = e.target.result.toString();
            if (imageRef.current) {
              imageRef.current.src = imagePreview;
            }
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div className={fullClassName}>
      <div className="uppload-image__img-placeholder">
        <img className="image" ref={imageRef} src={props.defaultSrc || userIcon} alt="user icon" />
      </div>
      <div className="uppload-image__upload">
        <label className="uppload-image__label" htmlFor={props.id}>
          {props.label && `${props.label}: `}
        </label>
        <input
          id={props.id}
          ref={ref}
          className="uppload-image__button"
          name={props.name}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
});

export default UncontrolledUploadImage;
