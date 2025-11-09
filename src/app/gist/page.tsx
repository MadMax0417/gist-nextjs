"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function BentoGridThirdDemo() {
  const router = useRouter();
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          onClick={() => router.push(item.url)}
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        />
      ))}
    </BentoGrid>
  );
}


const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Data Manipulation",
    description: (
      <span className="text-sm">
        Transforming and organizing raw data efficiently.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    url: "/code/data-manipulation",
  },
  {
    title: "Calculating",
    description: (
      <span className="text-sm">
        Performing computations to derive meaningful insights.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    url:"/code/calculating",

  },
  {
    title: "CSV File",
    description: (
      <span className="text-sm">
        Storing and accessing tabular data easily.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    url: "/code/csv-file",

  },
  {
    title: "Matplotlib Plots",
    description: (
      <span className="text-sm">
        Visualizing data through stunning graphical charts.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    url: "/code/matplotlib-plots",

  },

  {
    title: "Titanic (EDA)",
    description: (
      <span className="text-sm">
        Exploring Titanic dataset for hidden insights.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    url: "/code/titanic-eda",

  },

  {
    title: "Prob Survivalon",
    description: (
      <span className="text-sm">
        Predicting passenger survival probabilities analytically.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    url: "/code/prob-survivalon",

  },
  {
    title: "Linear Regression",
    description: (
      <span className="text-sm">
        Modeling relationships between variables linearly.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    url:"/code/linear-regression",

  },
  {
    title: "Decision Tree Iris",
    description: (
      <span className="text-sm">
        Making predictions using branching data structures.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    url:"/code/decision-tree-iris",
  },

  {
    title: "AND",
    description: (
      <span className="text-sm">
        Logical operator requiring all conditions true.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    url:"/code/and",

  },

    {
    title: "OR-NOR",
    description: (
      <span className="text-sm">
        Evaluating alternate or negated logical conditions.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    url:"/code/or-nor",

  },
];
