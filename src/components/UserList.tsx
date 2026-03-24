// src/components/UserList.tsx
import React from "react";
import { useTranslation } from "react-i18next";

// 定义用户类型（TS核心，面试能说清）
interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  // 引入国际化
  const { t } = useTranslation();
  
  // 模拟海外用户数据（贴合出海业务场景）
  const users: User[] = [
    { id: 1, name: "Alex Smith", email: "alex@example.com" },
    { id: 2, name: "Maria Garcia", email: "maria@example.com" },
    { id: 3, name: "Li Wei", email: "liwei@example.com" }
  ];

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