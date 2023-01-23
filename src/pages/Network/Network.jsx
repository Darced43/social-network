import { Container } from "@mui/material"
import { useNavigate  } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

const Network = () => {
    const {signout} = useAuth()
    const navigate = useNavigate()
    return(
        <Container sx={{mt:1}} maxWidth="xl">
            <h2>Личный кабинет</h2>
            <button onClick={() => signout(() => navigate('/', {replace: true}))}>выйти</button>
        </Container>
    )
}

export default Network