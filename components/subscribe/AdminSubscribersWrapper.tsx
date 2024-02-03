import React from 'react';

type Subscriber = {
  _id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type SubscribersData = {
  subscribers: Subscriber[];
  total: number;
};

type Props = {
  data: SubscribersData;
};

const AdminSubscribersWrapper = ({ data }: Props) => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold">
        All Subscribers - Total: {data.total}
      </h2>
      <div className="flex justify-center">
        <ul className="my-8 space-y-2 ">
          {data.subscribers.map((subscriber, index) => (
            <li className=" list-item list-disc" key={subscriber._id}>
              {subscriber.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSubscribersWrapper;
