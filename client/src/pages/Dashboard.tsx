import { Container } from "@mui/material";
import { DashboardApp } from "../components/index";

interface Props {
    setUpdateData?: any;
    search?: string,
}

export default function Dashboard({ setUpdateData, search }: Props) {
    return (
        <>
            <Container maxWidth="xl">
                <DashboardApp setUpdateData={setUpdateData} search={search} />
            </Container>
        </>
    )
};

