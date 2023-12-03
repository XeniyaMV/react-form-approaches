import { useRef } from 'react';
import getFullClassName from '../../helpers/getFullClassName';
import { UploadImageProps } from '../../types';
import userIcon from '../../../assets/User_box_light.svg';

const UncontrolledUploadImage = (props: UploadImageProps): JSX.Element => {
  const fullClassName = getFullClassName('uppload-image', props.additionalClassName);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleFileChange = (): void => {
    const file = inputRef.current?.files?.[0];

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
  };

  return (
    <div className={fullClassName}>
      <div className="uppload-image__img-placeholder">
        <img className="image" ref={imageRef} src={userIcon} alt="user icon" />
      </div>
      <div className="uppload-image__upload">
        <label className="uppload-image__label" htmlFor={props.id}>
          {props.label && `${props.label}: `}
        </label>
        <input
          id={props.id}
          ref={inputRef}
          className="uppload-image__button"
          name={props.name}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default UncontrolledUploadImage;
