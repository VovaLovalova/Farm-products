import React from "react";
import { Description } from "/src/components/ui/description/description";
import { Specifications } from "/src/components/ui/specifications/specifications";
import { Internals } from "/src/components/ui/internals/internals";

export function Tabs({ product, activeTab }) {
  const tabs = [
    { content: <Description product={product} /> },
    { content: <Specifications product={product} /> },
    { content: <Internals product={product} /> }
  ];
  return <>{tabs[activeTab].content}</>;
}
