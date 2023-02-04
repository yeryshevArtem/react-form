import { useState } from "react";

function useAutocomplete() {
  const [autoCompleteInput, setAutoCompleteInput] = useState("");

  return {
    autoCompleteInput,
    setAutoCompleteInput,
  };
}

export default useAutocomplete;
