import React, { useEffect, useState } from 'react';
import { applyActionCode, checkActionCode, confirmPasswordReset, onAuthStateChanged } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { auth } from '@/firebase';
import Loader from '@/utils/reusable/Loader';

interface Errors {
  password?: string;
  confirm?: string;
}

const Action = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get('mode');
  const oobCode = queryParams.get('oobCode');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!mode || !oobCode) {
      notifications.show({
        title: `Error Alert`,
        message: `Invalid request.`,
        color: 'red',
        position: 'top-right',
      });
      return;
    }

    const handleAction = async () => {
      try {
        if (mode === 'resetPassword') {
          await checkActionCode(auth, oobCode);
        } else if (mode === 'verifyEmail') {
          setLoading(true);  // Show loader while handling verification
          
          await applyActionCode(auth, oobCode)
            .then(() => {
              // Listen for auth state change to ensure user is authenticated before navigating
              onAuthStateChanged(auth, (user) => {
                if (user) {
                  navigate('/profileDetails');
                  notifications.show({
                    title: 'Success',
                    message: 'Email verified successfully.',
                    color: 'green',
                    position: 'top-right',
                  });
                  console.log('User authenticated, navigating to profileDetails...');
                  
                } else {
                  notifications.show({
                    title: 'Error Alert',
                    message: 'Authentication failed. Please login again.',
                    color: 'red',
                    position: 'top-right',
                  });
                  navigate('/login'); // Fallback to login if not authenticated
                }
              });
            })
            .catch((error) => {
              console.error('Verification failed', error);
              notifications.show({
                title: 'Error Alert',
                message: 'Failed to verify email. Please try again.',
                color: 'red',
                position: 'top-right',
              });
            })
            .finally(() => setLoading(false));  // Hide loader after process is done
        } else {
          notifications.show({
            title: `Error Alert`,
            message: `Invalid mode.`,
            color: 'red',
            position: 'top-right',
          });
        }
      } catch (error) {
        notifications.show({
          title: `Error Alert`,
          message: `Invalid request.`,
          color: 'red',
          position: 'top-right',
        });
      }
    };

    handleAction();
  }, [mode, oobCode, navigate]);

  const validate = (): boolean => {
    const errors: Errors = {};
    let isValid = true;

    if (!password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (password !== confirm) {
      errors.confirm = 'Passwords do not match';
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      if (oobCode) {
        await confirmPasswordReset(auth, oobCode, password);
        notifications.show({
          title: ` Successful `,
          message: `Success! Your password has been changed successfully.`,
          color: '#299165',
          position: 'top-right',
        });
        navigate('/login');
      } else {
        notifications.show({
          title: `Error Alert`,
          message: `Invalid or missing oobCode.`,
          color: 'red',
          position: 'top-right',
        });
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      notifications.show({
        title: `Error Alert`,
        message: `An error occurred while resetting the password. Please try again.`,
        color: 'red',
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen  bg-[--text-extra] grid justify-center items-center">
      {mode === 'resetPassword' && (
        <div className="h-screen  bg-[--text-extra] flex justify-center items-center">
          {loading ? (
            <Loader />
          ) : (
            <div className="grid mb-10">
              <div className="w-screen grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
                <div className="w-full bg-[--text-extra]">
                  <div>
                    <h2 className=" text-start text-3xl font-extrabold text-gray-900">
                      Password Recovery
                    </h2>
                    <p className="max-w-[16rem] py-2">
                      Fill up the form to help you recover your account.
                    </p>
                  </div>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="grid gap-4">
                      <div>
                        <label htmlFor="password">New Password *</label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="New Password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && (
                          <span className="text-[#f30000] text-sm">{errors.password}</span>
                        )}
                      </div>

                      <div>
                        <label htmlFor="confirm">Confirm New Password *</label>
                        <input
                          id="confirm"
                          name="confirm"
                          type="password"
                          className="border-l-4 border-l-[--bg-color] block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          required
                          placeholder="Confirm Password"
                          value={confirm}
                          onChange={(e) => setConfirm(e.target.value)}
                        />
                        {errors.confirm && (
                          <span className="text-[#f30000] text-sm">{errors.confirm}</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full text-[--text-extra] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-[--button-color]"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {mode === 'verifyEmail' && (
        <div className="flex justify-center items-center">
          {loading ? <Loader /> : ''}
        </div>
      )}
    </div>
  );
};

export default Action;
