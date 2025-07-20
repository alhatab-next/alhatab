import { useTransition } from "react";
// import { useParams } from "next/navigation";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

import { Button } from "@heroui/react";

import { FaEarthAfrica } from "react-icons/fa6";

const ChangeLang = () => {
  const t = useTranslations("Header");

  const [pending, startTransition] = useTransition();

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  // const params = useParams();

  function handleClick() {
    const nextLocale = locale === "en" ? "ar" : "en";
    startTransition(() => {
      router.replace(
        {
          pathname,
        },
        { locale: nextLocale }
      );
    });
  }

  return (
    <Button
      className="min-w-0"
      color="default"
      variant="shadow"
      aria-label={t("chalnge-language")}
      onPress={() => handleClick()}
      disabled={pending}
    >
      <FaEarthAfrica className="size-4" />
    </Button>
  );
};

export default ChangeLang;
