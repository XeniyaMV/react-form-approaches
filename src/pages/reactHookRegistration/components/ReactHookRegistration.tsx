import ReactHookForm from './ReactHookForm';

const ReactHookRegistration = (): JSX.Element => {
  return (
    <section className="registration">
      <div className="container registration__wrapper">
        <h1 className="registration__title">React Hook Form</h1>
        <ReactHookForm />
      </div>
    </section>
  );
};

export default ReactHookRegistration;
