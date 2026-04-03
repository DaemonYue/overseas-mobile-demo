import React, { useEffect, useState } from "react";

import UserList from "./UserList";
import UserForm from "./UserForm";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

import { UserType, FormData } from "../typings/user";


let count = 1;
const _userList: UserType[] = [
  { id: count, name: "Alex Smith", email: "alex@example.com" },
  { id: ++count, name: "Maria Garcia", email: "maria@example.com" },
  { id: ++count, name: "Li Wei", email: "liwei@example.com" }
];

// 模拟 70% 成功，30% 失败
const getData = () => {
  const isSuccess = Math.random() > 0.8;
  return new Promise<UserType[]>((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(_userList);
      } else {
        reject('data error');
      }
    }, 3000);
  });
};


const Users: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>('loading');
  const [userList, setUserList] = useState([] as UserType[]);

  async function getUserData() {
    try {
      const data = await getData();
      setUserList(data);
      setStatus('success');
    } catch {
      setStatus('error')
    }
  }

  useEffect(() => {
    getUserData();
  }, []);


  const setNewUser = (user: FormData) => {
    setUserList([...userList, { id: ++count, ...user }]);
  }

  useEffect(() => {
    console.log(userList)
  })

  return (
    <div className="user-container">
      {status === 'loading' && <Loading />}
      {status === 'success' && <UserList users={userList} />}
      {status === 'error' && <ErrorPage />}
      <UserForm setNewUser={(user: FormData) => setNewUser(user)} />
    </div>
  )
};

export default Users;