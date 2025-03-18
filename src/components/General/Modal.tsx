import LoginForm from '../Login/LoginForm';

const Modal = () => {
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full bg-black/90 grid place-items-center">
      <div className="relative bg-slate-200 p-4 w-full max-w-2xl max-h-full">
        <LoginForm />
      </div>
    </div>
  );
};

export default Modal;
