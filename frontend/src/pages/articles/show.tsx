import { useOne } from "@refinedev/core";

export const ShowArticle = () => {
    const { data, isLoading } = useOne({ resource: "articles", id: 1 });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <div>Article name: {data?.data.title}</div>;
};