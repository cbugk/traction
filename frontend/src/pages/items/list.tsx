import React from "react";
import {
    IResourceComponentsProps,
    BaseRecord,
    useTranslate,
} from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DeleteButton,
    TagField,
    EmailField,
    DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const ItemList: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title={translate("users.fields.id")}
                />
                <Table.Column
                    dataIndex="name"
                    title={translate("users.fields.name")}
                />
                <Table.Column
                    dataIndex="description"
                    title={translate("users.fields.description")}
                />
                <Table.Column
                    dataIndex={["created_at"]}
                    title={translate("users.fields.created_at")}
                    render={(value: any) => <DateField value={value} format={'DD.MM.YYYY'} />}
                />
                <Table.Column
                    dataIndex={["updated_at"]}
                    title={translate("users.fields.updated_at")}
                    render={(value: any) => <DateField value={value} format={'DD.MM.YYYY'} />}
                />
                <Table.Column
                    title={translate("table.actions")}
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
