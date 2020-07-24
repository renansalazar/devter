import Link from 'next/link'
import AppLayout from "../../components/AppLayout";

export default function Timeline({userName}) {
    return (
        <AppLayout>
            <Link href="/">
                <a>
                    Volver a Home
                </a>
            </Link>
            <h1>
                Timeline de {userName}
            </h1>
        </AppLayout>
    )
}

Timeline.getInitialProps =  () => {
    return  fetch('http://localhost:3000/api/hello').then((res)=>res.json())
}