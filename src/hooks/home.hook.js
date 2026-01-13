import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "@/configs/axios.config";

export const useGetWhyParticipates = () => {
    return useQuery({
        queryKey: ["why-participates"],
        queryFn: async () => {
            const res = await axiosPublic.get("/why-participates");
            return res.data;
        },
    });
};
