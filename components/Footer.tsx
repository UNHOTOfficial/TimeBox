import Link from "next/link";

export default function Footer() {
  return (
    <div className="border text-slate-600 py-4 flex flex-col text-sm items-center dark:text-slate-400">
      <ul>
        <li className="flex items-center">
          Made With
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="bi bi-suit-heart-fill fill-red-600 mx-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
          By
          <Link
            className="text-blue-600 ml-1 dark:text-blue-300"
            href={"https://github.com/UNHOTOfficial"}
          >
            UnHot
          </Link>
        </li>
      </ul>
      <div>
        <span>© 2023 UnHot™. All Rights Reserved.</span>
      </div>
    </div>
  );
}
