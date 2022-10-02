import { Layout } from "../helper/layout";
import type { ReactElement } from "react";

export default function Landing() {
  return (
    <>
      <div>
        <h1 className="text-9xl font-sora">
          <span>SK</span>
          <span className="text-techdev-gradient-radial">TechDev</span>
        </h1>
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

