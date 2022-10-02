import Button from "@mui/material/Button";

export default function Landing() {
  return (
    <>
      <div>
        <h1 className="text-3xl">
          SK
          <span className="text-techdev-gradient-radial">TechDev</span>
        </h1>
        <Button variant="contained" color="primary">
          Join us
        </Button>
      </div>
    </>
  );
}

