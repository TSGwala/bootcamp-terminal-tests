export function mostProfitableDepartment(salesData) {
    const salesByDepartment = salesData.reduce((acc, { department, sales }) => {
        acc[department] = (acc[department] || 0) + sales;
        return acc;
    }, {});

    return Object.keys(salesByDepartment).reduce((mostProfitable, department) =>
        salesByDepartment[department] > salesByDepartment[mostProfitable] ? department : mostProfitable
    );
}
