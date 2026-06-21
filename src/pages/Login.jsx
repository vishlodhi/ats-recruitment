
import { useForm } from 'react-hook-form'


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='h-screen flex justify-center items-center'>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                        <p>Enter Email</p><input type="email" placeholder='email' {...register('email', { required: true })} />
                        {errors.email && <p>Email is required</p>}
                    </div>
                    <div className='flex items-center gap-4'>
                        <p>Enter Password</p> <input type="password" {...register('password', { required: true })} placeholder='password' />
                         {errors.password && <p>Password is required</p>}
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login