'use client'

import { CaretDown, CaretUp } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export const CategoryDropDown = () => {
    const [up, setUp] = useState(false)
  return (
    <div>
      <details className="dropdown">
        <summary className="m-1 btn btn-ghost" onClick={() => setUp(!up)}>
            {up ? <CaretUp size={20} weight="bold"/> : <CaretDown size={20} weight="bold"/> }
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
    </div>
  );
}
