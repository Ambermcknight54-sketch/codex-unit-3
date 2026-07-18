// src/pages/ApiKey.jsx
import React, { useState } from "react";
import { useSecret } from "../hooks/useSecret";
import { useInputTWE } from "../hooks/useInputTWE";

export function ApiKey() {
  const [apiKey, setApiKey] = useSecret("apiKey", "");
  const [inputKey, handleInputChange, resetInput, setInputValue] =
    useInputTWE(apiKey);
  const [saved, setSaved] = useState(false);

  function handleSave(event) {
    event.preventDefault();
    setApiKey(inputKey);
    setSaved(true);
    setTimeout(function () {
      setSaved(false);
    }, 3000);
  }

  return (
    <div className="container mx-auto max-w-md p-6 mt-10">
      <div className="block rounded-lg bg-white p-6 shadow-dark-mild dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
        <h2 className="mb-4 text-2xl font-bold">API Configuration</h2>
        <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
          Enter your API key below. It will be stored safely in sessionStorage.
        </p>

        <form onSubmit={handleSave}>
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <input
              type="password"
              id="apiKeyInput"
              className="peer block min-h-[auto] w-full rounded border border-neutral-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data----twe-input-state-active:placeholder:opacity-100 motion-reduce:transition-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="API Key"
              value={inputKey}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="apiKeyInput"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.32rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data----twe-input-state-active:-translate-y-[0.9rem] peer-data----twe-input-state-active:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
              API Key
            </label>
          </div>

          <button
            type="submit"
            className="w-full inline-block rounded bg-neutral-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 focus:bg-neutral-700 active:bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            Save Key
          </button>
        </form>

        {saved && (
          <div className="mt-4 rounded bg-green-100 p-3 text-sm text-green-800 text-center dark:bg-green-900 dark:text-green-100">
            API key updated securely!
          </div>
        )}
      </div>
    </div>
  );
}
