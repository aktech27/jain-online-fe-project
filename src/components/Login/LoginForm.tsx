import { useContext, useState, useEffect } from 'react';
import Logo from '../../assets/aktechtbg.webp';
import { AuthContext, ModalContext } from '../../context';
import { AuthContextTypes, LoginFormErrors, LoginFormItems, RegisterFormItems } from '../../types';

const LoginForm = () => {
  const { handleOpen, handleClose } = useContext(ModalContext);
  const { dispatch } = useContext(AuthContext);
  const defaultRegisterFormState: LoginFormItems = {
    email: '',
    password: '',
  };
  const defaultRegisterFormErrors: LoginFormErrors = {
    email: '',
    password: '',
  };
  const [formState, setFormState] = useState<LoginFormItems>(defaultRegisterFormState);
  const [formErrors, setFormErrors] = useState<LoginFormErrors>(defaultRegisterFormErrors);
  const [usersAvailable, setUsersAvailable] = useState<RegisterFormItems[]>([]);

  useEffect(() => {
    const registeredUsers: RegisterFormItems[] = JSON.parse(localStorage.getItem('registeredUsers') || JSON.stringify([]));
    setUsersAvailable(registeredUsers);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = Object.values(formErrors).every((value) => value == '');
    if (isValid) {
      if (!(usersAvailable?.length > 0)) {
        window.alert('Invalid Username/Password. Please register if account not yet created');
      }
      const [user] = usersAvailable!.filter((user) => user.email == formState.email);
      if (user && user.email == formState.email && user.password == formState.password) {
        window.alert('Login Successfull.');
        dispatch!({
          type: AuthContextTypes.LOGIN,
          payload: { user },
        });
        setFormState(defaultRegisterFormState);
        setFormErrors(defaultRegisterFormErrors);
        handleClose();
      } else {
        window.alert('Invalid Username/Password. Please register if account not yet created');
      }
    }
  };

  const handleFullFormValidation = () => {
    for (const [field, value] of Object.entries(formState)) {
      handleValidation(field as keyof LoginFormItems, value);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
    handleValidation(field as keyof LoginFormItems, value);
  };

  const handleValidation = (field: keyof LoginFormItems, value: string) => {
    switch (field) {
      case 'email':
        if (!value) {
          setFormErrors((prev) => ({ ...prev, email: 'Please provide a valid email' }));
        } else if (!new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(value)) {
          setFormErrors((prev) => ({ ...prev, email: 'Invalid email id' }));
        } else {
          setFormErrors((prev) => ({ ...prev, email: '' }));
        }
        break;
      case 'password':
        if (!value) {
          setFormErrors((prev) => ({ ...prev, password: 'Please give a password' }));
        } else if (value?.length < 6 || value.length > 12) {
          setFormErrors((prev) => ({ ...prev, password: 'Atleast 6 - 12 characters is required' }));
        } else {
          setFormErrors((prev) => ({ ...prev, password: '' }));
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-[min(450px,90vw)]">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
        <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
        AK Travels
      </a>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Sign in to your account</h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Your Email"
                required={true}
                value={formState.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
              <div className="absolute text-xs ml-2 text-red-600 h-[15px]">{formErrors.email}</div>
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                required={true}
                value={formState.password}
                onChange={(e) => handleChange('password', e.target.value)}
              />
              <div className="absolute text-xs ml-2 text-red-600 h-[15px]">{formErrors.password}</div>
            </div>
            <button
              type="submit"
              onClick={() => handleFullFormValidation()}
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet?
              <a onClick={() => handleOpen('REGISTER')} className="font-medium text-blue-600 hover:underline cursor-pointer">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
