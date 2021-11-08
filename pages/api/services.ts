import { NextApiRequest, NextApiResponse } from "next";

import { services } from "../../data";

const Services = (req: NextApiRequest, res: NextApiResponse) => {
  // by default get request
  console.log(services);
  res.status(200).json({ services });
};
export default Services;
