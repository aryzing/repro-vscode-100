import { createForm } from "@felte/solid";

import { NewEventFormData } from "./types.ts";

export function Example() {
  const initialNewEventFormValues: NewEventFormData = {
    foos: [
      {
        value: "",
        result: [],
      },
    ],
  };

  const formHelpers = createForm({
    // initialValues: initialNewEventFormValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return <div>Calendar</div>;
}
