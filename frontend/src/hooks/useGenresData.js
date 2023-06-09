import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const VocalOptionsQueryFn = () => {
//     const data = {
//         "page_size": 100,
//         "page_number": 1,
//         "table": "vocal",
//         "columns": ["*"]
//    }
//     return axios({ method: "get", url: "/api/read_data", data: data})
    return axios.get(`/api/read_data?page_size=100&page_number=1&table=vocal&columns=["*"]`)
};

const InstrumentalOptionsQueryFn = () => {
//     const data = {
//         "page_size": 100,
//         "page_number": 1,
//         "table": "instrumental",
//         "columns": ["*"]
//    }
//     return axios({ method: "get", url: "/api/read_data", data: data})
    return axios.get(`/api/read_data?page_size=100&page_number=1&table=instrumental&columns=["*"]`)
};

export function useVocalGenres() {
    return useQuery({
        queryKey: ['vocalOptions'],
        queryFn: VocalOptionsQueryFn,
        select: (response) => response.data,
    });
}

export function useInstrumentalGenres() {
    return useQuery({
        queryKey: ['instrumentalOptions'],
        queryFn: InstrumentalOptionsQueryFn,
        select: (response) => response.data,
    });
}