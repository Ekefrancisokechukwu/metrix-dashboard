import { useMediaQuery } from "react-responsive";

export const UseResponsive = () => {
  const mediaQueriesLg = useMediaQuery({ minWidth: 992 });
  const mediaQueriesXl = useMediaQuery({ minWidth: 1200 });

  return { mediaQueriesLg, mediaQueriesXl };
};
