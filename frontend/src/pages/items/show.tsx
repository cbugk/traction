import React from "react";
import {
  IResourceComponentsProps,
  useShow,
  useTranslate,
} from "@refinedev/core";
import {
  Show,
  NumberField,
  TagField,
  EmailField,
  TextField,
  DateField,
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const ItemShow: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
      <Show isLoading={isLoading}>
        <Title level={5}>"Name"</Title>
        <TextField value={record?.name} />
        <Title level={5}>"Description"</Title>
        <TextField value={record?.description} />
        <Title level={5}>{translate("users.fields.created_at")}</Title>
        <DateField value={record?.createdAt} />
        <Title level={5}>{translate("users.fields.updated_at")}</Title>
        <DateField value={record?.updatedAt} />
      </Show>
  );
};
