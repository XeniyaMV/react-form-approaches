import Input from '../../../shared/UI/input/Input';
import UncontrolledAutocompleteSelect from '../../../shared/UI/autocompleteSelect/UncontrolledAutocompleteSelect';
import UncontrolledUploadImage from '../../../shared/UI/uploadImage/UncontrolledUploadImage';
import RadioSelect from '../../../shared/UI/radioSelect/RadioSelect';
import COUNTRIES from '../../../shared/constants/COUNTRIES';
import GENDERS from '../../../shared/constants/GENDERS';

const UncontrolledForm = (): JSX.Element => {
  return (
    <form className="form registration-form" onSubmit={(event): void => event.preventDefault()}>
      <UncontrolledUploadImage
        id="photo"
        name="photo"
        additionalClassName="form__input registration-form__input registration-form__input_image"
      />
      <Input
        id="name"
        name="name"
        additionalClassName="form__input registration-form__input registration-form__input_name"
        label="Name"
        type="text"
      />
      <Input
        id="age"
        name="age"
        additionalClassName="form__input registration-form__input registration-form__input_age"
        label="Age"
        type="number"
      />
      <Input
        id="email"
        name="email"
        additionalClassName="form__input registration-form__input registration-form__input_email"
        label="Email"
        type="email"
      />
      <Input
        id="password"
        name="password"
        additionalClassName="form__input registration-form__input registration-form__input_password"
        label="Password"
        type="text"
      />
      <Input
        id="confirm-password"
        name="confirm-password"
        additionalClassName="form__input registration-form__input registration-form__input_confirm-password"
        label="Confirm Password"
        placeholder="Password"
        type="text"
      />
      <UncontrolledAutocompleteSelect
        id="country"
        name="country"
        additionalClassName="form__input registration-form__input registration-form__input_country"
        label="Country"
        options={COUNTRIES}
      />
      <RadioSelect
        additionalClassName="form__input-radio registration-form__input-radio registration-form__input-radio_gender"
        name="gender"
        label="Gender"
        options={GENDERS}
      />
      <Input
        id="terms"
        name="terms"
        additionalClassName="form__input-checkbox registration-form__input-checkbox registration-form__input-checkbox_terms"
        label="I agree to the terms & conditions"
        type="checkbox"
      />
      <button className="button form__submit registration-form__submit">Save</button>
    </form>
  );
};

export default UncontrolledForm;
