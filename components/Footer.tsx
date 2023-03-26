import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="text-sm flex justify-center my-4">
      <ul>
        <li>
          Made With Love By <i className="bi bi-github"></i>
          <Link
            className="text-blue-600"
            href={"https://github.com/UNHOTOfficial"}
          >
            UnHot
          </Link>
        </li>
      </ul>
    </div>
  );
}
