"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";

import {
  Accordion,
  AccordionItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/react";

import VoiceWidget from "@/components/ai/VoiceWidget";

import { Lists } from "@/data/Lists";

export default function Home() {
  const t = useTranslations("Lists");

  const columns = [
    { key: "name", label: t("columns.name") },
    { key: "price", label: t("columns.price") },
    { key: "image", label: t("columns.image") },
  ];

  return (
    <main>
      <Accordion
        variant="splitted"
        defaultExpandedKeys={["1"]}
        className="max-w-4xl mx-auto px-4 py-8 mt-10"
      >
        {Lists(t).map((list, i) => {
          const rows = Object.entries(list)
            .filter(([key]) => key.startsWith("item_"))
            .map(([_, item]) => ({
              name: item.name,
              price: (
                <div className="flex flex-col">
                  <span className="flex justify-center gap-1">
                    {item.price}
                    <Image
                      src="/currency.svg"
                      alt="Currency"
                      width={12}
                      height={12}
                    />
                  </span>

                  <span>{item.description}</span>
                </div>
              ),
              image: (
                <Image
                  className="w-auto h-full max-h-32 mx-auto"
                  src={item.image}
                  alt={item.name}
                  width={128}
                  height={128}
                />
              ),
            }));

          return (
            <AccordionItem
              key={i + 1}
              aria-label={`Accordion ${i + 1}`}
              title={list.title}
            >
              <Table aria-label="Items">
                <TableHeader columns={columns}>
                  {(column) => (
                    <TableColumn
                      className="text-center text-neutral-700"
                      key={column.key}
                    >
                      {column.label}
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody items={rows}>
                  {(item) => (
                    <TableRow key={item.name}>
                      {(columnKey) => (
                        <TableCell className="text-center">
                          {getKeyValue(item, columnKey)}
                        </TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </AccordionItem>
          );
        })}
      </Accordion>

      <VoiceWidget />
    </main>
  );
}
