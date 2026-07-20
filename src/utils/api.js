const endpoints = { 
    // by entity type
    teacher: "https://6a26f5d5a84f9d39e9081fbd.mockapi.io/api/teachers",
    student: "https://6a3828afc105017aa639b4b3.mockapi.io/api/studenst",
    employee: "https://6a26f5d5a84f9d39e9081fbd.mockapi.io/api/employee",
    parent: "https://6a3828afc105017aa639b4b3.mockapi.io/api/parents",
}

export function createApiUrl(entityType) { // named export
    const apiUrl = endpoints[entityType] // entityType -> teacher 
    // apiUrl -> "https://6a26f5d5a84f9d39e9081fbd.mockapi.io/api/teachers"

    return apiUrl; // "https://6a26f5d5a84f9d39e9081fbd.mockapi.io/api/teachers"
}