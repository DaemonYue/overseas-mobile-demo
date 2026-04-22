import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
  const isSuccess = Math.random() > 0.1;
  return new Promise<UserType[]>((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve(_userList);
      } else {
        reject('data error');
      }
    }, 3);
  });
};


const Users: React.FC = () => {
  const { t } = useTranslation();
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

  // 初始化获取数据
  useEffect(() => {
    getUserData();
  }, []);

  // 新增用户
  const addUser = (user: FormData) => {
    setUserList([...userList, { id: ++count, ...user }]);
  }

  // 删除用户
  const delUser = (id: number) => {
    if (!window.confirm(t('deleteConfirm'))) return;
    const _users = userList.filter(user => user.id !== id);
    setUserList(_users as UserType[]);
  }

  useEffect(() => {
    console.log(userList)
  })

  return (
    <div className="user-container">
      {status === 'loading' && <Loading />}
      {status === 'success' && <UserList users={userList} delUser={delUser} />}
      {status === 'error' && <ErrorPage />}
      <UserForm setNewUser={(user: FormData) => addUser(user)} />
    </div>
  )
};

export default Users;