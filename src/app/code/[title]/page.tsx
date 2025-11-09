"use client";
import React from "react";
import { data } from "@/data/data";
import { CodeBlock } from "@/components/ui/code-block";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { DataItem } from "@/data/data";
import { CopyButton } from "@/components/ui/shadcn-io/copy-button";

export default function CodeBlockDemoSecond() {
  const params = useParams<{ title: string }>();
  const title = params.title;

  const filteredObj: DataItem[] = data.filter((item) => item.title === title);

  const code = filteredObj[0].code;
  const heading = filteredObj[0].title;

  if (filteredObj.length > 0) {
    return (
      <div
        className=" relative 
    w-full 
    max-w-3xl 
    mx-auto 
    p-2 sm:p-4
    rounded-lg
    overflow-hidden"
      >
        <CopyButton
          className="
            absolute 
            top-2 
            right-2 
            sm:top-3 
            sm:right-3 
            z-10 
            px-2 
            py-1 
            text-xs 
            sm:text-sm 
            rounded-md 
            backdrop-blur-sm 
            bg-white/10 
            dark:bg-black/30 
            hover:bg-white/20 
            transition
          "
          content={code}
          onCopy={() => toast.success("Copied to clipboard")}
        />
        <div className="overflow-x-auto rounded-lg">
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
      </div>
    );
  } else {
    toast.error("Page not found");
    <div>Page not found</div>;
  }
}
