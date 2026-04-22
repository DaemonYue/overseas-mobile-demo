// src/components/UserList.tsx
import React from "react";
import { useTranslation } from "react-i18next";

import { UserType } from "../typings/user";

interface UserCardProps {
  user: UserType;
  delUser: (id: number) => void;
}


const UserCard: React.FC<UserCardProps> = (props) => {
  const { t } = useTranslation();
  const { user, delUser } = props;
  return (
    <div className="user-item">
      <div className="user-detail">
        <p><strong>{t("userName")}：</strong>{user.name}</p>
        <p><strong>{t("userEmail")}：</strong>{user.email}</p>
      </div>
      <div className="user-delete">
        <div className="del-btn" onClick={() => delUser(user.id)}>{t("delete")}</div>
      </div>
    </div>

  );
};

export default UserCard;