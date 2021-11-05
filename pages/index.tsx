import { GetStaticPropsContext } from "next";
import { services } from "../data";

const index = ({ services }) => {
  console.log("CLIENT", services);
  return (
    <div>
      <h1>Good Morning Mumbai!</h1>
    </div>
  );
};

export default index;

// export const getServerSideProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("SERVER", services);
//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  console.log("SERVER", services);
  return {
    props: {
      services: data.services,
    },
  };
};
