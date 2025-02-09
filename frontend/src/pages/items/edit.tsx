import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Edit, useForm } from "@refinedev/antd";
import {Form, Input, DatePicker, Select} from "antd";
import {userRoles} from "../../interfaces/userRole.interface";

export const ItemEdit: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { formProps, saveButtonProps, queryResult } = useForm();

  return (
      <Edit saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical">
          <Form.Item
              label={translate("users.fields.name")}
              name={["name"]}
              rules={[
                {
                  required: true,
                },
              ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
              label="Description"
              name={["description"]}
              rules={[
                {
                  required: true,
                },
              ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Edit>
  );
};
