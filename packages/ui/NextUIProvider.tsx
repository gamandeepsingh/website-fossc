import * as React from "react";

import {NextUIProvider} from "@nextui-org/react";

export function NextUIApp() {
  return (
    <NextUIProvider>
      <NextUIApp />
    </NextUIProvider>
  );
}