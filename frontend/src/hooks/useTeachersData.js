import { useQuery } from "@tanstack/react-query";
import axios from 'axios';


const teacherQueryFn = (categoryName, categoryValue) => {
    const data = {
        "page_size": 100,
        "page_number": 1,
        "category_name": categoryName,
        "category_value": categoryValue
   }
    return axios({ method: "get", url: "/api/read_teacher_main_data", data: data})
};

export function useTeachersData(categoryName, categoryValue) {

    return useQuery({
        queryKey: ['teachers', categoryName, categoryValue],
        queryFn: () => teacherQueryFn(categoryName, categoryValue),
        select: (response) => response.data,
    });
}