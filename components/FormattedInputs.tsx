import React, { useState } from "react";
import NumberFormat from "react-number-format";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat<unknown> | null) => void;
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(value) => {
        onChange({
          target: {
            name: props.name,
            value: value.value,
          },
        });
      }}
      isNumericString
    />
  );
}

const FormattedInputs = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <Box className="flex items-end">
      <TextField
        multiline
        variant="standard"
        className="w-[90%]"
        onChange={handleChange}
        value={value}
        InputProps={{
          inputComponent: NumberFormatCustom as any,
        }}
      />
      <div className="w-[10%] border-b-2 -ml-[2px] border-white text-16px text-right pr-10px">
        ETH
      </div>
    </Box>
  );
};

export default FormattedInputs;
