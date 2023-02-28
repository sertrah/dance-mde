import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "@/styles/Shared.module.css";

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      tel: "",
      message: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <form className={style.contact_form} onSubmit={handleSubmit(onSubmit)}>
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
      <Button type="submit" variant="contained">
        Send
      </Button>
    </form>
  );
};

export default Form;
