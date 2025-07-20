import { useTranslations } from "next-intl";

export const Lists = (t: ReturnType<typeof useTranslations<"Lists">>) => [
  {
    title: t("List_1.title"),
    item_1: {
      name: t("List_1.item_1.name"),
      price: t("List_1.item_1.price"),
      image: "/lists/list-1/item-1.jpg",
    },
    item_2: {
      name: t("List_1.item_2.name"),
      price: t("List_1.item_2.price"),
      image: "/lists/list-1/item-2.jpg",
    },
    item_3: {
      name: t("List_1.item_3.name"),
      price: t("List_1.item_3.price"),
      image: "/lists/list-1/item-3.jpg",
    },
    item_4: {
      name: t("List_1.item_4.name"),
      price: t("List_1.item_4.price"),
      image: "/lists/list-1/item-4.jpg",
    },
    item_5: {
      name: t("List_1.item_5.name"),
      price: t("List_1.item_5.price"),
      image: "/lists/list-1/item-5.jpg",
    },
    item_6: {
      name: t("List_1.item_6.name"),
      price: t("List_1.item_6.price"),
      image: "/lists/list-1/item-6.jpg",
    },
  },
  {
    title: t("List_2.title"),
    item_1: {
      name: t("List_2.item_1.name"),
      price: t("List_2.item_1.price"),
      image: "/lists/list-2/item-1.png",
    },
    item_2: {
      name: t("List_2.item_2.name"),
      price: t("List_2.item_2.price"),
      image: "/lists/list-2/item-2.png",
    },
    item_3: {
      name: t("List_2.item_3.name"),
      price: t("List_2.item_3.price"),
      image: "/lists/list-2/item-3.png",
    },
  },
  {
    title: t("List_3.title"),
    item_1: {
      name: t("List_3.item_1.name"),
      price: t("List_3.item_1.price"),
      image: "/lists/list-3/item-1.png",
    },
    item_2: {
      name: t("List_3.item_2.name"),
      price: t("List_3.item_2.price"),
      image: "/lists/list-3/item-2.png",
    },
    item_3: {
      name: t("List_3.item_3.name"),
      price: t("List_3.item_3.price"),
      image: "/lists/list-3/item-3.png",
    },
    item_4: {
      name: t("List_3.item_4.name"),
      price: t("List_3.item_4.price"),
      image: "/lists/list-3/item-4.png",
    },
  },
  {
    title: t("List_4.title"),
    item_1: {
      name: t("List_4.item_1.name"),
      price: t("List_4.item_1.price"),
      image: "/lists/list-4/item-1.jpg",
      description: t("List_4.item_1.description"),
    },
    item_2: {
      name: t("List_4.item_2.name"),
      price: t("List_4.item_2.price"),
      image: "/lists/list-4/item-2.png",
    },
    item_3: {
      name: t("List_4.item_3.name"),
      price: t("List_4.item_3.price"),
      image: "/lists/list-4/item-3.png",
    },
  },
];
