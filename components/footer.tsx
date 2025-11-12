import CustomLink from "./custom-link"
import packageJSON from "next-auth/package.json"
import { useMessages } from 'next-intl';

export default function Footer() {
  const t = useMessages()

  return (
    <footer className="mx-0 my-4 flex w-full flex-col gap-4 px-4 text-sm sm:mx-auto sm:my-12 sm:h-5 sm:max-w-3xl sm:flex-row sm:items-center sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <CustomLink href="#">
          { t.Footer.about }
        </CustomLink>
        <CustomLink href="#">
          { t.Footer.blog }
        </CustomLink>
        <CustomLink href="#">
          { t.Footer.contact }
        </CustomLink>
        <CustomLink href="#">
          { t.Footer.data }
        </CustomLink>
      </div>
    </footer>
  )
}
