// src/components/UserList.tsx
import React from "react";
import { useTranslation } from "react-i18next";

import { UserType } from "../typings/user";

interface UserListProps {
  users: UserType[];
}


const UserList: React.FC<UserListProps> = (props) => {
  // 引入国际化
  const { t } = useTranslation();

  const { users } = props;

  return (
    <div className="user-list">
      {/* 多语言标题 */}
      <h2>{t("userList")}</h2>
      {/* 渲染用户列表 */}
      {users.map(user => (
        <div key={user.id} className="user-item">
          <p><strong>{t("userName")}：</strong>{user.name}</p>
          <p><strong>{t("userEmail")}：</strong>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;