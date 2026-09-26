import { IFormErrors } from '../../types/users';

interface INetworkFormErrors {
  formErrors: IFormErrors;
}

export const NetworkFormErrors = ({ formErrors }: INetworkFormErrors) => {
  return (
    <div className='form__validation-error validation-error'>
      {formErrors.message !== 'The token expired.' ? (
        <>
          <strong className='validation-error__message'>
            {formErrors.fails.length !== 0
              ? `${formErrors.message}:`
              : formErrors.message}
          </strong>
          {formErrors.fails.length !== 0 && (
            <ul className='validation-error__list'>
              {formErrors.fails.map((el, i) => (
                <li key={i} className='validation-error__item'>
                  <p className='validation-error__text'>{el}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <strong className='validation-error__message'>
          Something went wrong, please try submitting the form again.
        </strong>
      )}
    </div>
  );
};
