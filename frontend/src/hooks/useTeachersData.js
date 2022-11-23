import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const teacherQueryFn = (categoryName, categoryValue) => {
    return axios.get(`/api/read_teacher_main_data?page_size=100&page_number=1&category_name=${categoryName}&category_value=${categoryValue}`)
};

export function useTeachersData(categoryName, categoryValue) {

    return useQuery({
        queryKey: ['teachers', categoryName, categoryValue],
        queryFn: () => teacherQueryFn(categoryName, categoryValue),
        select: (response) => response.data,
    });
}