import React, { useEffect, useState} from "react";
import { useLocation,useNavigate } from "react-router-dom";
import {  applyActionCode, checkActionCode,confirmPasswordReset} from "firebase/auth";
import { auth } from "@/firebase";
import Loader from "@/utils/reusable/Loader";
import { notifications } from '@mantine/notifications';
import { Color } from './../../utils/reusable/Theme';
import { Button } from "@mantine/core";
import CustomInput from "@/utils/reusable/CustomInput";


interface Errors {
    password?: string;
    confirm?: string;
}


const Action = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const mode = queryParams.get("mode");
    const oobCode = queryParams.get("oobCode"); 
    const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');   
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    // Simulate some asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
   
  useEffect(() => {
    if (!mode || !oobCode) {
        notifications.show({
            title: `Error Alert `,
            message: `Invalid request.`,
            color: 'red',
            position:'top-right',
        });
        return;
    }

   
    const handleAction = async () => {
        
        try {
            if (mode === "resetPassword") {

                // Verify the password reset code is valid
                await checkActionCode(auth, oobCode);
                       

            } else if (mode === "verifyEmail") {

                // Apply the email verification code
                await applyActionCode(auth, oobCode);
                navigate('/userProfile');
                
            } else {
                notifications.show({
                    title: `Error Alert `,
                    message: `Invalid mode.`,
                    color: 'red',
                    position:'top-right',
                });               
            }
        } catch (error) {
            notifications.show({
                title: `Error Alert `,
                message: `Invalid request.`,
                color: 'red',
                position:'top-right',
            });           
        }
    };

    handleAction();
}, [mode, oobCode]);

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
            position:'top-right',
        });        
        navigate('/login');
      } else {
        notifications.show({
            title: `Error Alert `,
            message: `Invalid or missing oobCode.`,
            color: 'red',
            position:'top-right',
        });          
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      notifications.show({
        title: `Error Alert `,
        message: `An error occurred while resetting the password. Please try again.`,
        color: 'red',
        position:'top-right',
    });     
    } finally {
      setLoading(false);
    }
  };
    return (
        <div className="w-screen h-screen  bg-[--text-extra] grid justify-center items-center">                
        {mode === "resetPassword" && (
          
        <div className="h-screen  bg-[--text-extra] flex justify-center items-center">
           {loading ? <Loader/> : (
              <div className='grid mb-10'>        

  <div className="w-screen grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
    <div className="w-full bg-[--text-extra]">
      <div>
        <h2 className=" text-start text-3xl font-extrabold text-gray-900">Password Recovery</h2>
        <p className='max-w-[16rem] py-2'>Fill up the form to help you recover your account.</p>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="grid gap-4">
          <div>
            <label htmlFor="password">New Password *</label>
            <CustomInput
               type="password"
               label="Password"
               name="password"
               placeholder="********"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className='text-[#f30000] text-sm'>{errors.password}</span>}
          </div>

          <div>           
            <CustomInput
               type="password"
               label="Confrim Password"
               name="password"
               placeholder="********"
              required             
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)} 
            />
            {errors.confirm && <span className='text-[#f30000] text-sm'>{errors.confirm}</span>}
          </div>
        </div>

        <div>
          <Button
            type="submit"
            style={{
              background: Color.PRIMARY,
              color: Color.WHITE,
              padding: '5px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              border: 'none'
            }}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  </div>
              </div>
            ) }
        </div>
         )}
       
    
         {mode === "verifyEmail" && (
        <div className="flex justify-center items-center">
        {loading ? <Loader/> : '' }
         </div>
         )}
     
   
    
    </div>
    )
}

export default Action