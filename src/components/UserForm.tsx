// src/components/UserForm.tsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// 定义表单数据类型
interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const { t } = useTranslation();
  
  // 1. 表单数据
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: ""
  });

  // 2. 输入框变化时更新数据
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // 解构赋值，只更新变化的字段
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. 提交表单
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 阻止页面刷新
    alert(t("submitSuccess")); // 多语言提示
    // 提交后清空表单
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="user-form">
      <h2>{t("userForm")}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>{t("userName")}</label>
          <input
            type="text"
            name="name"
            placeholder={t("inputName")}
            value={formData.name} // 绑定值
            onChange={handleInputChange} // 绑定变化事件
            required // 非空校验
          />
        </div>
        <div className="form-item">
          <label>{t("userEmail")}</label>
          <input
            type="email"
            name="email"
            placeholder={t("inputEmail")}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <button type="submit">{t("submit")}</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;