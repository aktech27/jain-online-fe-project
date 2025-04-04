import { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/aktechtbg.webp';
import { ModalContext } from '../../context';
import { RegisterFormErrors, RegisterFormItems } from '../../types';
import { checkIfFutureDate } from '../../utils/dateFunctions';

const RegisterForm = () => {
  const { handleOpen } = useContext(ModalContext);
  const defaultRegisterFormState: RegisterFormItems = {
    name: '',
    dob: '',
    email: '',
    contact: '',
    password: '',
  };
  const defaultRegisterFormErrors: RegisterFormErrors = {
    name: '',
    dob: '',
    email: '',
    contact: '',
    password: '',
  };

  const [formState, setFormState] = useState<RegisterFormItems>(defaultRegisterFormState);
  const [formErrors, setFormErrors] = useState<RegisterFormErrors>(defaultRegisterFormErrors);
  const [availableEmails, setAvailableEmails] = useState<string[]>([]);

  useEffect(() => {
    const registeredUsers: RegisterFormItems[] = JSON.parse(localStorage.getItem('registeredUsers') || JSON.stringify([]));
    const registeredMails: string[] = registeredUsers?.map((user) => user.email);
    setAvailableEmails(registeredMails);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = Object.values(formErrors).every((value) => value == '');
    if (isValid) {
      const registeredUsers: RegisterFormItems[] = JSON.parse(localStorage.getItem('registeredUsers') || JSON.stringify([]));
      registeredUsers?.push(formState);
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
      setAvailableEmails((prev) => [...prev, formState.email]);
      window.alert('Registration Successfull. You can login now');
      setFormState(defaultRegisterFormState);
      setFormErrors(defaultRegisterFormErrors);
      handleOpen('LOGIN');
    }
  };

  const handleFullFormValidation = () => {
    for (const [field, value] of Object.entries(formState)) {
      handleValidation(field as keyof RegisterFormItems, value);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
    handleValidation(field as keyof RegisterFormItems, value);
  };

  const handleValidation = (field: keyof RegisterFormItems, value: string) => {
    switch (field) {
      case 'name':
        if (!value) {
          setFormErrors((prev) => ({ ...prev, name: 'Please provide a name' }));
        } else if (!new RegExp(/^[a-zA-Z\s]*$/).test(value)) {
          setFormErrors((prev) => ({ ...prev, name: 'Invalid name' }));
        } else {
          setFormErrors((prev) => ({ ...prev, name: '' }));
        }
        break;
      case 'email':
        if (!value) {
          setFormErrors((prev) => ({ ...prev, email: 'Please provide a valid email' }));
        } else if (!new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(value)) {
          setFormErrors((prev) => ({ ...prev, email: 'Invalid email id' }));
        } else if (availableEmails.includes(value)) {
          setFormErrors((prev) => ({ ...prev, email: 'Email is already registered' }));
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
      case 'dob':
        if (!value) {
          setFormErrors((prev) => ({ ...prev, dob: 'Please select a valid DOB' }));
        } else if (checkIfFutureDate(value)) {
          setFormErrors((prev) => ({ ...prev, dob: 'DOB cannot be in future' }));
        } else {
          setFormErrors((prev) => {
            return { ...prev, dob: '' };
          });
        }
        break;
      case 'contact':
        if (!value) {
          setFormErrors((prev) => ({ ...prev, contact: 'Please provide contact number' }));
        } else if (!new RegExp(/^[0-9]{10}/).test(value)) {
          setFormErrors((prev) => ({ ...prev, contact: 'Invalid contact number' }));
        } else {
          setFormErrors((prev) => ({ ...prev, contact: '' }));
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto w-[min(650px,90vw)]">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
        <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
        AK Travels
      </a>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Setup your new account</h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Your Full Name"
                required={true}
                value={formState.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
              <div className="absolute text-xs ml-2 text-red-600 h-[15px]">{formErrors.name}</div>
            </div>
            <div className="relative">
              <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900">
                D.O.B
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Your Full Name"
                required={true}
                value={formState.dob}
                onChange={(e) => handleChange('dob', e.target.value)}
              />
              <div className="absolute text-xs ml-2 text-red-600 h-[15px]">{formErrors.dob}</div>
            </div>
            <div className="relative">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email
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
            <div className="relative">
              <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900">
                Contact number
              </label>
              <input
                type="text"
                name="contact"
                id="contact"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Your Contact Number"
                required={true}
                value={formState.contact}
                onChange={(e) => handleChange('contact', e.target.value)}
              />
              <div className="absolute text-xs ml-2 text-red-600 h-[15px]">{formErrors.contact}</div>
            </div>
            <div className="relative">
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
              Sign up
            </button>
            <p className="text-sm font-light text-gray-500">
              Already have an account yet?
              <a onClick={() => handleOpen('LOGIN')} className="font-medium text-blue-600 hover:underline cursor-pointer">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
