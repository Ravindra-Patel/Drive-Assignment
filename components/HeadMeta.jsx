import Head from "next/head";

export default function HeadMeta({ title, description }) {
  return (
    <div>
      <Head>
        <title>{title ? title : "Drive"}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : "Get all different types of cars for sale."
          }
        />
        <meta
          name="keywords"
          content="Cars, Ferrari, Economy, Family car, Luxury, BMW, Audi, Hyundai, Lamborgini, TATA"
        />
        <link rel="icon" href="/drive.png" />
      </Head>
    </div>
  );
}
