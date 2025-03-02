import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export default function UpdateIdentificationMatchingFillForm({ datas }) {
  return (
    <div className="overflow w-full flex flex-col">
      <div className="flex flex-row gap-4 w-full border-b">
        <div className="flex flex-col w-full">
          <div className="text-black p-3 font-black">Question:</div>
          <TextField
            multiline
            variant="outlined"
            className="w-full"
            value={datas.question}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>

        <div className="flex flex-col w-full">
          <div className="text-black p-3 font-black">Answer key:</div>
          <TextField
            multiline
            value={datas.answer_key}
            variant="outlined"
            className="w-full"
            InputProps={{
              readOnly: true,
            }}
          />
        </div>

      </div>
    </div>
  );
}
