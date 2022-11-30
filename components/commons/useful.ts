const timestampToDate = (timestamp: number) => 
{
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
};

const transformTypeToString = (type: any) => 
{
    if (type.toString) {
        return type.toString();
    }
    return "";
};

export { 
    timestampToDate,
    transformTypeToString
};