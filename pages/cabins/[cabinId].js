import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

// SSR (Server Side Rendering)
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin } };
}

// getStaticPaths + getStaticProps (Pages Router) === generateStaticParama(App Router)

const Cabin = ({ cabin }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        {/* <title>Cabin {router.query.cabinId} | The Wild Oasis</title> */}
        <title>Cabin {cabin.name} | The Wild Oasis</title>
      </Head>
      <div className="mx-auto mt-8 max-w-6xl">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
};

export default Cabin;
