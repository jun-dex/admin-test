import React, { useEffect, useState } from "react";
import { Menu, MenuItem, MenuItems, MenuButton, Transition, Switch } from "@headlessui/react";
import { Fragment } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [enabled, setEnabled] = useState(false)

  const currentLocale = router.locale || "ko";  // 현재 언어
  const { data: session } = useSession();       // 세션(로그인) 데이터
  useEffect(() => {
    const locale = enabled ? "en" : "ko";

    // 언어 변경
    if (locale !== currentLocale) {
      router.push(router.pathname, router.asPath, { locale });
    }
  }, [enabled, currentLocale, router]);

  return (
    <header className="h-16 bg-white shadow-md flex justify-end items-center px-10">
      {/* 유저 프로필 */}
      <Menu as="div" className="relative">
        <MenuButton className="flex items-center space-x-2 focus:outline-none">
          {/* 프로필 이미지 */}
          {session?.user?.image ? (
            <img
              src={session.user.image}
              alt="U"
              className="w-10 h-10 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold">
              {session?.user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
          )}
        </MenuButton>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              {/* 프로필 보기 */}
              <MenuItem>
                {({ active }) => (
                  <button
                    className={`${active ? "bg-blue-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {t("profile")}
                  </button>
                )}
              </MenuItem>
              {/* 로그아웃 */}
              <MenuItem>
                {({ active }) => (
                  <button
                    onClick={() => signOut()}
                    className={`${active ? "bg-blue-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {t("logout")}
                  </button>
                )}
              </MenuItem>
              {/* 언어 선택 */}
              <div
                className="px-2 py-2"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${enabled ? "bg-teal-900" : "bg-teal-700"
                    } relative inline-flex h-[27px] w-[62px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                >
                  <span className="sr-only">언어 설정</span>
                  <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-9" : "translate-x-0"
                      } pointer-events-none inline-block h-[21px] w-[21px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
                <span className="ml-3 text-sm text-gray-500">
                  {enabled ? "English" : "한국어"}
                </span>
              </div>
            </div>
          </MenuItems>
        </Transition>
      </Menu >
    </header >
  );
};

export default Navbar;