
export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-6 py-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <p className="text-[13px] text-neutral-500">
          © {new Date().getFullYear()} Roshan Ghimire
        </p>

        <p className="text-[13px] text-neutral-500">
          Software Developer · Sudbury, Ontario
        </p>
      </div>
    </footer>
  );
}
