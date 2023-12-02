'use client'
import { AiFillGithub } from "react-icons/ai";
// import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
// import { toast } from "react-hot-toast";
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form";

// import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from '../input/Input';


const RegisterModal = () => {
    const RegisterModal = useRegisterModal();
    const [isLoading,setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState:{
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name:'',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post('/api/register',data)
            .then(() => {
                RegisterModal.onClose();
            })

            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading 
                title="Welcome to Airbnb"
                subtitle="Create an account"
            />
            <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

        <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
        </div>
    )

    return (
        <Modal 
            disabled={isLoading}
            isOpen={RegisterModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={RegisterModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    );
}

export default RegisterModal;