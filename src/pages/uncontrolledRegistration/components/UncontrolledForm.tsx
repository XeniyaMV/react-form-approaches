import Input from '../../../shared/UI/input/Input';
import AutocompleteSelect from '../../../shared/UI/autocompleteSelect/AutocompleteSelect';
import UncontrolledUploadImage from '../../../shared/UI/uploadImage/UncontrolledUploadImage';
import RadioSelect from '../../../shared/UI/radioSelect/RadioSelect';
import COUNTRIES from '../../../shared/constants/COUNTRIES';
import GENDERS from '../../../shared/constants/GENDERS';
import { useRef, useState } from 'react';
import { useAppDispatch } from '../../../app/helpers/hooks';
import { allFieldsUpdated } from '../../../app/helpers/reducers/uncontrolledFormSlice';
import { useAppSelector } from '../../../app/helpers/hooks';
import { UncontrolledFormInfo } from '../../../app/helpers/reducers/uncontrolledFormSlice';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../../shared/UI/errorMessage/ErrorMessage';

const UncontrolledForm = (): JSX.Element => {
  const nameField = useRef<HTMLInputElement | null>(null);
  const ageField = useRef<HTMLInputElement | null>(null);
  const emailField = useRef<HTMLInputElement | null>(null);
  const passwordField = useRef<HTMLInputElement | null>(null);
  const confirmPasswordField = useRef<HTMLInputElement | null>(null);
  const countryField = useRef<HTMLInputElement | null>(null);
  const genderField = useRef<HTMLInputElement | null>(null);
  const termsField = useRef<HTMLInputElement | null>(null);
  const imageField = useRef<HTMLInputElement | null>(null);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('error');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const uncontrolledFormFields = useAppSelector((state) => state.uncontrolledForm.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const name = nameField.current?.value;
    const age = ageField.current?.value;
    const email = emailField.current?.value;
    const password = passwordField.current?.value;
    const confirmPassword = confirmPasswordField.current?.value;
    const terms = termsField.current?.checked;
    const gender = genderField.current?.value;
    const country = countryField.current?.value;
    const imageFile = imageField.current?.files?.[0];
    const fields: UncontrolledFormInfo = {};

    if (password === confirmPassword) {
      if (terms) {
        setIsError(false);
        fields.name = name || uncontrolledFormFields.name;
        fields.age = age ? +age : uncontrolledFormFields.age;
        fields.country = country || uncontrolledFormFields.country;
        fields.email = email || uncontrolledFormFields.email;
        fields.gender = gender || uncontrolledFormFields.gender;
        fields.password = password || uncontrolledFormFields.password;
        fields.terms = terms || uncontrolledFormFields.terms;

        if (imageFile) {
          const reader = new FileReader();
          reader.onload = (e): void => {
            if (e.target && e.target.result) {
              const imagePreview = e.target.result.toString();
              dispatch(allFieldsUpdated({ ...fields, imageSrc: imagePreview }));
              navigate('/');
            }
          };
          reader.readAsDataURL(imageFile);
        } else {
          dispatch(allFieldsUpdated({ ...fields, imageSrc: uncontrolledFormFields.imageSrc }));
          navigate('/');
        }
      } else {
        setErrorMessage('terms are not accepted');
        setIsError(true);
      }
    } else {
      setErrorMessage('passwords are not matched');
      setIsError(true);
    }
  };

  return (
    <form className="form registration-form" onSubmit={handleSubmit}>
      <UncontrolledUploadImage
        id="photo"
        name="photo"
        ref={imageField}
        defaultSrc={uncontrolledFormFields.imageSrc}
        additionalClassName="form__input registration-form__input registration-form__input_image"
      />
      <Input
        id="name"
        name="name"
        ref={nameField}
        defaultValue={uncontrolledFormFields.name}
        additionalClassName="form__input registration-form__input registration-form__input_name"
        label="Name"
        type="text"
      />
      <Input
        id="age"
        name="age"
        ref={ageField}
        defaultValue={uncontrolledFormFields.age ? uncontrolledFormFields.age.toString() : undefined}
        additionalClassName="form__input registration-form__input registration-form__input_age"
        label="Age"
        type="number"
      />
      <Input
        id="email"
        name="email"
        ref={emailField}
        defaultValue={uncontrolledFormFields.email}
        additionalClassName="form__input registration-form__input registration-form__input_email"
        label="Email"
        type="email"
      />
      <Input
        id="password"
        name="password"
        ref={passwordField}
        defaultValue={uncontrolledFormFields.password}
        additionalClassName="form__input registration-form__input registration-form__input_password"
        label="Password"
        type="text"
      />
      <Input
        id="confirm-password"
        name="confirm-password"
        ref={confirmPasswordField}
        additionalClassName="form__input registration-form__input registration-form__input_confirm-password"
        label="Confirm Password"
        placeholder="Password"
        type="text"
      />
      <AutocompleteSelect
        id="country"
        name="country"
        ref={countryField}
        defaultValue={uncontrolledFormFields.country}
        additionalClassName="form__input registration-form__input registration-form__input_country"
        label="Country"
        options={COUNTRIES}
      />
      <RadioSelect
        additionalClassName="form__input-radio registration-form__input-radio registration-form__input-radio_gender"
        ref={genderField}
        name="gender"
        label="Gender"
        options={GENDERS}
      />
      <Input
        id="terms"
        name="terms"
        ref={termsField}
        additionalClassName="form__input-checkbox registration-form__input-checkbox registration-form__input-checkbox_terms"
        label="I agree to the terms & conditions"
        type="checkbox"
      />
      <button className="button form__submit registration-form__submit">Save</button>
      {isError && (
        <ErrorMessage additionalClassName="form__error registration-form__error" errorMessage={errorMessage} />
      )}
    </form>
  );
};

export default UncontrolledForm;
