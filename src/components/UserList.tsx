// src/components/UserList.tsx
import React from "react";
import { useTranslation } from "react-i18next";

import UserCard from "./UserCard";

import { UserType } from "../typings/user";

interface UserListProps {
  users: UserType[];
  delUser: (id: number) => void;
}


const UserList: React.FC<UserListProps> = (props) => {
  // 引入国际化
  const { t } = useTranslation();

  const { users, delUser } = props;

  return (
    <div className="user-list">
      {/* 多语言标题 */}
      <h2>{t("userList")}</h2>
      {/* 渲染用户列表 */}
      {users.map(user => (
        <UserCard user={user} key={user.id} delUser={delUser} />
      ))}
    </div>
  );
};

export default UserList;