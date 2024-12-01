import { useEffect } from "react";

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const ElemTitle = document.querySelector("title");
    if (ElemTitle) ElemTitle.textContent = title;
  }, [title]);
};
