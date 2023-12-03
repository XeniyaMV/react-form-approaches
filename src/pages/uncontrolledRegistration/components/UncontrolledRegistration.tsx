import UncontrolledForm from './UncontrolledForm';

const UncontrolledRegistration = (): JSX.Element => {
  return (
    <section className="registration">
      <div className="container registration__wrapper">
        <h1 className="registration__title">Uncontrolled Form</h1>
        <UncontrolledForm />
      </div>
    </section>
  );
};

export default UncontrolledRegistration;
