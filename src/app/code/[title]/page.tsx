"use client";
import React from "react";
import { data } from "@/data/data";
import { CodeBlock } from "@/components/ui/code-block";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { DataItem } from "@/data/data";
import { CopyButton } from "@/components/ui/shadcn-io/copy-button";

export default function CodeBlockDemoSecond() {
  const params = useParams<{ title: string}>();
  const title = params.title;

  const filteredObj: DataItem[] = data.filter((item) => item.title === title);

  const code = filteredObj[0].code;
  const heading = filteredObj[0].title;

  if (filteredObj.length > 0) {
    return (
      <div className="max-w-3xl m-auto w-full relative">
         <CopyButton 
          className="absolute top-2 right-2 z-10"
          content={code} 
          onCopy={() => toast.success("Copied to clipboard")} />
        <CodeBlock
          language="py"
          filename={`${heading}.py`}
          tabs={[
            {
              name: `${heading}.py`,
              code: code,
              language: "py",
            },
          ]}
        />
       
      </div>
    );
  } else {
    toast.error("Page not found");
    <div>Page not found</div>;
  }
}
