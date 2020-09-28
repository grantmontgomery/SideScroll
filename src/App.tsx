import { stat } from "fs";
import * as React from "react";
import { Container } from "./components";

export const App: React.FC = () => {
  const [state, setState] = React.useState<{
    results: { [key: string]: any }[] | string;
  }>({ results: "" });
  React.useEffect(() => {
    const key: string = `${process.env.REACT_APP_UNSPLASH}`;
    const fetchPictures = async () => {
      try {
        console.log("trigger api");
        const unsplashURL: URL = new URL(
          "https://api.unsplash.com/search/photos/"
        );

        unsplashURL.searchParams.append("query", "berlin");

        const urlString: string = unsplashURL.toString();

        const pictures: Response = await fetch(urlString, {
          headers: {
            Authorization: key,
          },
        });
        const picsJSON = await pictures.json();

        const {
          results,
          error,
        }: { results: { [key: string]: any }[]; error: string } = picsJSON;

        return results ? setState({ results }) : setState({ results: error });
      } catch (err) {
        return console.log(err.message);
      }
    };

    fetchPictures();
  }, []);

  console.log(state.results);
  return (
    <div className="">
      {typeof state.results === "object" ? (
        <Container results={state.results}></Container>
      ) : null}
    </div>
  );
};
