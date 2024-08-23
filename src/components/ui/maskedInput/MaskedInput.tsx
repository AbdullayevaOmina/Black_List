import { useMask } from "@react-input/mask";
import { TextInput } from "flowbite-react";
import { useField } from "formik";

export const MaskedInput = ({ name, mask, ...props }: any) => {
  const [field, meta] = useField(name);
  const inputRef = useMask({
    mask,
    replacement: { _: /\d/ },
  });

  return (
    <>
      <TextInput {...field} {...props} ref={inputRef} className="mb-3" />
      {meta.touched && meta.error ? (
        <small className="text-[red]">{meta.error}</small>
      ) : null}
    </>
  );
};
