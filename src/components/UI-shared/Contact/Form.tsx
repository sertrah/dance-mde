import { useRef, useState, useCallback } from "react";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "@/styles/Shared.module.css";


const validationSchema = yup.object({
  email: yup.string().email().required("Required"),
  tel: yup.string().max(12).required("Required"),
  message: yup.string().max(150).required("Required")
}).required();

const Form = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      tel: "",
      message: "",
    },
  });
  const onSubmit = () => {
    setIsLoading(true);
    if (formRef.current)
      fetch('https://script.google.com/macros/s/AKfycby-92_ayeKqkTu2SmDRmEFXcpZHAvithHvRquT8I60tW9OvK7q3Ufkyq_fT0OQp0OxJ/exec', {
        method: 'POST',
        body: new FormData(formRef.current),
      }).then(() => {
        reset();
      })
        .catch(() => { alert("error") })
        .finally(() => { setIsLoading(false) })
  };

  return (
    <form ref={formRef} className={style.contact_form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Email" variant="standard" />
        )}
      />
      <Controller
        name="tel"
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Tel" variant="standard" />
        )}
      />

      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="standard"
            label="Message"
            multiline
            rows={4}
          />
        )}
      />
      <Button type="submit" variant="contained" disabled={(isLoading || !isValid)}>
        Enviar
      </Button>
    </form>
  );
};

export default Form;
