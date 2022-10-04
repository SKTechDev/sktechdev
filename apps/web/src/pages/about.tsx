import { Layout } from "../helper/layout";
import type { ReactElement } from "react";

export default function Landing() {
  return (
    <>
      <div>
        <h1 className="text-9xl font-sora">About</h1>
        {/* <Button variant="contained" color="primary">
          Join us
        </Button> */}
      </div>
    </>
  );
}

Landing.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
