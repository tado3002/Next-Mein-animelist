import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-sm md:text-base underline hover:text-color-accent transition-colors"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
