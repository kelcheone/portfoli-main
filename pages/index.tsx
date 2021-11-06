import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 rounded-lg">
      <h5 className="my-3 font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gradient-to-t from-green-200 to-blue-200 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">
          <i> What's in store for</i> <b>YOU!</b>{" "}
        </h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

/*
export const getServerSideProps = async (context: GetStaticPropsContext) => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  console.log("SERVER", services);
  return {
    props: {
      services: data.services,
    },
  };
};

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
*/
